import { db, conexionDB } from "../../../.."
import * as utils from "../../../../../utils"

export const getConsumosServicio = async (edif_id: String, serv_id: String[], usua_id: string, fecha_inicial: String, fecha_final: String, filter: any, orderBy: any, paginacion: any) => {

    const conexion = conexionDB();

    let _serv_id = (serv_id) ? "".concat("'{", serv_id.join(","), "}'::uuid[]") : "null::uuid[]"

    let query = conexion.from(db.raw(` mediciones.get_consumos_servicios('${edif_id}',${_serv_id},'${usua_id}','${fecha_inicial}','${fecha_final}')`))
    utils.recursividad(query, filter, 1)
    //var getModel = () => query;

    // console.log("orderBY:",orderBy);

    //var totalCount = await getModel().clone().count();

    orderBy = orderBy.map((itemOrderBy: any) => {
        return { column: itemOrderBy.field, order: itemOrderBy.type }
    })

    query = (paginacion.cantidad) ? query.limit(paginacion.cantidad) : query
    query = ((paginacion.cantidad) && (paginacion.pagina)) ? query.offset((paginacion.pagina - 1) * paginacion.cantidad) : query

    return query.select(db.raw('count(*) over () as x_total'), '*').orderBy(orderBy).then((data: any) => {
        return {
            __typename: "consumos",
            ...{
                totalCount: (data.length > 0) ? data[0]['x_total'] : 0,
                data: data,
            }
        }
    }).finally(() => {
        conexion.destroy()
    }).catch(() => {
        conexion.destroy()
    })
}

