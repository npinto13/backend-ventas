import * as auth from "../../../../autenticacion";
import * as utils from '../../../../utils'
import {
  getDispositivos,
} from "../../../../db/SQL";

export const DispositivosResolvers = {
  Query: {
    dispositivos: (parent: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return getDispositivos(args.filter, args.orderBy, args.paginacion)
        }
      }
      catch(e) {
        if (e instanceof Error) {
          return utils.mensaje(0, e.message)
        }
      }
    }
  },

}