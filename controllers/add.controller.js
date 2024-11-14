const mongoose = require('mongoose')

const  {Post,Author,Comment,User} = require('../models/blog.model.js')

//Test function
const test = async (req,res) => {
     res.send('hello')
}


const addData = model => async(req,res) => {
    try{
        const addedData = await model.create(req.body)
        res.send(addedData)
        return
    }
    catch (error){
     res.status(500).json({
        message:`Error adding ${model.modelName}`,
        error:error.message
     })
     return
    }
}

const addPost = addData(Post)
const addComment = addData(Comment)
const addAuthor = addData(Author)
const addUser = addData(User)

module.exports = {
    test,
    addPost,
    addComment,
    addAuthor,
    addUser,
}