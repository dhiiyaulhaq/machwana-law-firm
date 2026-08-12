import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});


import mongoose from "mongoose";


const MONGODB_URI =
  process.env.MONGODB_URI;



if (!MONGODB_URI) {

  throw new Error(
    "Please define MONGODB_URI inside .env.local"
  );

}


const mongoURI: string =
  MONGODB_URI;



interface MongooseCache {

  conn:
    typeof mongoose | null;


  promise:
    Promise<typeof mongoose> | null;

}



declare global {

  // eslint-disable-next-line no-var
  var mongooseCache:
    MongooseCache | undefined;

}




const globalForMongoose =
  global as typeof globalThis & {

    mongooseCache?:
      MongooseCache;

  };





let cached =
  globalForMongoose.mongooseCache;



if (!cached) {

  cached =
    {

      conn:
        null,

      promise:
        null,

    };


  globalForMongoose.mongooseCache =
    cached;

}





export async function connectDB() {


  if (cached!.conn) {

    return cached!.conn;

  }




  if (!cached!.promise) {


    cached!.promise =
      mongoose.connect(
        mongoURI,
        {

          bufferCommands:
            false,

        }
      );


  }




  cached!.conn =
    await cached!.promise;



  return cached!.conn;


}



export default connectDB;