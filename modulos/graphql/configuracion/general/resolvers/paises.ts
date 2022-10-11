import * as auth from "../../../../autenticacion";
import * as utils from '../../../../utils'
import {
  getPaises,
  insertPais,
  updatePais,
  deletePais
} from "../../../../db/SQL";

export const PaisesResolvers = {
  Query: {
    paises: (parent: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return getPaises(args.filter, args.orderBy, args.paginacion)
        }
      }
      catch(e) {
        if (e instanceof Error) {
          return utils.mensaje(0, e.message)
        }
      }
    }
  },
  Mutation: {
    insertPais: (parents: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return insertPais("public", "v_paises_all", args.fields || {})
        }
      }
      catch(e) {
        if (e instanceof Error) {
          return utils.mensaje(0, e.message)
        }
      }
    },
    updatePais: (parents: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return updatePais("public","v_paises_all",args.filter || {}, args.fields || {});
        }
      }
      catch(e) {
        if (e instanceof Error) {
          return utils.mensaje(0, e.message)
        }
      }
    },
    deletePais: (parents: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return deletePais("public", "v_paises_all",args.filter || {});
        }
      }
      catch(e) {
        if (e instanceof Error) {
          return utils.mensaje(0, e.message)
        }
      }
    }
  }
}