import {
    NextResponse
} from "next/server";

import connectDB from "@/app/lib/mongodb";

import Article from "@/app/models/Article";

import {
    getSession
} from "@/app/lib/auth";



export async function PATCH(

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
            ONLY MANAGING_PARTNER
            CAN APPROVE ARTICLES
        */

        if (
            session.role !==
            "MANAGING_PARTNER"
        ) {

            return NextResponse.json(

                {
                    message:
                        "Forbidden: only Managing Partner can approve articles"
                },

                {
                    status: 403
                }

            );

        }



        await connectDB();



        const {
            id
        } = await params;



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



        /*
            ARTICLE MUST BE PENDING
        */

        if (
            article.status !==
            "PENDING"
        ) {

            return NextResponse.json(

                {
                    message:
                        "Only pending articles can be approved"
                },

                {
                    status: 400
                }

            );

        }



        article.status =
            "APPROVED";



        article.approvedBy =
            session.email;



        await article.save();



        return NextResponse.json(

            {
                message:
                    "Article approved",

                article
            }

        );


    }
    catch (error) {


        console.error(
            "Approve article error:",
            error
        );



        return NextResponse.json(

            {
                message:
                    "Approve failed"
            },

            {
                status: 500
            }

        );

    }

}