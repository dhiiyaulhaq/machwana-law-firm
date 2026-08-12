import mongoose, { Schema, Model } from "mongoose";


export interface IUser {

  email: string;

  password: string;

  role:
    | "ADMIN"
    | "MANAGING_PARTNER";


  approved: boolean;

}



const UserSchema =
new Schema<IUser>({

  email: {

    type: String,

    required: true,

    unique: true,

  },


  password: {

    type: String,

    required: true,

  },


  role: {

    type: String,

    enum: [
      "ADMIN",
      "MANAGING_PARTNER",
    ],

    default:
      "ADMIN",

  },


  approved: {

    type: Boolean,

    default: false,

  },


},

{

  timestamps: true,

});





const User:
Model<IUser> =
mongoose.models.User ||
mongoose.model<IUser>(
  "User",
  UserSchema
);



export default User;