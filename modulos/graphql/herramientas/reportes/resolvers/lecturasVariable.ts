import * as auth from "../../../../autenticacion";
import * as utils from '../../../../utils'
import moment from "moment";
import {
    getLecturasVariable
} from "../../../../db/SQL";

export const LecturasVariableResolvers = {
    Query: {
        lecturasVariable: (parent: any, args: any, context: any) => {
        try {
          if (auth.decodeToken(context.authToken)) {
            return getLecturasVariable(args.edif_id,args.inst_id,args.vari_id,args.fecha_desde,args.fecha_hasta,args.hora_desde,args.hora_hasta,args.filter, args.orderBy || [{ field: (args?.agrupado === true)?"inst_equi_nombre":"valo_fecha_lectura", type: "desc" }], args.paginacion || {pagina:1,cantidad:15},args.agrupado || false)
          }
        }
        catch(e) {
          if (e instanceof Error) {
            return utils.mensaje(0, e.message)
          }

        }
      },
    },
  }