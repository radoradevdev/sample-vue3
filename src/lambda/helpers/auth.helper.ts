import * as jwt from "jsonwebtoken";

export function isTokenValid(token?: string) {
    if(token && process.env.VUE_APP_JWT_SECRET){
        let decoded = jwt.verify(token, process.env.VUE_APP_JWT_SECRET);
        return decoded ? true : false;
    }
    return false;
}