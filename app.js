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
        path:'/',
        pageTitle: '訂購',
        products, //=products : products
    });
    // res.status(200).sendFile(path.join(__dirname, 'views', 'index.html')) //這行是使用express讓上面的做法直接導到index.html頁面去
});

app.get('/login', (req, res) => {
    res.status(200).render('login', {
        path:'/login',
        pageTitle:'登入',
        happyTime: 'wish you have a good day',

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
app.post('/logout',(req,res) =>{
    res.redirect('/login');
});

app.get('*', (req, res) => {
    //代表所有的網址都會導到404頁面去(只要前面沒有設定的頁面)，所以須放在最下面。
    res.status(404).render('404', {
        path:'*',
        pageTitle:'404',
        notFind: 'No find sorry :(',
    });
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(3000, () => {
    console.log('Web Server is running on port 3000');
});


const products = [
    {
        title: '四月是你的謊言 1',
        price: 80,
        description: '有馬公生的母親一心想把有馬培育成舉世聞名的鋼琴家，而有馬也不負母親的期望，在唸小學時就贏得許多鋼琴比賽的大獎。11歲的秋天，有馬的母親過世，從此他再也聽不見自己彈奏的鋼琴聲，沮喪的他也只好放棄演奏，但在14歲那年，經由兒時玩伴的介紹，有馬認識了小提琴手宮園薰，並被薰的自由奔放吸引，沒想到薰竟開口邀請公生在比賽時擔任她的伴奏…',
        imageUrl: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/062/25/0010622563.jpg&v=52dcfd21&w=348&h=348'
    },
    {
        title: '四月是你的謊言 2',
        price: 80,
        description: '公生答應在二次預賽中擔任小薰的鋼琴伴奏。比賽一開始公生還能順利彈琴，但在中途又再次因為聽不見鋼琴的聲音而停手。沒想到小薰也跟著停止演奏、等候公生。原本心灰意冷的公生因此重新振作，與小薰合奏出驚人的樂章…......',
        imageUrl: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/062/31/0010623172.jpg&v=52dcfd21&w=348&h=348'
    },
    {
        title: '四月是你的謊言 3',
        price: 80,
        description: '在小薰的逼迫之下，公生不得不參加音樂比賽。為了參加比賽，公生從早到晚不停的練習，但就是無法彈奏出屬於自己的巴哈與蕭邦。此時，公生的面前出現兩位強勁的對手-相座武士與井川繪見，他們曾經是公生的手下敗將，一心想在比賽中擊敗公生雪恥。先上台演奏的武士彈奏出令全場喝采的激昂樂章…',
        imageUrl: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/062/76/0010627615.jpg&v=5315ab5f&w=348&h=348'
    },
];; // 宣告常數 products 同時賦予它 [] 空陣列
