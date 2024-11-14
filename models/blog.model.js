const mongoose = require('mongoose')
const { type } = require('os')

const { Schema } = mongoose

//POSTS SCHEMA
const postSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique: true
    },
    coverImgUrl:{
        type:String,
        required:true,
    },
    snippet:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Types.ObjectId,
        ref:'Author'
    },
    category:{
        type:String,
        required:true,
    },
    tags : {
        type:[String],
        default:[],
    }
   
},{timestamps:true})

//AUTHOR SCHEMA
const authorSchema = new Schema({
    name:{
      type:String,
      required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    bio:{
        type:String,
        required:true,
    },
    userid:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true,
        unique:true,
    }
},{timestamps:true})

//COMMENTS SCHEMA
const commentSchema = new Schema({
    content:{
        required:true,
        type:String
    },
    forpost:{
        type:mongoose.Types.ObjectId,
        required:true,
    },
    commenter:{
       type:mongoose.Types.ObjectId,
       required:true,
       ref:'User',
    }
},{timestamps:true})

//USERS SCHEMA
const userSchema = new Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    islog:{
        required:true,
        type:Boolean,
        default:false,
    }
},{timestamps:true})

const Post = mongoose.model('Post',postSchema)
const Author = mongoose.model('Author', authorSchema)
const Comment = mongoose.model('Comment', commentSchema)
const User = mongoose.model('User',userSchema)

module.exports = {
    Post,
    Author,
    Comment,
    User
}