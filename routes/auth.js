const express = require('express');

const authController = require('../controllers/auth')
/////////////////////////////////////////

const router = express.Router();


router.get('/login',authController.getLogin );

router.get('/signup',authController.getSignup );


router.post('/login', authController.postLogin);

router.post('/logout', authController.postLogout);

router.post('/signup', authController.postSignup);

//上方的authController 都是找到controllers資料夾裡面的auth.js對應的module exports

module.exports = router