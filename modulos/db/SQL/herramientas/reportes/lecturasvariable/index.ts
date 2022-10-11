import { db, conexionDB } from "../../../.."
import * as utils from "../../../../../utils"

export const getLecturasVariable = async (edif_id: String, inst_id: String[], vari_id: String[], fecha_desde: String, fecha_hasta: String, hora_desde: String, hora_hasta: String, filter: String, orderBy: any, paginacion: any, agrupado:Boolean) => {
    try {

        let typeName = (agrupado)?"lecturasVariableAgrup":"lecturasVariableAll"
        let functionName = (agrupado)?"get_reporte_variables_agrup":"get_reporte_variables_all"
        const conexion = conexionDB();

        let query = conexion.from(db.raw(`mediciones.f_conexion_external_database_edificio('${edif_id}') servidor`))

        return query.then(async (data: any) => {
            let datos = utils.separar(data[0].servidor)


            let _inst_id = (inst_id) ? "".concat("'{", inst_id.join(","), "}'::uuid[]") : "null::uuid[]"
            let _vari_id = (vari_id) ? "".concat("'{", vari_id.join(","), "}'::uuid[]") : "null::uuid[]"
            //let _fecha_desde = (fecha_desde) ? `'${fecha_desde}'::timestamp at time zone '${datos.timezone}' at time zone 'UTC'` : "null::timestamp"
            //let _fecha_hasta = (fecha_hasta) ? `'${fecha_hasta}'::timestamp at time zone '${datos.timezone}' at time zone 'UTC'` : "null::timestamp"
            //let _hora_desde = (hora_desde) ? `('${hora_desde}'::time at time zone '${datos.timezone}' at time zone 'UTC')::time` : "null::time"
            //let _hora_hasta = (hora_hasta) ? `('${hora_hasta}'::time at time zone '${datos.timezone}' at time zone 'UTC')::time` : "null::time"

            let _fecha_desde = (fecha_desde) ? `'${fecha_desde}'` : "null::timestamp"
            let _fecha_hasta = (fecha_hasta) ? `'${fecha_hasta}'` : "null::timestamp"

            let _hora_desde = (hora_desde) ? `'${hora_desde}'` : "null::time"
            let _hora_hasta = (hora_hasta) ? `'${hora_hasta}'` : "null::time"

            let _filter = (filter) ? `'${filter}'` : "null::text";

            const conexion2 = conexionDB(datos.host,datos.port,datos.user,datos.password,datos.dbname);
            let query2 = conexion2.from(db.raw(` public.${functionName}('${datos.timezone}',${_inst_id},${_vari_id},${_fecha_desde},${_fecha_hasta},${_hora_desde},${_hora_hasta},'${orderBy[0].field}','${orderBy[0].type}',${paginacion.pagina},${paginacion.cantidad},${_filter})`))
            return query2.select('*').then((data: any) => {
                return {
                    __typename: typeName,
                    ...{
                        totalCount: (data.length>0)?data[0]['valo_total']:0,
                        data: data,
                    }
                }
            }).finally(()=>{
                conexion2.destroy()
            }).catch((error:any)=>{
                console.log(error)
                conexion2.destroy()
            })

        }).finally(()=>{
            conexion.destroy();
        })
    }
    catch (e) {
        if (e instanceof Error) {
            throw new Error(utils.getError(e.name, e.message));
        }
    }
}

