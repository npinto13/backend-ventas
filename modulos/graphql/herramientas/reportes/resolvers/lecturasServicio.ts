import * as auth from "../../../../autenticacion";
import * as utils from '../../../../utils'
import moment from "moment";
import {
    getLecturasServicio
} from "../../../../db/SQL";

export const LecturasServicioResolvers = {
    Query: {
        lecturasServicio: (parent: any, args: any, context: any) => {
        try {
          if (auth.decodeToken(context.authToken)) {
            return getLecturasServicio(args.edif_id,args.serv_id,args.usua_id,args.fecha,args.filter || [], args.orderBy || [{ field: "equi_numero", type: "asc" }], args.paginacion || {})
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