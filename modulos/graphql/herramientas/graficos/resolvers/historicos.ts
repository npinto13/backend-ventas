import * as auth from "../../../../autenticacion";
import * as utils from '../../../../utils'
import moment from "moment";
import {
  getHistNumerico,getHistNumericoDia
} from "../../../../db/SQL";

export const HistoricosResolvers = {
    Query: {
      histnumerico: (parent: any, args: any, context: any) => {
        try {
          if (auth.decodeToken(context.authToken)) {
            //console.log(args);
            return getHistNumerico(args.punt_id,args.unid_id,args.fecha_inicial,args.fecha_final,args.intervalo || 900, args.filter || [], args.orderBy || [{ field: "valo_fecha_lectura", type: "asc" }], args.paginacion || {})
          }
        }
        catch(e) {
          if (e instanceof Error) {
            return utils.mensaje(0, e.message)
          }

        }
      },
      histnumericoDia: (parent: any, args: any, context: any) => {
        try {
          if (auth.decodeToken(context.authToken)) {
            return getHistNumericoDia(args.punt_id,args.unid_id,args.fecha,args.intervalo || 900, args.filter || [], args.orderBy || [{ field: "valo_fecha_lectura", type: "asc" }], args.paginacion || {})
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