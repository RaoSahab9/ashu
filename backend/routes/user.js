const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/:username', userController.getProfile);
router.put('/edit', auth, userController.editProfile);
router.post('/follow/:username', auth, userController.followUser);
router.post('/unfollow/:username', auth, userController.unfollowUser);

module.exports = router;