const express = require('express')

const { getAllPosts, getAllComments,getAllAuthors, getAllUsers,
    
    getSinglePost,
    getSingleComment,
    getSingleAuthor,
    getSingleUser,} = require('../controllers/get.contoller.js')

const router = express.Router()

//GET REQUEST ROUTES
//ALL-GETTERS
router.get('/posts', getAllPosts)

router.get('/comments',getAllComments)

router.get('/authors',getAllAuthors)

router.get('/users', getAllUsers)

//SINGLE-GETTERS
router.get('/post/:id', getSinglePost)
router.get('/comment/:id', getSingleComment)
router.get('/author/:id', getSingleAuthor)
router.get('/user/:id',getSingleUser)

module.exports = router