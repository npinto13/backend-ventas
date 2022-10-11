import * as utils from "../../../../../utils/index"

export const getEdificios = (filter: any, orderBy: any, paginacion: any) => {
    return utils.getEntidadByFieldFiltro("mediciones", "v_edificios_all", filter || [], orderBy || [{ field: "edif_creacion", type: "desc" }], paginacion || {}, "edificios")
}

export const insertEdificio= (schema: String, viewName: String, fields: any) => {
    return utils.insertEntidad(schema, "edificios", viewName, "edif_id", "edif_enti_id", fields, utils.fieldConvertEdificios)
}

export const updateEdificio = (schema: String, viewName: String, filter: any, fields: any) => {
    return utils.updateEntidad(schema, "edificios", viewName, "edif_id", "edif_enti_id", filter, fields, utils.fieldConvertEdificios, "edificios")
}

export const deleteEdificio = (schema: String, viewName: String, filter: any) => {
    return utils.deleteEntidadByFiltro(schema, viewName, filter, "edif_enti_id", "edificios")
}