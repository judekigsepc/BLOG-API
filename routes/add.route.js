const express = require('express')

const {addPost,addComment,addAuthor,addUser} = require('../controllers/add.controller.js')

const router = express.Router()



//POST REQUESTS ROUTER/ROUTES😅
router.post('/post',addPost)

router.post('/comment',addComment)

router.post('/author',addAuthor)

router.post('/user',addUser)

module.exports = router