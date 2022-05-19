const express = require('express');

// const authController = require('../controllers/auth')
/////////////////////////////////////////

const router = express.Router();


router.get('/login',authController.getLogin );

router.post('/login', authController.postLogin);
router.post('/logout', authController.postLogout);
//上方的authController 都是找到controllers資料夾裡面的auth.js對應的module exports

module.exports = router