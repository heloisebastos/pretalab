const express = require('express')
const blogController = require('../controllers/blogController')
const router = express.Router()

router.post('/texts', blogController.createPost)
router.get('/texts', blogController.listPosts)
router.get('/text', blogController.listPost)
router.delete('/text/:id', blogController.deletePost)
router.patch('/text/:id', blogController.editPost)

module.exports = router
