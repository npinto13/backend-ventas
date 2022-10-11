import * as auth from "../../../../autenticacion";
import * as utils from '../../../../utils'
import {
  getVariables
} from "../../../../db/SQL";

export const VariablesResolvers = {
  Query: {
    variables: (parent: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return getVariables(args.filter, args.orderBy, args.paginacion)
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