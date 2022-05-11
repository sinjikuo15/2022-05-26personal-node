// 第一個區塊 內建模組
const path = require('path');
const http = require('http');

// 第二個區塊 第三方模組(套件)

// const cowsay = require('cowsay');

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));
//以下為foreach版本
const cowsay = require('cowsay');

let sentences = ['你不要', '在那邊', '給我哀北教母'];

sentences.forEach((sentence) => {
    console.log(cowsay.say({
        text : sentence,
        e : "@@",
        T : "U "
    }));
});
// 第三個區塊 自建模組

//上面三個區塊就是指可以引入別人的 內建的 甚至是自己做出來的模組但會依序放的順序

const hello = require('./hello.js');

hello.say();