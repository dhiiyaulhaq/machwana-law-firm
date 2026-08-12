import mongoose, { Schema, Model } from "mongoose";


export interface IArticle {


  title: string;


  slug: string;


  excerpt: string;


  content: string;


  image?: string;


  author: string;


  status:
    | "PENDING"
    | "APPROVED";


  approvedBy?: string;


}





const ArticleSchema =
new Schema<IArticle>({


  title: {

    type: String,

    required: true,

  },



  slug: {

    type: String,

    required: true,

    unique: true,

  },



  excerpt: {

    type: String,

    required: true,

  },



  content: {

    type: String,

    required: true,

  },



  image: {

    type: String,

  },



  author: {

    type: String,

    required: true,

  },



  status: {

    type: String,

    enum: [
      "PENDING",
      "APPROVED",
    ],

    default:
      "PENDING",

  },



  approvedBy: {

    type: String,

  },


},

{

  timestamps: true,

});





const Article:
Model<IArticle> =
mongoose.models.Article ||
mongoose.model<IArticle>(
  "Article",
  ArticleSchema
);



export default Article;