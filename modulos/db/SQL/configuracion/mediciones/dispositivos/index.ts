import * as utils from "../../../../../utils/index"

export const getDispositivos = (filter: any, orderBy: any, paginacion: any) => {
    return utils.getEntidadByFieldFiltro("mediciones", "v_dispositivos_all", filter || [], orderBy || [{ field: "equi_creacion", type: "desc" }], paginacion || {}, "dispositivos")
}

