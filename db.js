const Pool = require('pg').Pool;

const pool = new Pool({
    user:"alphapisbeta43326",
    host:"postgressdemo.postgres.database.azure.com",
    database:"postgres",
    password:"Admin1!!",
    port: 5432,
    ssl:{
        rejectUnauthorized:false,
    }
})
module.exports = pool; 
