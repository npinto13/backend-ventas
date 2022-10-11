import jwt from "jwt-simple";
import moment from "moment";
import * as constantes from '../utils/constantes';

export const createToken = (usua_id:String,countExpiration:any,unitExpiration:any) => {
    const payload = {
        sub: {
            usua_id: usua_id
        },
        iat: moment().unix(),
        exp: moment()
            .add(countExpiration,unitExpiration)
            .unix()
    };
    return jwt.encode(payload, constantes.TOKEN.SECRET);
}

export const decodeToken = (bearer: any) => {
    if (!constantes.AUTHENTICATION) {
        try {
            const token = bearer.split(" ")[1];
            const payload = jwt.decode(token, constantes.TOKEN.SECRET, true);
            if (payload.exp <= moment().unix()) {
                throw new Error("El Token ha Expirado");
            }
            return true;
        }
        catch {
            throw new Error("El Token es Invalido");
        }
    }
    return true
}


