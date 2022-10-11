import * as auth from "../../../../autenticacion";
import * as utils from '../../../../utils'
import {
  getPuntos,
} from "../../../../db/SQL";

export const PuntosResolvers = {
  Query: {
    puntos: (parent: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return getPuntos(args.filter, args.orderBy, args.paginacion)
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