const mongoose = require('mongoose')
const { Post, Author, Comment, User } = require('../models/blog.model.js')

const updateRecord = model => async (req,res) => {
    try{
        const {id} = req.params
        const updatedRecord = await model.findByIdAndUpdate(id,req.body ,{new:true})

        if(!updateRecord) {
            res.send(`No such ${model.modelName} in database`)
            return
        }
        res.send(updatedRecord)
    }
    catch{
         res.status(500).json({
            message:`Error updating ${model.modelName}`,
            error: error.message
         })
         return
    }
}

const updateUser = updateRecord(User)
const updateAuthor = updateRecord(Author)
const updateComment = updateRecord(Comment)
const updatePost = updateRecord(Post)

module.exports = {
    updateUser,
    updateAuthor,
    updatePost,
    updateComment
}