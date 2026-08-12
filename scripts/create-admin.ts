import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});


import bcrypt from "bcrypt";

import { connectDB } from "../app/lib/mongodb";

import User from "../app/models/User";



async function createUsers() {


  try {


    console.log(
      "Checking environment..."
    );


    if (!process.env.MONGODB_URI) {

      throw new Error(
        "MONGODB_URI is missing"
      );

    }


    console.log(
      "MongoDB URI loaded"
    );



    await connectDB();


    console.log(
      "MongoDB connected"
    );





    const users = [


      {
        email:
          "ismail@machwanalawoffice.com",

        password:
          "MachwanaAdmin123!",

        role:
          "ADMIN" as const,

        approved:
          true,
      },



      {
        email:
          "alvian@machwanalawoffice.com",

        password:
          "MachwanaAdmin123!",

        role:
          "MANAGING_PARTNER" as const,

        approved:
          true,
      },


    ];





    for (const user of users) {


      const existing =
        await User.findOne({
          email:
            user.email,
        });





      if (existing) {


        console.log(
          `Already exists: ${user.email}`
        );


        continue;


      }





      const hashedPassword =
        await bcrypt.hash(
          user.password,
          12
        );





      await User.create({

        email:
          user.email,

        password:
          hashedPassword,

        role:
          user.role,

        approved:
          user.approved,

      });





      console.log(
        `Created: ${user.email}`
      );


    }





    console.log(
      "CMS user seeding finished"
    );


    process.exit(0);



  } catch(error) {


    console.error(
      "Seed failed:",
      error
    );


    process.exit(1);


  }


}



createUsers();