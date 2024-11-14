const mongoose = require('mongoose')
const { Post, Author, Comment, User } = require('../models/blog.model.js')

const errorhandler = (res,message,error) => {
    res.status(500).json({message,error})
}

const getAllRecords = model => async (req,res) => {
    try{
       const allRecords = await model.find()
       if(allRecords.length === 0) {
        res.send(`There are no ${model.modelName}s to display`)
        return
       }
       res.send(allRecords)
    }
    catch{
         errorhandler(res,`Error retrieving all ${model.modelName.toUpperCase()}s`)
         return
    }
}

const getSingleRecord = model => async (req,res) => {
    try{
        const {id} = req.params
        const singleRecord = await model.findById(id)
        if(!singleRecord) {
            res.send(`No such ${model.modelName} found`)
            return
        }
        res.send(singleRecord)
    }
    catch{
        errorhandler(res,`Error retrieving requested ${model.modelName.toUpperCase()}`)
        return
    }
}

const getAllPosts = getAllRecords(Post);
const getAllComments = getAllRecords(Comment);
const getAllUsers = getAllRecords(User);
const getAllAuthors = getAllRecords(Author);

const getSinglePost = getSingleRecord(Post);
const getSingleComment = getSingleRecord(Comment);
const getSingleAuthor = getSingleRecord(Author);
const getSingleUser = getSingleRecord(User);

module.exports = {
    getAllPosts,
    getAllComments,
    getAllUsers,
    getAllAuthors,

    getSinglePost,
    getSingleComment,
    getSingleAuthor,
    getSingleUser,
}