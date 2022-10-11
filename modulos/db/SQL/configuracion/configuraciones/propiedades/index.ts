import * as utils from "../../../../../utils/index"
import { db, conexionDB } from "../../../.."

export const getPropiedadesUsuario = (prca_id: any, usua_enti_id: String, fecha: String, default_value: any, filter: any, orderBy: any) => {
    const conexion = conexionDB()
    let query = db.from(db.raw(`configuraciones.f_extraer_todas_propiedades_usuario('${usua_enti_id}','${fecha}')`))
    
    utils.recursividad(query, filter, 1)

    orderBy = orderBy.map((itemOrderBy: any) => {
        return { column: itemOrderBy.field, order: itemOrderBy.type }
    })
    //console.log('Aquiiiii voy en propiedades de usuario')
    return query.select('*').orderBy(orderBy).then((data: any) => {
        return {
            __typename: 'propiedadesUsuario',
            ...{
                totalCount: data.length,
                data: data
            }
        }
    }).finally(()=>{
        conexion.destroy()
    })
}