import * as auth from "../../../../autenticacion";
import * as utils from '../../../../utils'
import {
  getServicios,
  insertServicio,
  updateServicio,
  deleteServicio
} from "../../../../db/SQL";

export const ServiciosResolvers = {
  Query: {
    servicios: (parent: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return getServicios(args.filter, args.orderBy, args.paginacion)
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
    insertServicio: (parents: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return insertServicio("mediciones", "v_servicios_all", args.fields || {})
        }
      }
      catch(e) {
        if (e instanceof Error) {
          return utils.mensaje(0, e.message)
        }
      }
    },
    updateServicio: (parents: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return updateServicio("mediciones","v_servicios_all",args.filter || {}, args.fields || {});
        }
      }
      catch(e) {
        if (e instanceof Error) {
          return utils.mensaje(0, e.message)
        }
      }
    },
    deleteServicio: (parents: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return deleteServicio("mediciones", "v_servicios_all",args.filter || {});
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