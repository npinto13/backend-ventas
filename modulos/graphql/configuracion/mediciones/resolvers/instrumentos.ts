import * as auth from "../../../../autenticacion";
import * as utils from '../../../../utils'
import {
  getInstrumentos,
} from "../../../../db/SQL";

export const InstrumentosResolvers = {
  Query: {
    instrumentos: (parent: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return getInstrumentos(args.filter, args.orderBy, args.paginacion)
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