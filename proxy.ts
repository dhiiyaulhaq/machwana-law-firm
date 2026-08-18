import { NextResponse } from "next/server";

import type {
    NextRequest
} from "next/server";

import {
    jwtVerify
} from "jose";



const secret =
    new TextEncoder().encode(
        process.env.JWT_SECRET ||
        "machwana-secret"
    );



export async function proxy(
    request: NextRequest
) {


    const pathname =
        request.nextUrl.pathname;



    /*
        /cms/login harus bisa dibuka
        tanpa authentication.
    */

    if (
        pathname === "/cms/login" ||
        pathname.startsWith(
            "/cms/login/"
        )
    ) {

        return NextResponse.next();

    }



    /*
        Lindungi seluruh route /cms/*
    */

    if (
        pathname === "/cms" ||
        pathname.startsWith(
            "/cms/"
        )
    ) {


        const token =
            request.cookies.get(
                "machwana_session"
            )?.value;



        /*
            Tidak ada session
            → kembali ke login
        */

        if (!token) {

            return NextResponse.redirect(

                new URL(
                    "/cms/login",
                    request.url
                )

            );

        }



        /*
            Session ada,
            tetapi harus diverifikasi.
        */

        try {


            await jwtVerify(
                token,
                secret
            );



            return NextResponse.next();


        }
        catch {


            /*
                Token invalid / expired
                → hapus session
                → kembali ke login
            */

            const response =
                NextResponse.redirect(

                    new URL(
                        "/cms/login",
                        request.url
                    )

                );



            response.cookies.delete(
                "machwana_session"
            );



            return response;

        }

    }



    return NextResponse.next();

}





export const config = {

    matcher: [

        "/cms/:path*"

    ],

};