const express = require('express')

const router = express.Router()

const { deletePost,deleteComment,deleteUser,deleteAuthor } = require('../controllers/delete.contoller.js')

router.delete('/post/:id', deletePost)
router.delete('/comment/:id', deleteComment)
router.delete('/author/:id', deleteAuthor)
router.delete('/user/:id', deleteUser)

module.exports = router
