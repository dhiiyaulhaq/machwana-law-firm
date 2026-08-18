import {
    NextResponse
} from "next/server";

import {
    clearSession
} from "@/app/lib/auth";



export async function POST() {


    try {


        await clearSession();



        return NextResponse.json({

            message:
                "Logout success"

        });


    }
    catch (error) {


        console.error(
            "Logout failed:",
            error
        );



        return NextResponse.json(
            {
                message:
                    "Logout failed"
            },
            {
                status:
                    500
            }
        );

    }

}