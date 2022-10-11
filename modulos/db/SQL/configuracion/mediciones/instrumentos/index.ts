import * as utils from "../../../../../utils/index"

export const getInstrumentos = (filter: any, orderBy: any, paginacion: any) => {
    return utils.getEntidadByFieldFiltro("mediciones", "v_instrumentos_last", filter || [], orderBy || [{ field: "equi_creacion", type: "desc" }], paginacion || {}, "instrumentos")
}

