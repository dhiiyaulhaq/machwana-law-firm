import {
    NextResponse
} from "next/server";

import connectDB from "@/app/lib/mongodb";

import Article from "@/app/models/Article";

import {
    getSession
} from "@/app/lib/auth";



export async function DELETE(

    req: Request,

    {
        params
    }: {
        params: Promise<{
            id: string;
        }>;
    }

) {


    try {


        const session =
            await getSession();



        if (!session) {

            return NextResponse.json(
                {
                    message:
                        "Unauthorized"
                },
                {
                    status: 401
                }
            );

        }



        /*
            ONLY ADMIN CAN DELETE
        */

        if (
            session.role !==
            "ADMIN"
        ) {

            return NextResponse.json(
                {
                    message:
                        "Forbidden: only Admin can delete articles"
                },
                {
                    status: 403
                }
            );

        }



        await connectDB();



        const {
            id
        } =
            await params;



        const article =
            await Article.findById(
                id
            );



        if (!article) {

            return NextResponse.json(
                {
                    message:
                        "Article not found"
                },
                {
                    status: 404
                }
            );

        }



        await Article.findByIdAndDelete(
            id
        );



        return NextResponse.json(
            {
                message:
                    "Article deleted successfully"
            },
            {
                status: 200
            }
        );


    }
    catch (error) {


        console.error(
            "DELETE ARTICLE ERROR:",
            error
        );



        return NextResponse.json(
            {
                message:
                    "Delete failed"
            },
            {
                status: 500
            }
        );

    }

}