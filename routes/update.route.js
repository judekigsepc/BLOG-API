const express = require('express')

const router = express.Router()

const { updateUser,updateAuthor,updatePost,updateComment} = require('../controllers/update.contoller.js')

router.put('/post/:id', updatePost)
router.put('/comment/:id', updateComment)
router.put('/author/:id', updateAuthor)
router.put('/user/:id', updateUser)

module.exports = router
