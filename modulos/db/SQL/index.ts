/****************ESQUEMA PUBLIC O GENERAL **************************/
export {getPaises,insertPais,updatePais,deletePais
} from "./configuracion/general/paises";
export {getEdificios,insertEdificio,updateEdificio,deleteEdificio
} from "./configuracion/mediciones/edificios";
export {getServicios,insertServicio,updateServicio,deleteServicio
} from "./configuracion/mediciones/servicios";
export {getDispositivos
} from "./configuracion/mediciones/dispositivos";
export {getInstrumentos
} from "./configuracion/mediciones/instrumentos";
export {getPuntos
} from "./configuracion/mediciones/puntos";
export {getUnidades
} from "./configuracion/mediciones/unidades";
export {getVariables
} from "./configuracion/mediciones/variables";

export { getHistNumerico,getHistNumericoDia}  from "./herramientas/graficos/historicos"

export { getConsumosServicio} from "./herramientas/reportes/consumos"
export { getLecturasServicio} from "./herramientas/reportes/lecturasservicio"
export { getLecturasVariable} from "./herramientas/reportes/lecturasvariable"

