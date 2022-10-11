import { db } from "../../../../../db"
import * as utils from "../../../../../utils/"

export const getHistNumerico = async (punt_id: String,unid_id:String,fecha_inicial: String,fecha_final:String, intervalo:any, filter: any, orderBy: any, paginacion: any) => {
    let query = db.from(db.raw(`mediciones.f_punto_valores_numericos_rango('${punt_id}',${(unid_id !== null)?`'${unid_id}'`:'null::uuid'},'${fecha_inicial}','${fecha_final}',${intervalo}::smallint)`))
    utils.recursividad(query, filter, 1)
    //var getModel = () => query;
    
   // console.log("orderBY:",orderBy);

    //var totalCount = await getModel().clone().count();

    orderBy = orderBy.map((itemOrderBy: any) => {
        return { column: itemOrderBy.field, order: itemOrderBy.type }
    })

    query = (paginacion.cantidad) ? query.limit(paginacion.cantidad) : query
    query = ((paginacion.cantidad) && (paginacion.pagina)) ? query.offset((paginacion.pagina - 1) * paginacion.cantidad) : query

    return query.select(db.raw('count(*) over () as x_total'),'*').orderBy(orderBy).then((data: any) => {
        return {
            __typename: "histNumericos",
            ...{
                totalCount: (data.length>0)?data[0]['x_total']:0,
                data: data
            }
        }
    })
}

export const getHistNumericoDia = async (punt_id: String,unid_id:String,fecha:String,intervalo:any, filter: any, orderBy: any, paginacion: any) => {
    let query = db.from(db.raw(`mediciones.f_punto_valores_numericos_dia('${punt_id}',${(unid_id !== null)?`'${unid_id}'`:'null::uuid'},'${fecha}',${intervalo}::smallint)`))
    utils.recursividad(query, filter, 1)
    //var getModel = () => query;
    
   // console.log("orderBY:",orderBy);

    //var totalCount = await getModel().clone().count();

    orderBy = orderBy.map((itemOrderBy: any) => {
        return { column: itemOrderBy.field, order: itemOrderBy.type }
    })

    query = (paginacion.cantidad) ? query.limit(paginacion.cantidad) : query
    query = ((paginacion.cantidad) && (paginacion.pagina)) ? query.offset((paginacion.pagina - 1) * paginacion.cantidad) : query

    return query.select(db.raw('count(*) over () as x_total'),'*').orderBy(orderBy).then((data: any) => {
        return {
            __typename: "histNumericosDia",
            ...{
                totalCount: (data.length>0)?data[0]['x_total']:0,
                data: data
            }
        }
    })
}

