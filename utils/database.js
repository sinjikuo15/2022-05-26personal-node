const Sequelize = require('sequelize'); // 引入第三方模組 sequelize

////////////////////////////////////////////////////////////


const database = new Sequelize('demo', 'root', 'fn102', {
    dialect: 'mysql', 
    host: 'localhost'
}); // demo 是代表資料庫名稱，但需要先連線成功，root是username fn102是密碼

module.exports = database ;