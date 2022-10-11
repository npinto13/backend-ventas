import * as utils from "../../../../../utils/index"

export const getServicios = (filter: any, orderBy: any, paginacion: any) => {
    return utils.getEntidadByFieldFiltro("mediciones", "v_servicios_all", filter || [], orderBy || [{ field: "serv_creacion", type: "desc" }], paginacion || {}, "servicios")
}

export const insertServicio= (schema: String, viewName: String, fields: any) => {
    return utils.insertEntidad(schema, "servicios", viewName, "serv_id", "serv_enti_id", fields, utils.fieldConvertServicios)
}

export const updateServicio = (schema: String, viewName: String, filter: any, fields: any) => {
    return utils.updateEntidad(schema, "servicios", viewName, "serv_id", "serv_enti_id", filter, fields, utils.fieldConvertServicios, "servicios")
}

export const deleteServicio = (schema: String, viewName: String, filter: any) => {
    return utils.deleteEntidadByFiltro(schema, viewName, filter, "serv_enti_id", "servicios")
}