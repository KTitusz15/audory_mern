const express = require('express')
const {
    getPosts,
    getPost,
    createPost,
    deletePost,
    updatePost,
    getPostsPreview
}    = require('../controllers/postController')

const router = express.Router()

/* GET 3 posts for homepage */
router.get('/', getPostsPreview)

/* GET a single post */
router.get('/:id', getPost)

/* POST a new post */
router.post('/', createPost)

/* DELETE a single post */
router.delete('/:id', deletePost)

/* UPDATE a single post */
router.patch('/:id', updatePost)

/* GET all posts */
router.get('/posts', getPosts)

module.exports = router