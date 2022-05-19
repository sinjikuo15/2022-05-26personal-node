const getLogin = (req, res) => {
    res.status(200).render('login', {
        path: '/login',
        pageTitle: '登入',
        happyTime: 'wish you have a good day',
    });    
};

const postLogin = (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/') //當email跟password有資料 導頁到/頁面
    } else {
        console.log('欄位尚未填寫完成')
    }
};

const postLogout = (req, res) => {
    res.redirect('/login');
}

module.exports = {
    getLogin,
    postLogin,
    postLogout
};