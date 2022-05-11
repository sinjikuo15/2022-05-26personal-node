const title ="I am hello title";
// hello.js
const sayHello = () => {
    console.log('Hello!');
};
const sayGoodnight = () => {
    console.log('Good night!');
};

// module.exports.say = sayHello;
//上面這行是將 say變成 SayHello function

// console.log('dirname', __dirname);//(查詢所在資料夾)
// console.log('filename', __filename);//(查詢包含路徑的完整檔案名稱)
// console.log(path.join(__dirname, 'index.js'));可以將組合路徑並合併

module.exports = {
    say: sayHello,
    sayGoodnight: sayGoodnight,
    title: title
};
// js版本
// module.exports = {
//     say:sayHello,  // = sayHello: sayHello 
          ////同樣的名稱的情況下就可以省略直接打sayHello就可以了，
//     sayGoodnight,
//     title,
// }; 
// };

// console.log('module', module);