const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const auth = require('../middleware/auth');

router.post('/', auth, postController.createPost);
router.get('/feed', auth, postController.getFeed);
router.get('/:id', postController.getPost);
router.delete('/:id', auth, postController.deletePost);
router.post('/:id/like', auth, postController.likePost);
router.post('/:id/comment', auth, postController.commentPost);

module.exports = router;