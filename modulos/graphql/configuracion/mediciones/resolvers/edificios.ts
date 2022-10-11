import * as auth from "../../../../autenticacion";
import * as utils from '../../../../utils'
import {
  getEdificios,
  insertEdificio,
  updateEdificio,
  deleteEdificio
} from "../../../../db/SQL";

export const EdificiosResolvers = {
  Query: {
    edificios: (parent: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return getEdificios(args.filter, args.orderBy, args.paginacion)
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
    insertEdificio: (parents: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return insertEdificio("mediciones", "v_edificios_all", args.fields || {})
        }
      }
      catch(e) {
        if (e instanceof Error) {
          return utils.mensaje(0, e.message)
        }
      }
    },
    updateEdificio: (parents: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return updateEdificio("mediciones","v_edificios_all",args.filter || {}, args.fields || {});
        }
      }
      catch(e) {
        if (e instanceof Error) {
          return utils.mensaje(0, e.message)
        }
      }
    },
    deleteEdificio: (parents: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return deleteEdificio("mediciones", "v_edificios_all",args.filter || {});
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