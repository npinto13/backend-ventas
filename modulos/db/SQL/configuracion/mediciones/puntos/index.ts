import * as utils from "../../../../../utils/index"

export const getPuntos = (filter: any, orderBy: any, paginacion: any) => {
    return utils.getEntidadByFieldFiltro("mediciones", "v_puntos_all", filter || [], orderBy || [{ field: "punt_creacion", type: "desc" }], paginacion || {}, "puntos")
}

