const express = require('express');

////////////////////////////////////////////////////////////

const router = express.Router();

router.get('*', (req, res) => {
    //代表所有的網址都會導到404頁面去(只要前面沒有設定的頁面)，所以須放在最下面。
    res.status(404).render('404', {
        path:'*',
        pageTitle:'404',
        notFind: 'No find sorry :(',
    });
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

module.exports = router;