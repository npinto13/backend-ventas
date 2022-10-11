import * as utils from "../../../../../utils/index"

export const getUnidades = (filter: any, orderBy: any, paginacion: any) => {
    return utils.getEntidadByFieldFiltro("mediciones", "v_unidades_all", filter || [], orderBy || [{ field: "unid_creacion", type: "desc" }], paginacion || {}, "unidades")
}

