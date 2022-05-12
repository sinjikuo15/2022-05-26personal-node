// 第一個區塊 內建模組
const path = require('path');


// 第二個區塊 第三方模組(套件)

const express = require('express');

// 第三個區塊 自建模組



////////////////////////////////////////////////////////////
const bodyParser = require('body-parser');
const app = express();

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
    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html')) //這行是使用express讓上面的做法直接導到index.html葉面去
});

app.get('/login', (req, res) => {
    
    res.status(200).sendFile(path.join(__dirname, 'views', 'login.html')) //這行是使用express讓上面的做法直接導到login.html葉面去
});

app.post('/login', (req, res) => {
    const { email, password } =req.body;
    if (email && password ){
        res.redirect('/') //當email跟password有資料 導頁到/頁面
    }else{
        console.log('欄位尚未填寫完成')
    }
});

app.listen(3000, () => {
    console.log('Web Server is running on port 3000');
});