// 第一個區塊 內建模組
const http = require('http');


// 第二個區塊 第三方模組(套件)



// 第三個區塊 自建模組

//上面三個區塊就是指可以引入別人的 內建的 甚至是自己做出來的模組但會依序放的順序

//可以分析網站的那一塊東西 host post hostname search這些

const server = http.createServer((req, res) => {
	// console.log('第一個參數是瀏覽器對 web server 的 request', req);
	// console.log('第二個參數是 web 要response 給瀏覽器的內容', res);
    console.log('req url:', req.url);
    if (req.url === '/login') {
        return res.end('This is login page');
    };
    if (req.url === '/hello') {
        return res.end('This is hello page');
    };
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end('<h1>This is home page</h1>');
    } //在寫入網頁時可以寫入對應的type，才讓網頁正確轉成html格式
	res.end(); //代表結束，需寫
});


server.listen(3000, () => {
    console.log('running server on port 3000');
});