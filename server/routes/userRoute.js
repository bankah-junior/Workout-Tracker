const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/login', userController.login_post);
router.post('/signup', userController.signup_post);

module.exports = router