import { cookies } from "next/headers";
import {
    SignJWT,
    jwtVerify,
    JWTPayload
} from "jose";


const secret =
    new TextEncoder().encode(
        process.env.JWT_SECRET || "machwana-secret"
    );



export interface SessionPayload
extends JWTPayload {

    id: string;

    email: string;

    role:
    | "ADMIN"
    | "MANAGING_PARTNER";

}



export async function createSession(
    payload: SessionPayload
){

    const token =
        await new SignJWT(payload)

        .setProtectedHeader({
            alg:"HS256"
        })

        .setExpirationTime(
            "7d"
        )

        .sign(secret);



    const cookieStore =
        await cookies();


    cookieStore.set(
        "machwana_session",
        token,
        {
            httpOnly:true,

            secure:
            process.env.NODE_ENV === "production",

            sameSite:"lax",

            maxAge:
            60 * 60 * 24 * 7,

            path:"/"
        }
    );

}




export async function verifySession(
    token:string
){

    try{

        const {payload} =
            await jwtVerify(
                token,
                secret
            );


        return payload as SessionPayload;


    }catch{

        return null;

    }

}




export async function getSession(){

    const cookieStore =
        await cookies();


    const token =
        cookieStore.get(
            "machwana_session"
        )?.value;


    if(!token){

        return null;

    }


    return verifySession(token);

}