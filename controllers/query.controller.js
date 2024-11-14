const mongoose = require('mongoose')
const { Post, Author, Comment, User } = require('../models/blog.model.js')

const models = {
    post : Post,
    author: Author,
    comment:Comment,
    user: User
}

const getDocuments = async (req,res) => {
    const {sec,filter,field} = req.params

    const Model = models[sec]
    if(!Model) {
        res.status(404).send('Invalid retrieval section')
    }else {
        try{
            const query = {[field]:filter}
            const data = await Model.find(query)
      
            if(data.length === 0) {
             res.status(404).send(`ERROR querying section ${sec}  field ${field} filter ${filter}`)
            }
            else{
             res.json(data)
            }
          }
          catch(error) {
             res.status(500).send(`Error : ${error.message}`)
          }
    }
}

module.exports = getDocuments