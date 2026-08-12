import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";


const JWT_SECRET =
  process.env.JWT_SECRET;



if (!JWT_SECRET) {

  throw new Error(
    "JWT_SECRET is not defined"
  );

}



const secretKey =
  new TextEncoder().encode(
    JWT_SECRET
  );





export async function createSession(
  payload: {
    id: string;
    email: string;
    role: string;
  }
) {


  const token =
    await new SignJWT(payload)

      .setProtectedHeader({

        alg:
          "HS256",

      })

      .setIssuedAt()

      .setExpirationTime(
        "7d"
      )

      .sign(
        secretKey
      );



  return token;

}







export async function verifySession(
  token: string
) {


  try {


    const { payload } =
      await jwtVerify(

        token,

        secretKey

      );


    return payload;



  } catch(error) {


    return null;


  }


}







export async function getSession() {


  const cookieStore =
    await cookies();



  const token =
    cookieStore.get(
      "machwana_session"
    )?.value;



  if (!token) {

    return null;

  }



  return verifySession(
    token
  );


}