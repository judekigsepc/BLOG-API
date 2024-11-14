const mongoose = require('mongoose')
const { Post, Author, Comment, User } = require('../models/blog.model.js')

const deleteRecord = model => async (req,res) => {
   try{
    const {id} = req.params
    const deletedRecord = await model.findByIdAndDelete(id)
   
    if(!deletedRecord) {
        res.status(404).send(`No such ${model.modelName} found`)
        return
    }
    const remRecords = await model.find()
    res.send(remRecords)
    } 
   catch {
      res.status(500).send(`Error deleting ${model.modelName}`)
      return
   }
}

const deletePost = deleteRecord(Post)
const deleteComment = deleteRecord(Comment)
const deleteUser = deleteRecord(User)
const deleteAuthor = deleteRecord(Author)

module.exports = {
    deletePost,
    deleteComment,
    deleteUser,
    deleteAuthor
}