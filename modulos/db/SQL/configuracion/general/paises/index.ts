import * as utils from "../../../../../utils/index"

export const getPaises = (filter: any, orderBy: any, paginacion: any) => {
    return utils.getEntidadByFieldFiltro("public", "v_paises_all", filter || [], orderBy || [{ field: "pais_creacion", type: "desc" }], paginacion || {}, "paises")
}

export const insertPais= (schema: String, viewName: String, fields: any) => {
    return utils.insertEntidad(schema, "paises", viewName, "pais_id", "pais_enti_id", fields, utils.fieldConvertPaises)
}

export const updatePais = (schema: String, viewName: String, filter: any, fields: any) => {
    return utils.updateEntidad(schema, "paises", viewName, "pais_id", "pais_enti_id", filter, fields, utils.fieldConvertPaises, "paises")
}

export const deletePais = (schema: String, viewName: String, filter: any) => {
    return utils.deleteEntidadByFiltro(schema, viewName, filter, "pais_enti_id", "paises")
}