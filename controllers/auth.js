const User = require('../models/user');

const getLogin = (req, res) => {
    res.status(200).render('auth/login', {
        path: '/login',
        pageTitle: '登入',
        happyTime: 'wish you have a good day',
    });    
};

// const postLogin = (req, res) => {
//     const { email, password } = req.body;
//     if (email && password) {
//         res.redirect('/') //當email跟password有資料 導頁到/頁面
//     } else {
//         console.log('欄位尚未填寫完成')
//     }
// };

const postLogin = (req, res) => {
    const { email, password } = req.body;

    //對應於app.js的bodyParser解構出來的資料
    User.findOne({ where: { email }})
        .then((user) => {
            if (!user) {
                console.log('login: 找不到此 user 或密碼錯誤');
                return res.redirect('/login');
            }
            if (user.password === password) {
                console.log('login: 成功');
                req.session.isLogin = true ;
                return res.redirect('/')
            } 
            console.log('login: 找不到此 user 或密碼錯誤');
            res.redirect('/login');
        })
        .catch((err) => {
            console.log('login error:', err);
        });
};

const postLogout = (req, res) => {
    req.session.destroy((err) => {
        console.log('session destroy() error: ', err);
        res.redirect('/login');
    });
};

module.exports = {
    getLogin,
    postLogin,
    postLogout
};