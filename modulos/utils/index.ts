import { db, conexionDB } from '../db/';
import * as constantes from './constantes';


export const fieldConvertEmpresas = {
    "empr_nombre": "enti_nombre",
    "empr_activo": "enti_activo",
    "empr_creacion": "enti_creacion"
}

export const fieldConvertRoles = {
    "role_nombre": "enti_nombre",
    "role_activo": "enti_activo",
    "role_creacion": "enti_creacion"
};

export const fieldConvertPuestos = {
    "pues_nombre": "enti_nombre",
    "pues_activo": "enti_activo",
    "pues_creacion": "enti_creacion"
};

export const fieldConvertPisos = {
    "piso_nombre": "enti_nombre",
    "piso_activo": "enti_activo",
    "piso_creacion": "enti_creacion"
};

export const fieldConvertModulos = {
    "modu_nombre": "enti_nombre",
    "modu_activo": "enti_activo",
    "modu_creacion": "enti_creacion"
};

export const fieldConvertServicios = {
    "serv_nombre": "enti_nombre",
    "serv_activo": "enti_activo",
    "serv_creacion": "enti_creacion"
};

export const fieldConvertUnidades = {
    "unid_nombre": "enti_nombre",
    "unid_activo": "enti_activo",
    "unid_creacion": "enti_creacion"
};

export const fieldConvertCiudades = {
    "ciud_nombre": "enti_nombre",
    "ciud_activo": "enti_activo",
    "ciud_creacion": "enti_creacion"
};

export const fieldConvertRegiones = {
    "regi_nombre": "enti_nombre",
    "regi_activo": "enti_activo",
    "regi_creacion": "enti_creacion"
};

export const fieldConvertVariables = {
    "vari_nombre": "enti_nombre",
    "vari_activo": "enti_activo",
    "vari_creacion": "enti_creacion"
};

export const fieldConvertCalculos = {
    "calc_nombre": "enti_nombre",
    "calc_activo": "enti_activo",
    "calc_creacion": "enti_creacion"
};

export const fieldConvertCargos = {
    "carg_nombre": "enti_nombre",
    "carg_activo": "enti_activo",
    "carg_creacion": "enti_creacion"
};

export const fieldConvertTarifas = {
    "tari_nombre": "enti_nombre",
    "tari_activo": "enti_activo",
    "tari_creacion": "enti_creacion"
};

export const fieldConvertTarifasEdificios = {
    "taed_nombre": "enti_nombre",
    "taed_activo": "enti_activo",
    "taed_creacion": "enti_creacion"
};

export const fieldConvertEdificios = {
    "edif_nombre": "enti_nombre",
    "edif_activo": "enti_activo",
    "edif_creacion": "enti_creacion"
};

export const fieldConvertPersonas = {
    "pers_nombres": "enti_nombre",
    "pers_activo": "enti_activo",
    "pers_creacion": "enti_creacion"
};

export const fieldConvertZonas = {
    "zona_nombre": "enti_nombre",
    "zona_activo": "enti_activo",
    "zona_creacion": "enti_creacion"
};

export const fieldConvertPropietarios = {
    "prop_nombre": "enti_nombre",
    "prop_activo": "enti_activo",
    "prop_creacion": "enti_creacion"
};
export const fieldConvertFranquicias = {
    "fran_nombre": "enti_nombre",
    "fran_activo": "enti_activo",
    "fran_creacion": "enti_creacion"
};

export const fieldConvertTiposdbs = {
    "tipo_nombre": "enti_nombre",
    "tipo_activo": "enti_activo",
    "tipo_creacion": "enti_creacion"
};

export const fieldConvertEspacios = {
    "espa_nombre": "enti_nombre",
    "espa_activo": "enti_activo",
    "espa_creacion": "enti_creacion"
};

export const fieldConvertUbicaciones = {
    "ubic_nombre": "enti_nombre",
    "ubic_activo": "enti_activo",
    "ubic_creacion": "enti_creacion"
};

export const fieldConvertProveedores = {
    "prov_nombre": "enti_nombre",
    "prov_activo": "enti_activo",
    "prov_creacion": "enti_creacion"
};

export const fieldConvertCategorias = {
    "cate_nombre": "enti_nombre",
    "cate_activo": "enti_activo",
    "cate_creacion": "enti_creacion"
};

export const fieldConvertPropiedades = {
    "prop_nombre": "enti_nombre",
    "prop_activo": "enti_activo",
    "prop_creacion": "enti_creacion"
};

export const fieldConvertTiposDG = {
    "tidg_nombre": "enti_nombre",
    "tidg_activo": "enti_activo",
    "tidg_creacion": "enti_creacion"
};

export const fieldConvertTiposND = {
    "tind_nombre": "enti_nombre",
    "tind_activo": "enti_activo",
    "tind_creacion": "enti_creacion"
};

export const fieldConvertDiagramas = {
    "diag_nombre": "enti_nombre",
    "diag_activo": "enti_activo",
    "diag_creacion": "enti_creacion"
};

export const fieldConvertTableros = {
    "tabl_nombre": "enti_nombre",
    "tabl_activo": "enti_activo",
    "tabl_creacion": "enti_creacion"
};

export const fieldConvertEficiencias = {
    "efic_nombre": "enti_nombre",
    "efic_activo": "enti_activo",
    "efic_creacion": "enti_creacion"
};

export const fieldConvertConsolidados = {
    "cons_nombre": "enti_nombre",
    "cons_activo": "enti_activo",
    "cons_creacion": "enti_creacion"
};

export const fieldConvertNiveles = {
    "nive_nombre": "enti_nombre",
    "nive_activo": "enti_activo",
    "nive_creacion": "enti_creacion"
};

export const fieldConvertWidgets = {
    "widg_nombre": "enti_nombre",
    "widg_activo": "enti_activo",
    "widg_creacion": "enti_creacion"
};

export const fieldConvertNodosInformativos = {
    "noin_nombre": "enti_nombre",
    "noin_activo": "enti_activo",
    "noin_creacion": "enti_creacion"
};

export const fieldConvertContratos = {
    "cont_correlativo": "enti_nombre",
    "cont_activo": "enti_activo",
    "cont_creacion": "enti_creacion"
};

export const fieldConvertAlarmas = {
    "alar_nombre": "enti_nombre",
    "alar_activo": "enti_activo",
    "alar_creacion": "enti_creacion"
};

export const fieldConvertListas = {
    "list_nombre": "enti_nombre",
    "list_activo": "enti_activo",
    "list_creacion": "enti_creacion"
};

export const fieldConvertPaises = {
    "pais_nombre": "enti_nombre",
    "pais_activo": "enti_activo",
    "pais_creacion": "enti_creacion"
};

export const isEmpty = (obj: any) => {
    return (Object.keys(obj).length === 0)
}

export const updateToken = (usua_id: String, accessToken: String, refreshToken: String) => {
    db("usuarios")
        .withSchema("seguridad")
        .where({ "usua_id": usua_id })
        .update({
            "usua_access_token": accessToken,
            "usua_refresh_token": refreshToken
        })
        .then()
}

export const insertToken = (usua_id: String, accessToken: String, refreshToken: String) => {
    db.withSchema("seguridad")
        .insert({
            sesi_usua_id: usua_id,
            sesi_usua_access_token: accessToken,
            sesi_usua_refresh_token: refreshToken
        })
        .into("sesiones")
        .then()

}

export const getInfoRequest = (req: any) => {
    let headers = req.headers;
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    ip = ip.split(':')
    ip = (ip[3]) ? ip[3] : '127.0.0.1'
    let authToken = req.headers[constantes.HEADER_NAME];
    return { authToken, ip, headers };
}

export const recursividad = (query: any, obj: any, nivel: any) => {
    for (var property in obj) {
        if (property === "miembros") {
            let conjuncion = obj["conjuncion"];
            return obj[property].map((miembro: any, index: any) => {
                if (index === 0) {
                    return query.where((builder: any) => {
                        builder = recursividad(builder, miembro, nivel++)
                        return builder
                    })
                }
                else {
                    if ((conjuncion === undefined) || (conjuncion === "AND")) {
                        return query.andWhere((builder: any) => {
                            builder = recursividad(builder, miembro, nivel++)
                            return builder
                        });
                    }
                    else {
                        return query.orWhere((builder: any) => {
                            builder = recursividad(builder, miembro, nivel++)
                            return builder
                        });
                    }
                }
            })
        }
        else if (property === "condiciones") {
            let conjuncion = obj["conjuncion"];

            return obj[property].map((condicion: any, index: any) => {
                let { field, operador, value } = condicion
                //console.log("field:",((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time")))));
                if (index === 0) {

                    switch (operador) {
                        case "SMALLER_THAN": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.where(db.raw(`${field}`), "<", db.raw(`'${value[0]}'`)) : query.where(db.raw(`upper(${field}::text)`), "<", db.raw(`upper('${value[0]}')`)); break;
                        case "SMALLER_THAN_OR_EQUAL": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.where(db.raw(`${field}`), "<=", db.raw(`'${value[0]}'`)) : query.where(db.raw(`upper(${field}::text)`), "<=", db.raw(`upper('${value[0]}')`)); break;
                        case "GREATER_THAN": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.where(db.raw(`${field}`), ">", db.raw(`'${value[0]}'`)) : query.where(db.raw(`upper(${field}::text)`), ">", db.raw(`upper('${value[0]}')`)); break;
                        case "GREATER_THAN_OR_EQUAL": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.where(db.raw(`${field}`), ">=", db.raw(`'${value[0]}'`)) : query.where(db.raw(`upper(${field}::text)`), ">=", db.raw(`upper('${value[0]}')`)); break;
                        case "IS_NULL": return query.whereNull(field); break;
                        case "IS_NOT_NULL": return query.whereNotNull(field); break;
                        case "IN": return query.whereIn(field, db.raw(value)); break;
                        case "NOT_IN": return query.whereNotIn(field, db.raw(value)); break;
                        case "NOT_LIKE": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.where(db.raw(`${field}`), "not like", db.raw(`'${value[0]}'`)) : query.where(db.raw(`upper(${field}::text)`), "not like", db.raw(`upper('${value[0]}')`)); break;
                        case "NOT_EQUAL": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.where(db.raw(`${field}`), "<>", db.raw(`'${value[0]}'`)) : query.where(db.raw(`upper(${field}::text)`), "<>", db.raw(`upper('${value[0]}')`)); break;
                        case "EQUAL": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.where(db.raw(`${field}`), "=", db.raw(`'${value[0]}'`)) : query.where(db.raw(`upper(${field}::text)`), "=", db.raw(`upper('${value[0]}')`)); break;
                        case "XEQUAL": return query.where(db.raw(`${field}`), "=", db.raw(`${value[0]}`))
                        case "ANY": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.where(db.raw(`'${value[0]}' ILIKE ANY(${field})`)) : query.where(db.raw(`upper('${value[0]}') ILIKE ANY(${field}::text[])`)); break;
                        case "ANYUUID": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.where(db.raw(`'${value[0]}' = ANY(${field})`)) : query.where(db.raw(`upper('${value[0]}') = ANY(${field}::text[])`)); break;
                        case "LIKE":
                        default: return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.where(db.raw(`${field}`), "=", db.raw(`'${value[0]}'`)) : query.where(db.raw(`upper(${field}::text)`), "like", db.raw(`upper('${value[0]}')`));
                    }

                }
                else {

                    if ((conjuncion === undefined) || (conjuncion === "AND")) {
                        switch (operador) {
                            case "SMALLER_THAN": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.andWhere(db.raw(`${field}`), "<", db.raw(`'${value[0]}'`)) : query.andWhere(db.raw(`upper(${field}::text)`), "<", db.raw(`upper('${value[0]}')`)); break;
                            case "SMALLER_THAN_OR_EQUAL": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.andWhere(db.raw(`${field}`), "<=", db.raw(`'${value[0]}'`)) : query.andWhere(db.raw(`upper(${field}::text)`), "<=", db.raw(`upper('${value[0]}')`)); break;
                            case "GREATER_THAN": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.andWhere(db.raw(`${field}`), ">", db.raw(`'${value[0]}'`)) : query.andWhere(db.raw(`upper(${field}::text)`), ">", db.raw(`upper('${value[0]}')`)); break;
                            case "GREATER_THAN_OR_EQUAL": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.andWhere(db.raw(`${field}`), ">=", db.raw(`'${value[0]}'`)) : query.andWhere(db.raw(`upper(${field}::text)`), ">=", db.raw(`upper('${value[0]}')`)); break;
                            case "IS_NULL": return query.andWhereNull(field); break;
                            case "IS_NOT_NULL": return query.andWhereNotNull(field); break;
                            case "IN": return query.whereIn(field, db.raw(value)); break;
                            case "NOT_IN": return query.whereNotIn(field, db.raw(value)); break;
                            case "NOT_LIKE": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.andWhere(db.raw(`${field}`), "not like", db.raw(`'${value[0]}'`)) : query.andWhere(db.raw(`upper(${field}::text)`), "not like", db.raw(`upper('${value[0]}')`)); break;
                            case "NOT_EQUAL": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.andWhere(db.raw(`${field}`), "<>", db.raw(`'${value[0]}'`)) : query.andWhere(db.raw(`upper(${field}::text)`), "<>", db.raw(`upper('${value[0]}')`)); break;
                            case "EQUAL": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.andWhere(db.raw(`${field}`), "=", db.raw(`'${value[0]}'`)) : query.andWhere(db.raw(`upper(${field}::text)`), "=", db.raw(`upper('${value[0]}')`)); break;
                            case "XEQUAL": return query.andWhere(db.raw(`${field}`), "=", db.raw(`${value[0]}`))
                            case "ANY": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.andWhere(db.raw(`'${value[0]}' ILIKE ANY(${field})`)) : query.andWhere(db.raw(`upper('${value[0]}') ILIKE ANY(${field}::text[])`)); break;
                            case "ANYUUID": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.andWhere(db.raw(`'${value[0]}' = ANY(${field})`)) : query.andWhere(db.raw(`upper('${value[0]}') = ANY(${field}::text[])`)); break;
                            case "LIKE":
                            default: return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.andWhere(db.raw(`${field}`), "=", db.raw(`'${value[0]}'`)) : query.andWhere(db.raw(`upper(${field}::text)`), "like", db.raw(`upper('${value[0]}')`));
                        }
                    }
                    else {

                        switch (operador) {
                            case "SMALLER_THAN": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.orWhere(db.raw(`${field}`), "<", db.raw(`'${value[0]}'`)) : query.orWhere(db.raw(`upper(${field}::text)`), "<", db.raw(`upper('${value[0]}')`)); break;
                            case "SMALLER_THAN_OR_EQUAL": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.orWhere(db.raw(`${field}`), "<=", db.raw(`'${value[0]}'`)) : query.orWhere(db.raw(`upper(${field}::text)`), "<=", db.raw(`upper('${value[0]}')`)); break;
                            case "GREATER_THAN": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.orWhere(db.raw(`${field}`), ">", db.raw(`'${value[0]}'`)) : query.orWhere(db.raw(`upper(${field}::text)`), ">", db.raw(`upper('${value[0]}')`)); break;
                            case "GREATER_THAN_OR_EQUAL": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.orWhere(db.raw(`${field}`), ">=", db.raw(`'${value[0]}'`)) : query.orWhere(db.raw(`upper(${field}::text)`), ">=", db.raw(`upper('${value[0]}')`)); break;
                            case "IS_NULL": return query.orWhereNull(field); break;
                            case "IS_NOT_NULL": return query.orWhereNotNull(field); break;
                            case "NOT_IN": return query.orWhereNotIn(field, db.raw(value)); break;
                            case "IN": return query.orWhereIn(field, db.raw(value)); break;
                            case "NOT_LIKE": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.orWhere(db.raw(`${field}`), "not like", db.raw(`'${value[0]}'`)) : query.orWhere(db.raw(`upper(${field}::text)`), "not like", db.raw(`upper('${value[0]}')`)); break;
                            case "NOT_EQUAL": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.orWhere(db.raw(`${field}`), "<>", db.raw(`'${value[0]}'`)) : query.orWhere(db.raw(`upper(${field}::text)`), "<>", db.raw(`upper('${value[0]}')`)); break;
                            case "EQUAL": return ((field === "true") || (field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.orWhere(db.raw(`${field}`), "=", db.raw(`'${value[0]}'`)) : query.orWhere(db.raw(`upper(${field}::text)`), "=", db.raw(`upper('${value[0]}')`)); break;
                            case "XEQUAL": return query.orWhere(db.raw(`${field}`), "=", db.raw(`${value[0]}`))
                            case "ANY": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.orWhere(db.raw(`'${value[0]}' ILIKE ANY(${field})`)) : query.orWhere(db.raw(`upper('${value[0]}') ILIKE ANY(${field}::text[])`)); break;
                            case "ANYUUID": return ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.orWhere(db.raw(`'${value[0]}' = ANY(${field})`)) : query.orWhere(db.raw(`upper('${value[0]}') = ANY(${field}::text[])`)); break;
                            case "LIKE":
                            default: ((field.endsWith("_id")) || (field.endsWith("::date") || (field.endsWith("::time") || (field.endsWith("::timestamp"))))) ? query.orWhere(db.raw(`${field}`), "like", db.raw(`'${value[0]}'`)) : query.orWhere(db.raw(`upper(${field}::text)`), "like", db.raw(`upper('${value[0]}')`));
                        }
                    }
                }
            });
        }
    }
    return query;
}

export const dividirFieldEntidad = (fieldKey: String, campos: any, fieldConversion: any) => {
    let fieldsDependiente = Object.create(null);
    let fieldsEntidad = Object.create(null);
    for (var property in campos) {
        if (fieldConversion[property]) {
            fieldsEntidad[(fieldConversion[property]) ? fieldConversion[property] : property] = campos[property]
        }
        else if (property !== fieldKey) {
            fieldsDependiente[property] = campos[property]
        }
    }
    return { fieldsEntidad, fieldsDependiente }
}


export const getEntidadByFunctionFiltro = async (schema: String, nameFunction: any, filter: any, orderBy: any, paginacion: any, typeName: String) => {
    let query = db.from(db.raw(`${schema}.${nameFunction}`))

    recursividad(query, filter, 0)

    var getModel = () => query;

    var totalCount = await getModel().clone().count();

    orderBy = orderBy.map((itemOrderBy: any) => {
        return { column: itemOrderBy.field, order: itemOrderBy.type }
    })

    query = (paginacion.cantidad) ? query.limit(paginacion.cantidad) : query
    query = ((paginacion.cantidad) && (paginacion.pagina)) ? query.offset((paginacion.pagina - 1) * paginacion.cantidad) : query


    return query.select('*').orderBy(orderBy).then((records: any) => {
        if (records.length > 0) {
            return {
                __typename: typeName,
                ...{
                    totalCount: totalCount[0]['count'],
                    data: records
                }
            }
        }
        return mensaje(0, `${nameFunction} condición no Encontrado`)
    });

}

export const getModulosDisponiblesRol = async (role_id: String, filter: any, orderBy: any, paginacion: any) => {

    let query = db.from(db.raw(`seguridad.f_modulos_roles('${role_id}')`))

    recursividad(query, filter, 0)

    var getModel = () => query;

    var totalCount = await getModel().clone().count();

    orderBy = orderBy.map((itemOrderBy: any) => {
        return { column: itemOrderBy.field, order: itemOrderBy.type }
    })

    query = (paginacion.cantidad) ? query.limit(paginacion.cantidad) : query
    query = ((paginacion.cantidad) && (paginacion.pagina)) ? query.offset((paginacion.pagina - 1) * paginacion.cantidad) : query

    return query.select('*').orderBy(orderBy).then((records: any) => {
        if (records.length > 0) {
            return {
                __typename: "modulos",
                ...{
                    totalCount: totalCount[0]['count'],
                    data: records
                }
            }
        }
        return mensaje(0, `seguridad.v_modulos2 condición no Encontrada`)
    });
}

export const getEntidadByFieldFiltro = async (schema: String, tableName: String, filter: any, orderBy: any, paginacion: any, typeName: String, selected: String = '*', count = true) => {
    try {

        const conexion = conexionDB()

        let query = conexion.withSchema(schema)
            .from(tableName)

        let a = recursividad(query, filter, 0)

        //var getModel = () => query;

        //var totalCount = await getModel().clone().count();

        orderBy = orderBy.map((itemOrderBy: any) => {
            return { column: itemOrderBy.field, order: itemOrderBy.type }
        })

        query = (paginacion.cantidad) ? query.limit(paginacion.cantidad) : query
        query = ((paginacion.cantidad) && (paginacion.pagina)) ? query.offset((paginacion.pagina - 1) * paginacion.cantidad) : query

        const selectField = [db.raw(selected)]
        if (count) {
            selectField.push(db.raw('count(*) over() as x_total'))
        }
        return query.select(selectField).orderBy(orderBy).then((records: any) => {
            return {
                __typename: typeName,
                ...{
                    totalCount: (records.length > 0) ? ((count) ? records[0]['x_total'] : records.length) : 0,//totalCount[0]['count'],
                    data: records
                }
            }
            //}
            //return mensaje(0, `${schema}.${tableName} condición no Encontrado`)
        }).finally(()=>{
            conexion.destroy()
        }).catch(()=>{
            conexion.destroy()
        });
    }
    catch (e) {
        if (e instanceof Error) {
            throw new Error(getError(e.name, e.message));
        }
        else {
            console.log(e)
        }
    }
}

export const deleteEntidadByFiltro = async (schema: String, tableName: String, filter: any, fieldConexion: String, typeName: String) => {
    if (!(isEmpty(filter))) {
        let query = db.withSchema(schema)
            .from(tableName)
        recursividad(query, filter, 0)
        return query.select("*").then((dependiente: any) => {
            if (dependiente.length > 0) {
                return db.withSchema("public")
                    .from("entidades")
                    .returning("*")
                    .where("enti_id", dependiente[0][`${fieldConexion}`])
                    .delete()
                    .then((entidad: any) => {
                        return {
                            __typename: typeName,
                            ...{
                                totalCount: 1,
                                data: dependiente
                            }
                        }
                    })
            }
            return mensaje(0, `${schema}.${tableName} condición no Encontrado`)
        });
    }
    else {
        return mensaje(0, `${schema}.${tableName} condición insegura, eliminacion sin clausula where`)
    }
}

export const deleteTablaByFiltro = async (schema: String, tableName: String, viewName: String, filter: any, typeName: String) => {
    if (!(isEmpty(filter))) {
        let query = db.withSchema(schema)
            .from(viewName)
        recursividad(query, filter, 0)
        return query.select("*").then((registros: any) => {
            let query2 = db.withSchema(schema)
                .from(tableName)
            recursividad(query2, filter, 0)
            return query2.returning("*").delete().then((dependiente: any) => {
                return {
                    __typename: typeName,
                    ...{
                        totalCount: 1,
                        data: registros
                    }
                }
            })
        })
    }
    else {
        return mensaje(0, `${schema}.${tableName} condición insegura, eliminacion sin clausula where`)
    }
}

export const insertEntidad = async (schema: String, tableName: String, viewName: String, fieldKey: String, fieldRelation: String, fields: any, fieldConversion: any) => {
    const { fieldsEntidad, fieldsDependiente } = dividirFieldEntidad(fieldKey, fields, fieldConversion)
    return db.withSchema("public")
        .insert(fieldsEntidad)
        .into("entidades")
        .returning("*")
        .then((entidad: any) => {
            const relacion: any = {}
            relacion[`${fieldRelation}`] = entidad[0].enti_id;
            return db.withSchema(schema)
                .insert({ ...fieldsDependiente, ...relacion })
                .into(tableName)
                .returning("*")
                .then((dependiente: any) => {
                    const where: any = {}
                    where[`${fieldRelation}`] = entidad[0].enti_id;
                    return db.withSchema(schema)
                        .select("*")
                        .from(viewName)
                        .where(where)
                        .then((result: any) => {
                            return result[0]
                        })
                })
        })
}

export const insertTabla = async (schema: String, tableName: String, viewName: String, fieldKey: String, fields: any, typeName: String) => {
    return db.withSchema(schema)
        .insert(fields)
        .into(tableName)
        .returning("*")
        .then((registro: any) => {
            const where: any = {}
            where[`${fieldKey}`] = registro[0][`${fieldKey}`];
            return db.withSchema(schema)
                .select("*")
                .from(viewName)
                .where(where)
                .then((result: any) => {
                    return {
                        __typename: typeName,
                        ...result[0]
                    }
                })
        })
}

export const updateEntidad = (schema: String, tableName: String, viewName: String, fieldKey: String, fieldRelation: String, filter: any, fields: any, fieldConversion: any, typeName: String) => {
    const { fieldsEntidad, fieldsDependiente } = dividirFieldEntidad(fieldKey, fields, fieldConversion)
    if (!(isEmpty(filter))) {
        if (!isEmpty(fieldsDependiente)) {
            let query = db.withSchema(schema)
                .update(fieldsDependiente)
                .from(tableName)
            recursividad(query, filter, 0)
            return query.returning("*").then((dependientes: any) => {
                if (!isEmpty(fieldsEntidad)) {
                    let filtro = { condiciones: [{ field: "enti_id", operador: "IN", value: dependientes.map((dependiente: any) => `'${dependiente[`${fieldRelation}`]}'`) }] }
                    let query2 = db.withSchema("public")
                        .update(fieldsEntidad)
                        .from("entidades")
                    recursividad(query2, filtro, 0)
                    return query2.returning("*").then((entidades: any) => {
                        let query3 = db.withSchema(schema)
                            .select("*")
                            .from(viewName)
                        recursividad(query3, filter, 0)
                        return query3.then((registros: any) => {
                            return {
                                __typename: typeName,
                                ...{
                                    totalCount: registros.length,
                                    data: registros
                                }
                            }
                        })
                    })
                }
                else {
                    let query2 = db.withSchema(schema)
                        .select("*")
                        .from(viewName)
                    recursividad(query2, filter, 0)
                    return query2.then((registros: any) => {
                        return {
                            __typename: typeName,
                            ...{
                                totalCount: registros.length,
                                data: registros
                            }
                        }
                    })
                }
            });
        }
        else {
            if (!isEmpty(fieldsEntidad)) {
                let query = db.withSchema(schema)
                    .select("*")
                    .from(viewName)
                recursividad(query, filter, 0)
                return query.then((dependientes: any) => {
                    let query2 = db.withSchema("public")
                        .update(fieldsEntidad)
                        .from("entidades")
                    let filtro = { condiciones: [{ field: "enti_id", operador: "IN", value: dependientes.map((dependiente: any) => `'${dependiente[`${fieldRelation}`]}'`) }] }
                    recursividad(query2, filtro, 0)
                    return query2.returning("*").then((entidades: any) => {
                        let query3 = db.withSchema(schema)
                            .select("*")
                            .from(viewName)
                        recursividad(query3, filter, 0)
                        return query3.then((registros: any) => {
                            return {
                                __typename: typeName,
                                ...{
                                    totalCount: registros.length,
                                    data: registros
                                }
                            }
                        })
                    })
                })
            }
            else {
                let query3 = db.withSchema(schema)
                    .select("*")
                    .from(viewName)
                recursividad(query3, filter, 0)
                return query3.then((registros: any) => {
                    return {
                        __typename: typeName,
                        ...{
                            totalCount: registros.length,
                            data: registros
                        }
                    }
                })
            }
        }
    }
    else {
        return mensaje(0, `${schema}.${tableName} condición insegura, actualizacion sin clausula where`)
    }
}

export const updateTablaFiltro = (schema: String, tableName: String, viewName: String, filter: any, fields: any, typeName: String) => {
    if (!(isEmpty(filter))) {
        if (!(isEmpty(fields))) {
            let query = db.withSchema(schema)
                .update(fields)
                .from(tableName)
            recursividad(query, filter, 0)
            return query.returning("*").then((registro: any) => {
                let query2 = db.withSchema(schema)
                    .select("*")
                    .from(viewName)
                recursividad(query2, filter, 0)
                return query2.then((registros: any) => {
                    return {
                        __typename: typeName,
                        ...{
                            totalCount: registros.length,
                            data: registros
                        }
                    }
                })
            })
        }
    }
    else {
        return mensaje(0, `${schema}.${tableName} condición insegura, actualizacion sin clausula where`)
    }
}

export const updatePrivilegio = async (modu_id: String, role_id: String, index: number, status: number) => {
    let query = db.withSchema("seguridad")
        .from("permisos_modulos")
        .where({
            "pemo_modu_id": modu_id,
            "pemo_role_id": role_id
        })

    var getModel = () => query;

    var totalCount = await getModel().clone().count();

    if (totalCount[0]['count'] === '0') {
        let pemo_privilegios = [0, 0, 0, 0];
        pemo_privilegios[index - 1] = status;
        let query2 = db.withSchema("seguridad")
            .insert({
                pemo_modu_id: modu_id,
                pemo_role_id: role_id,
                pemo_privilegios: pemo_privilegios
            })
            .into("permisos_modulos")
            .returning("*")

        return query2.then((privilegio: any) => {
            let query3 = db.select("*")
                .from(db.raw(`seguridad.f_modulos_roles('${role_id}')`))
                .where({ modu_id: modu_id })

            return query3.then((privilegio2: any) => {
                return {
                    __typename: "modulo",
                    ...privilegio2[0]
                }
            })
        })
    }
    else {

        let query2 = db.withSchema("seguridad")
            .update(`pemo_privilegios[${index}]`, status)
            .from("permisos_modulos")
            .where({
                pemo_modu_id: modu_id,
                pemo_role_id: role_id
            })

        return query2.returning("*").then((privilegio: any) => {
            let query3 = db.select("*")
                .from(db.raw(`seguridad.f_modulos_roles('${role_id}')`))
                .where({ modu_id: modu_id })

            return query3.then((privilegio2: any) => {
                return {
                    __typename: "modulo",
                    ...privilegio2[0]
                }
            })
        })


    }
}

export const intercambioOrden = (schema: String, tableName: String, viewName: String, fieldName: String, origen: String, destino: String, groupField: String, groupValue: String, typeName: String) => {
    let query = db.from(db.raw(`public.f_intercambio_orden(${origen}::smallint,${destino}::smallint,
                                '${schema}','${tableName}','${groupField}',${(groupValue) ? `'${groupValue}'` : `NULL`},'${fieldName}')`))

    return query.then((records: any) => {
        if (records.length > 0) {
            return {
                __typename: typeName,
                ...{
                    totalCount: 0,
                    data: records
                }
            }
        }
        return mensaje(0, `seguridad.v_modulos2 condición no Encontrada`)
    });
}

export const generarLinkReseteo = (email: any, usuario: any) => {
    updateTablaFiltro('seguridad', 'reseteos', 'v_reseteos', { condiciones: [{ field: "rese_usua_id", operador: "EQUAL", value: [usuario.usua_id] }, { field: "rese_activo", operador: "EQUAL", value: [true] }] }, { rese_activo: false }, 'reseteos')
    insertTabla('seguridad', 'reseteos', 'v_reseteos', 'rese_id', { rese_usua_id: usuario.usua_id, rese_email: email }, 'reseteos')
        .then((reseteo: any) => {
            sendRequestMail(email, reseteo)
        })
}

export const generarLinkTemporal = (email: any, usuario: any) => {
    return updateTablaFiltro('seguridad', 'temporales', 'v_temporales', { condiciones: [{ field: "temp_usua_id", operador: "EQUAL", value: [usuario.usua_id] }, { field: "temp_activo", operador: "EQUAL", value: [true] }] }, { temp_activo: false }, 'temporales')
        .then(() =>
            insertTabla('seguridad', 'temporales', 'v_temporales', 'temp_id', { temp_usua_id: usuario.usua_id, temp_email: email }, 'reseteos')
                .then((temporal: any) => {
                    sendTemporalMail(email, temporal)
                    return temporal;
                })
        )
}

export const resetPassword = (rese_id: any, reseteo: any) => {
    updateTablaFiltro('seguridad', 'reseteos', 'v_reseteos', { condiciones: [{ field: "rese_id", operador: "EQUAL", value: [rese_id] }, { field: "rese_activo", operador: "EQUAL", value: [true] }] }, { rese_activo: true }, 'reseteos')
    db.from(db.raw(`seguridad.resetpassword('${reseteo.usua_id}')`))
        .select('*').then((result: any) => {
            sendResetMail(reseteo.rese_email, reseteo)
        })

}

export const activeTempPassword = (temp_id: any, reseteo: any) => {
    return updateTablaFiltro('seguridad', 'temporales', 'v_temporales', { condiciones: [{ field: "temp_id", operador: "EQUAL", value: [temp_id] }] }, { temp_fecha_activacion: db.raw("timezone('UTC'::text, CURRENT_TIMESTAMP)") }, 'temporales')
        .then((result: any) => {
            return 1
        })


}

export const sendResetMail = (email: any, reseteo: any) => {
    const nodemailer = require('nodemailer'); const transporter = nodemailer.createTransport({
        host: 'mail.ribe.cl',
        port: 465,
        auth: {
            user: 'gabrielbermudez@ribe.cl',
            pass: '*GabrielA1978',
        },
    });

    transporter.verify().then(() => {

        transporter.sendMail({
            from: '"Gabriel Bermudez" <gabrielbermudez@ribe.cl>', // sender address
            to: `${email}`, // list of receivers
            subject: "Ribex 4.0 Notificación de confirmacion de reseteo de contraseña", // Subject line
            text: `Hola ${reseteo.pers_nombres} ${reseteo.pers_apellidos}`, // plain text body
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
            
            <head>
                <meta charset="UTF-8">
                <meta content="width=device-width, initial-scale=1" name="viewport">
                <meta name="x-apple-disable-message-reformatting">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta content="telephone=no" name="format-detection">
                <title></title>
                <!--[if (mso 16)]>
                <style type="text/css">
                a {text-decoration: none;}
                </style>
                <![endif]-->
                <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
                <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG></o:AllowPNG>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            </head>
            
            <body>
                <div class="es-wrapper-color">
                    <!--[if gte mso 9]>
                        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                            <v:fill type="tile" color="#fafafa"></v:fill>
                        </v:background>
                    <![endif]-->
                    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td class="esd-email-paddings" valign="top">
                                    <table class="es-header" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="es-adaptive esd-stripe" esd-custom-block-id="88593" align="center">
                                                    <table class="es-header-body" style="background-color: #aeb7bd;" width="600" cellspacing="0" cellpadding="0" bgcolor="#aeb7bd" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" style="background-color: #aeb7bd;" bgcolor="#aeb7bd" align="center">
                                                                    <!--[if mso]><table width="560" cellpadding="0" 
                                    cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
                                                                    <table class="es-left" cellspacing="0" cellpadding="0" align="center">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="es-m-p20b esd-container-frame" width="270" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-image es-m-p0l es-m-txt-c" style="font-size:0" align="center">
                                                                                                    <a href="https://ribe.cl" target="_blank"><img src="http://miteletrabajo.cl/media/logos/ribe2.png" alt style="display: block;" width="100"></a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" style="background-color: #fafafa;" bgcolor="#fafafa" align="center">
                                                    <table class="es-content-body" style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p40t es-p20r es-p20l" style="background-color: transparent; background-position: left top;" bgcolor="transparent" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                    <table style="background-position: left top;" width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-image es-p5t es-p5b" style="font-size:0" align="center">
                                                                                                    <a target="_blank"><img src="http://miteletrabajo.cl/media/logos/change.png" alt style="display: block;" width="175"></a>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p15t es-p15b" align="center">
                                                                                                    <h1 style="color: #333333; font-size: 20px;"><strong>SU CONTRASEÑA </strong></h1>
                                                                                                    <h1 style="color: #333333; font-size: 20px;"><strong>&nbsp;FUE RESETEADA</strong></h1>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p40r es-p40l" align="left">
                                                                                                    <p style="text-align: center;">Hola,&nbsp;${reseteo.pers_nombres} ${reseteo.pers_apellidos}</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p35r es-p40l" align="left">
                                                                                                    <p style="text-align: center;">¡Le notificamos que el reseteo de su contraseña fue realizado de forma exitosa!</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p35r es-p40l" align="left">
                                                                                                    <p style="text-align: center;">Estos son los datos para el acceso:</p>
                                                                                                    <p style="text-align: center;"><b>Usuario:</b>${reseteo.usua_login}</p>
                                                                                                    <p style="text-align: center;"><b>Contraseña:</b>123456</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p25t es-p40r es-p40l" align="center">
                                                                                                    <p>Haga clic en el link a continuación para ir al portal:</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                </br>
                                                                                                <td class="esd-block-button es-p40t es-p40b es-p10r es-p10l" align="center"><span class="es-button-border"><a href="http://mitelerabajo.cl" class="es-button" target="_blank">PORTAL 4.0</a></span></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="esd-structure es-p5t es-p20b es-p20r es-p20l" style="background-position: left top;" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-text" esd-links-color="#666666" align="center">
                                                                                                    <p style="font-size: 14px;">Contactenos: <a target="_blank" style="font-size: 14px; color: #666666;" href="tel:123456789">123456789</a> | <a target="_blank" href="administracion@ribe.cl" style="font-size: 14px; color: #666666;">administracion@ribe.cl</a></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>
            
            </html>`, // html body
        }).then((info: any) => {
            console.log({ info });
        }).catch(console.error);
    }).catch(console.error);
}

export const sendRequestMail = (email: any, reseteo: any) => {
    const nodemailer = require('nodemailer'); const transporter = nodemailer.createTransport({
        host: 'mail.ribe.cl',
        port: 465,
        auth: {
            user: 'gabrielbermudez@ribe.cl',
            pass: '*GabrielA1978',
        },
    });
    transporter.verify().then(() => {

        transporter.sendMail({
            from: '"Gabriel Bermudez" <gabrielbermudez@ribe.cl>', // sender address
            to: `${email}`, // list of receivers
            subject: "Ribex 4.0 Notificación de solicitud de reseteo de contraseña", // Subject line
            text: `Hola ${reseteo.pers_nombres} ${reseteo.pers_apellidos}`, // plain text body
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
            
            <head>
                <meta charset="UTF-8">
                <meta content="width=device-width, initial-scale=1" name="viewport">
                <meta name="x-apple-disable-message-reformatting">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta content="telephone=no" name="format-detection">
                <title></title>
                <!--[if (mso 16)]>
                <style type="text/css">
                a {text-decoration: none;}
                </style>
                <![endif]-->
                <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
                <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG></o:AllowPNG>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            </head>
            
            <body>
                <div class="es-wrapper-color">
                    <!--[if gte mso 9]>
                        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                            <v:fill type="tile" color="#fafafa"></v:fill>
                        </v:background>
                    <![endif]-->
                    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td class="esd-email-paddings" valign="top">
                                    <table class="es-header" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="es-adaptive esd-stripe" esd-custom-block-id="88593" align="center">
                                                    <table class="es-header-body" style="background-color: #aeb7bd;" width="600" cellspacing="0" cellpadding="0" bgcolor="#aeb7bd" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" style="background-color: #aeb7bd;" bgcolor="#aeb7bd" align="center">
                                                                    <!--[if mso]><table width="560" cellpadding="0" 
                                    cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
                                                                    <table class="es-left" cellspacing="0" cellpadding="0" align="center">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="es-m-p20b esd-container-frame" width="270" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-image es-m-p0l es-m-txt-c" style="font-size:0" align="center">
                                                                                                    <a href="https://ribe.cl" target="_blank"><img src="http://miteletrabajo.cl/media/logos/ribe2.png" alt style="display: block;" width="100"></a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" style="background-color: #fafafa;" bgcolor="#fafafa" align="center">
                                                    <table class="es-content-body" style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p40t es-p20r es-p20l" style="background-color: transparent; background-position: left top;" bgcolor="transparent" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                    <table style="background-position: left top;" width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-image es-p5t es-p5b" style="font-size:0" align="center">
                                                                                                    <a target="_blank"><img src="http://miteletrabajo.cl/media/logos/reset.png" alt style="display: block;" width="175"></a>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p15t es-p15b" align="center">
                                                                                                    <h1 style="color: #333333; font-size: 20px;"><strong>OLVIDÓ SU </strong></h1>
                                                                                                    <h1 style="color: #333333; font-size: 20px;"><strong>&nbsp;CONTRASEÑA?</strong></h1>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p40r es-p40l" align="left">
                                                                                                    <p style="text-align: center;">Hola,&nbsp;${reseteo.pers_nombres} ${reseteo.pers_apellidos}</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p35r es-p40l" align="left">
                                                                                                    <p style="text-align: center;">¡Hubo una solicitud para cambiar su contraseña!</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p25t es-p40r es-p40l" align="center">
                                                                                                    <p>Si no realizó esta solicitud, simplemente ignore este correo electrónico. De lo contrario, haga clic en el link a continuación para cambiar su contraseña:</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                </br>
                                                                                                <td class="esd-block-button es-p40t es-p40b es-p10r es-p10l" align="center"><span class="es-button-border"><a href="http://mitelerabajo.cl/auth/reset/${reseteo.rese_id}" class="es-button" target="_blank">RESETEAR CONTRASEÑA</a></span></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="esd-structure es-p5t es-p20b es-p20r es-p20l" style="background-position: left top;" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-text" esd-links-color="#666666" align="center">
                                                                                                    <p style="font-size: 14px;">Contactenos: <a target="_blank" style="font-size: 14px; color: #666666;" href="tel:123456789">123456789</a> | <a target="_blank" href="administracion@ribe.cl" style="font-size: 14px; color: #666666;">administracion@ribe.cl</a></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>
            
            </html>`, // html body
        }).then((info: any) => {
            console.log({ info });
        }).catch(console.error);

    }).catch(console.error);
}

export const sendTemporalMail = (email: any, temporal: any) => {
    const nodemailer = require('nodemailer'); const transporter = nodemailer.createTransport({
        host: 'mail.ribe.cl',
        port: 465,
        auth: {
            user: 'gabrielbermudez@ribe.cl',
            pass: '*GabrielA1978',
        },
    });
    transporter.verify().then(() => {

        transporter.sendMail({
            from: '"Gabriel Bermudez" <gabrielbermudez@ribe.cl>', // sender address
            to: `${email}`, // list of receivers
            subject: "Ribex 4.0 Notificación de solicitud de contraseña temporal", // Subject line
            text: `Hola ${temporal.pers_nombres} ${temporal.pers_apellidos}`, // plain text body
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
            
            <head>
                <meta charset="UTF-8">
                <meta content="width=device-width, initial-scale=1" name="viewport">
                <meta name="x-apple-disable-message-reformatting">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta content="telephone=no" name="format-detection">
                <title></title>
                <!--[if (mso 16)]>
                <style type="text/css">
                a {text-decoration: none;}
                </style>
                <![endif]-->
                <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
                <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG></o:AllowPNG>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            </head>
            
            <body>
                <div class="es-wrapper-color">
                    <!--[if gte mso 9]>
                        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                            <v:fill type="tile" color="#fafafa"></v:fill>
                        </v:background>
                    <![endif]-->
                    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td class="esd-email-paddings" valign="top">
                                    <table class="es-header" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="es-adaptive esd-stripe" esd-custom-block-id="88593" align="center">
                                                    <table class="es-header-body" style="background-color: #aeb7bd;" width="600" cellspacing="0" cellpadding="0" bgcolor="#aeb7bd" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" style="background-color: #aeb7bd;" bgcolor="#aeb7bd" align="center">
                                                                    <!--[if mso]><table width="560" cellpadding="0" 
                                    cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
                                                                    <table class="es-left" cellspacing="0" cellpadding="0" align="center">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="es-m-p20b esd-container-frame" width="270" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-image es-m-p0l es-m-txt-c" style="font-size:0" align="center">
                                                                                                    <a href="https://ribe.cl" target="_blank"><img src="http://miteletrabajo.cl/media/logos/ribe2.png" alt style="display: block;" width="100"></a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" style="background-color: #fafafa;" bgcolor="#fafafa" align="center">
                                                    <table class="es-content-body" style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p40t es-p20r es-p20l" style="background-color: transparent; background-position: left top;" bgcolor="transparent" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                    <table style="background-position: left top;" width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-image es-p5t es-p5b" style="font-size:0" align="center">
                                                                                                    <a target="_blank"><img src="http://miteletrabajo.cl/media/logos/temporal.png" alt style="display: block;" width="175"></a>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p15t es-p15b" align="center">
                                                                                                    <h1 style="color: #333333; font-size: 20px;"><strong>OLVIDÓ SU </strong></h1>
                                                                                                    <h1 style="color: #333333; font-size: 20px;"><strong>&nbsp;CONTRASEÑA?</strong></h1>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p40r es-p40l" align="left">
                                                                                                    <p style="text-align: center;">Hola,&nbsp;${temporal.pers_nombres} ${temporal.pers_apellidos}</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p35r es-p40l" align="left">
                                                                                                    <p style="text-align: center;">¡Hubo una solicitud para generar una contraseña temporal!</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p35r es-p40l" align="left">
                                                                                                    <p style="text-align: center;">Estos son los datos para el acceso:</p>
                                                                                                    <p style="text-align: center;"><b>Usuario:</b>${temporal.usua_login}</p>
                                                                                                    <p style="text-align: center;"><b>Contraseña:</b>${temporal.temp_clave}</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p25t es-p40r es-p40l" align="center">
                                                                                                    <p>Si no realizó esta solicitud, simplemente ignore este correo electrónico. De lo contrario, puede acceder con su usuario y la clave temporal normalmente o hacer clic en el link a continuación para activar su clave acceso temporal:</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                </br>
                                                                                                <td class="esd-block-button es-p40t es-p40b es-p10r es-p10l" align="center"><span class="es-button-border"><a href="http://mitelerabajo.cl/auth/temporal/${temporal.temp_id}" class="es-button" target="_blank">ACTIVAR ACCESO TEMPORAL</a></span></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="esd-structure es-p5t es-p20b es-p20r es-p20l" style="background-position: left top;" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-text" esd-links-color="#666666" align="center">
                                                                                                    <p style="font-size: 14px;">Contactenos: <a target="_blank" style="font-size: 14px; color: #666666;" href="tel:123456789">123456789</a> | <a target="_blank" href="administracion@ribe.cl" style="font-size: 14px; color: #666666;">administracion@ribe.cl</a></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>
            
            </html>`, // html body
        }).then((info: any) => {
            console.log({ info });
        }).catch(console.error);

    }).catch(console.error);
}


export const mensaje = (tipo: number, msg: String) => {
    return {
        __typename: "msg",
        tipo: tipo,
        mensaje: `BACKEND:${msg}`
    }
}

export const addEntrada = (usua_id: String, ipAddress: String, headers: any) => {
    return db.withSchema("seguridad")
        .insert([{ entr_usua_id: usua_id, entr_ipaddress: ipAddress, entr_headers: JSON.stringify(headers) }])
        .into("entradas")
        .returning("*")
        .then((entrada: any) => { return entrada })
}

export const addSesion = (usua_id: String, ipAddress: string, headers: any, accessToken: String, refreshToken: String) => {
    return db.withSchema("seguridad")
        .insert([{
            sesi_usua_id: usua_id,
            sesi_ipaddress: ipAddress,
            sesi_headers: JSON.stringify(headers),
            sesi_access_token: accessToken,
            sesi_refresh_token: refreshToken
        }])
        .into("sesiones")
        .returning("*")
        .then((entrada: any) => { return entrada })
}

export const insertTarifaEdificio = async (schema: String, tableName: String, viewName: String, fieldKey: String, fieldRelation: String, fields: any, fieldConversion: any) => {
    return insertEntidad(schema, tableName, viewName, fieldKey, fieldRelation, fields, fieldConversion).then((tarifaEdificio) => {
        let query = db.from(db.raw(`remarcaciones.f_duplicar_tarifa('${tarifaEdificio.taed_tari_id}','${tarifaEdificio.taed_id}')`))
        return query.then((result: any) => {
            return tarifaEdificio;
        })
    });
}

export const updateTarifaEdificio = (schema: String, tableName: String, viewName: String, fieldKey: String, fieldRelation: String, filter: any, fields: any, duplicar: Boolean, fieldConversion: any, typeName: String) => {
    return updateEntidad(schema, tableName, viewName, fieldKey, fieldRelation, filter, fields, fieldConversion, typeName).then((tarifaEdificio: any) => {
        if (duplicar) {
            let query = db.withSchema("remarcaciones")
                .from("tarifas_cargos_edificios")
                .where("tace_taed_id", tarifaEdificio.data[0].taed_id)
            return query.returning("*").delete().then(() => {
                let query2 = db.from(db.raw(`remarcaciones.f_duplicar_tarifa('${tarifaEdificio.data[0].taed_tari_id}','${tarifaEdificio.data[0].taed_id}')`))
                return query2.then((result: any) => {
                    return {
                        __typename: typeName,
                        ...tarifaEdificio
                    }
                })
            })
        }
        else {
            return {
                __typename: typeName,
                ...tarifaEdificio
            }
        }
    })

}


let messagesError: { name: string, message: string }[] = [
    { "name": "KnexTimeoutError", "message": "Tiempo agotado de Conexion a la Base de Datos" },
    { "name": "NoDatabaseParams", "message": "No hay Parametros de Base de Datos" },
];

export const getError = (name: String, message: any) => {
    let error = messagesError.find((error: any) => error.name === name);
    return (error) ? error.message : `Error no Especificado ${name}->${message}`
}

export const getValueSequence = (schema: String, secuencia: String) => {
    return db.select("*").from(db.raw(`nextval('${schema}.${secuencia}'::regclass) as valor`)).then((result: any) => result)
}

export const getUserByToken = (accessToken: String) => {
    return db.withSchema("seguridad")
        .select("*").from('sesiones')
        .where("sesi_access_token", accessToken).
        then((result: any) => {
            //console.log('result>', result)
            return result[0].sesi_usua_id;
        })
}

export const separar = (cadena: String) => {
    let obj: any = {};
    for (let entry of cadena.split(" ")) {
        let pair = entry.split("=");
        obj[pair[0]] = pair[1];
    }
    return obj;
}




