import * as auth from "../../../../autenticacion";
import * as utils from "../../../../utils"
import { AuthenticationError } from 'apollo-server'
import bcryptjs from 'bcryptjs'
import moment from "moment";
import { resourceLimits } from "worker_threads";
import { db } from "../../../../db";


export const UsuariosResolvers = {
  Query: {
    usuarios: (parent: any, args: any, context: any) => {
      try {
        if (auth.decodeToken(context.authToken)) {
          return utils.getEntidadByFieldFiltro("seguridad", "v_usuarios_last", args.filter || [], args.orderBy || [{ field: "usua_creacion", type: "desc" }], args.paginacion || {}, "usuarios")
        }
      }
      catch (e) {
        if (e instanceof Error) {
          return utils.mensaje(0, e.message)
        }
      }
    },
    usuarioByAccessToken: (parent: any, args: any, context: any) => {
      return utils.getUserByToken(args.accessToken).then((sesi_usua_id: any) => {
        return utils.getEntidadByFieldFiltro("seguridad", "v_usuarios_last", { miembros: [{ condiciones: [{ field: "usua_id", value: [sesi_usua_id] }] }] }, args.orderBy || [{ field: "usua_creacion", type: "desc" }], args.paginacion || {}, "usuarios")
      })
    }
  },

  Mutation: {
    login: (parent: any, { usua_login, usua_passwd }: any, context: any) => {
      return utils.getEntidadByFieldFiltro("seguridad", "v_usuarios_last", { condiciones: [{ field: "usua_login", operador: "EQUAL", value: [usua_login] }] }, [], {}, "usuarios")
        .then(async (usuarios: any) => {
          let usuario = usuarios.data
          if ((usuario) && (usuario.length > 0)) {
            if (usuario[0].usua_activo === 1) {
              //console.log(usuario[0].usua_passwd)
              //console.log(bcryptjs.hashSync(usua_passwd, usuario[0].usua_salt))
              if (usuario[0].usua_passwd === bcryptjs.hashSync(usua_passwd, usuario[0].usua_salt)) {
                let accessToken = auth.createToken(usuario[0].usua_id, 1, "Hour");
                let refreshToken = auth.createToken(usuario[0].usua_id, 1, "Day");

                await utils.addSesion(usuario[0].usua_id, context.ip, context.headers, accessToken, refreshToken)
                //utils.addEntrada(usuario[0].usua_id, context.ip, context.headers)
                //utils.updateToken(usuario[0].usua_id, accessToken, refreshToken)
                //utils.insertToken(usuario[0].usua_id,accessToken,refreshToken)
                return {
                  __typename: "tokens",
                  ...{
                    accessToken, refreshToken
                  }
                }
              }
              throw new AuthenticationError(`La contraseña es incorrecta, intentelo de nuevo`)
            }
            throw new AuthenticationError(`Usuario ${usua_login} inactivo, consulte al administrador`)
          }
          throw new AuthenticationError(`Usuario ${usua_login} no encontrado`)
        })
      //.catch((e) => {throw new Error(e.message)});
    },
    loginTemp: (parent: any, { temp_id }: any, context: any) => {

      return utils.getEntidadByFieldFiltro("seguridad", "v_temporales", { condiciones: [{ field: "temp_id", operador: "EQUAL", value: [temp_id] }] }, [], {}, "temporales")
        .then(async (temporal: any) => {
          
          if (temporal.totalCount > 0) {
            if (temporal.data[0].temp_activo) {
              if (moment(temporal.data[0].temp_fecha).utc().add(1, "hour").isAfter(moment())) {
                if (!((temporal.data[0].temp_fecha_activacion === undefined) || (temporal.data[0].temp_fecha_activacion === null))){
                  if (((temporal.data[0].temp_fecha_uso === undefined) || (temporal.data[0].temp_fecha_uso === null))) {
                    await db("temporales")
                    .withSchema("seguridad")
                    .where({ "temp_id": temp_id })
                    .update({
                        "temp_fecha_uso": db.raw("timezone('UTC'::text, CURRENT_TIMESTAMP)")
                    })

                    
                    let accessToken = auth.createToken(temporal.data[0].temp_usua_id, 1, "Hour");
                    let refreshToken = auth.createToken(temporal.data[0].temp_usua_id, 1, "Day");

                    await utils.addSesion(temporal.data[0].temp_usua_id, context.ip, context.headers, accessToken, refreshToken)
                    //utils.addEntrada(usuario[0].usua_id, context.ip, context.headers)
                    //utils.updateToken(usuario[0].usua_id, accessToken, refreshToken)
                    //utils.insertToken(usuario[0].usua_id,accessToken,refreshToken)
                    return {
                      __typename: "tokens",
                      ...{
                        accessToken, refreshToken
                      }
                    }
                  }
                }
                else {
                  throw new AuthenticationError(`El link de acceso de contraseña temporal no ha sido activado`)
                }
              }
              else {
                throw new AuthenticationError(`El link de acceso de contraseña temporal ya caduco`)
              }
            }
            else {
              throw new AuthenticationError(`El link de acceso de contraseña temporal no esta activo`)
            }
          }
          else {
            throw new AuthenticationError(`El link de acceso de contraseña temporal no existe`)
          }

        }
        )
    },
    requestResetPassword: (parent: any, { usua_email }: any, context: any) => {
      return utils.getEntidadByFieldFiltro("seguridad", "v_usuarios_last", { condiciones: [{ field: "pers_email", operador: "ANY", value: [usua_email] }] }, [], {}, "usuarios")
        .then((result: any) => {
          if (result.totalCount > 0) {
            utils.generarLinkReseteo(usua_email, result.data[0])
            return result.totalCount
          }
          else {
            throw new AuthenticationError(`Correo ${usua_email} no registrado`)
          }
        })

    },
    resetPassword: (parent: any, { rese_id }: any, context: any) => {
      return utils.getEntidadByFieldFiltro("seguridad", "v_reseteos", { condiciones: [{ field: "rese_id", operador: "EQUAL", value: [rese_id] }] }, [], {}, "reseteos")
        .then((result: any) => {
          if (result.totalCount > 0) {
            if (result.data[0].rese_activo) {
              if (moment(result.data[0].rese_fecha).utc().add(1, "hour").isAfter(moment())) {
                utils.resetPassword(rese_id, result.data[0]);
                return result.totalCount
              }
              else {
                throw new AuthenticationError(`El link de reseteo ya caduco`)
              }
            }
            else {
              throw new AuthenticationError(`El link de reseteo ya no se encuentra activo`)
            }
          }
          else {
            throw new AuthenticationError(`El link de reseteo no existe`)
          }
        })
    },
    requestGenTempPassword: (parent: any, { usua_email }: any, context: any) => {
      return utils.getEntidadByFieldFiltro("seguridad", "v_usuarios_last", { condiciones: [{ field: "pers_email", operador: "ANY", value: [usua_email] }] }, [], {}, "usuarios")
        .then((result: any) => {
          if (result.totalCount > 0) {
            return utils.generarLinkTemporal(usua_email, result.data[0])
              .then((temporal: any) => {
                return temporal.temp_id
              })
          }
          else {
            throw new AuthenticationError(`Correo ${usua_email} no registrado`)
          }
        })

    },
    activeTempPassword: (parent: any, { temp_id }: any, context: any) => {
      return utils.getEntidadByFieldFiltro("seguridad", "v_temporales", { condiciones: [{ field: "temp_id", operador: "EQUAL", value: [temp_id] }] }, [], {}, "temporales")
        .then((result: any) => {
          if (result.totalCount > 0) {
            if (result.data[0].temp_activo) {
              if (moment(result.data[0].temp_fecha).utc().add(30, "minute").isAfter(moment())) {
                utils.activeTempPassword(temp_id, result.data[0]);
                return result.totalCount
              }
              else {
                throw new AuthenticationError(`El link de contraseña temporal ya caduco`)
              }
            }
            else {
              throw new AuthenticationError(`El link de contraseña temporal ya no se encuentra activo`)
            }
          }
          else {
            throw new AuthenticationError(`El link de contraseña temporal no existe`)
          }
        })
    },
    checkTempPassword: (parent: any, { temp_id }: any, context: any) => {
      return utils.getEntidadByFieldFiltro("seguridad", "v_temporales", { condiciones: [{ field: "temp_id", operador: "EQUAL", value: [temp_id] }] }, [], {}, "temporales")
        .then((result: any) => {
          if (result.totalCount > 0) {
            if (result.data[0].temp_activo) {
              if (moment(result.data[0].temp_fecha).utc().add(30, "minute").isAfter(moment())) {
                return !((result.data[0].temp_fecha_activacion === undefined) ||  (result.data[0].temp_fecha_activacion === null))
              }
              else {
                throw new AuthenticationError(`El link de contraseña temporal ya caduco, intente generarlo nuevamente`)
              }
            }
            else {
              throw new AuthenticationError(`El link de contraseña temporal ya no se encuentra activo, intente generarlo nuevamente`)
            }
          }
          else {
            throw new AuthenticationError(`El link de contraseña temporal no existe`)
          }
        })
    },
    addUsuario: (parent: any, args: any, context: any) => {

    }
  },

  usuario: {
    modulos: (parents: any, args: any, context: any) => {
      //let filter = { miembros: [{ condiciones: [{ field: "entr_usua_id", value: [parents.usua_id] }] }] }
      //if (args.filter) filter.miembros.push(args.filter)
      return utils.getEntidadByFunctionFiltro("seguridad", `modulos_usuarios('${parents.usua_id}')`, {}, args.orderBy || [], args.paginacion || {}, "modulos_usuarios");
    }
  }
}