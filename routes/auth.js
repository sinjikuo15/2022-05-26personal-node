const express = require('express');

/////////////////////////////////////////

const router = express.Router();


router.get('/login', (req, res) => {
    res.status(200).render('login', {
        path: '/login',
        pageTitle: '登入',
        happyTime: 'wish you have a good day',

    });
    // res.status(200).sendFile(path.join(__dirname, 'views', 'login.html')) //這行是使用express讓上面的做法直接導到login.html頁面去
});


router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/') //當email跟password有資料 導頁到/頁面
    } else {
        console.log('欄位尚未填寫完成')
    }
});
router.post('/logout', (req, res) => {
    res.redirect('/login');
});

module.exports = router