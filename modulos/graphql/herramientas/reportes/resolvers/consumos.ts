import * as auth from "../../../../autenticacion";
import * as utils from '../../../../utils'
import moment from "moment";
import {
  getConsumosServicio
} from "../../../../db/SQL";

export const ConsumosResolvers = {
    Query: {
      consumos: (parent: any, args: any, context: any) => {
        try {
          if (auth.decodeToken(context.authToken)) {
            //console.log(args);
            return getConsumosServicio(args.edif_id,args.serv_id,args.usua_id,args.fecha_inicial,args.fecha_final,args.filter || [], args.orderBy || [{ field: "equi_numero", type: "asc" }], args.paginacion || {})
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