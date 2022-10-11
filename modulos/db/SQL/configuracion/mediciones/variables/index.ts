import * as utils from "../../../../../utils/index"

export const getVariables = (filter: any, orderBy: any, paginacion: any) => {
    return utils.getEntidadByFieldFiltro("mediciones", "v_variables_all", filter || [], orderBy || [{ field: "vari_creacion", type: "desc" }], paginacion || {}, "variables")
}

