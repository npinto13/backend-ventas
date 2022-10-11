import * as auth from "../../../../autenticacion";
import * as utils from '../../../../utils'
import {
  getUnidades
} from "../../../../db/SQL";

export const UnidadesResolvers = {
  Query: {
    unidades: (parent: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return getUnidades(args.filter, args.orderBy, args.paginacion)
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