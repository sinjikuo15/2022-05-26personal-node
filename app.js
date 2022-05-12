// 第一個區塊 內建模組
const path = require('path');


// 第二個區塊 第三方模組(套件)

const express = require('express');
const bodyParser = require('body-parser');


// 第三個區塊 自建模組



////////////////////////////////////////////////////////////
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
// 預設路徑就是 views，如果沒有變動，可以省略此設定
//上面第二行的第二個views只是指取用的資料的位子

//middleware
app.use(express.static(path.join(__dirname, 'public')));
//抓取在public底下的資源的意思，靜態資源的關係所以需使用static
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
    console.log('Hello!');
    next();
});

app.use((req, res, next) => {
    console.log('World!');
    next();
});

app.get('/', (req, res) => {//當中介軟體發送一個請求時，執行下面的程式    
    res.status(200).render('index', {
        pageTitle: 'Book Your Books online'
    });
    // res.status(200).sendFile(path.join(__dirname, 'views', 'index.html')) //這行是使用express讓上面的做法直接導到index.html頁面去
});

app.get('/login', (req, res) => {
    res.status(200).render('login',{
        happyTime: 'wish you have a good day'
    });
    // res.status(200).sendFile(path.join(__dirname, 'views', 'login.html')) //這行是使用express讓上面的做法直接導到login.html頁面去
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/') //當email跟password有資料 導頁到/頁面
    } else {
        console.log('欄位尚未填寫完成')
    }
});


app.get('*', (req, res) => { 
    //代表所有的網址都會導到404頁面去(只要前面沒有設定的頁面)，所以須放在最下面。
    res.status(404).render('404', {
        notFind: 'No find sorry :('
    });
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(3000, () => {
    console.log('Web Server is running on port 3000');
});