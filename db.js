const Pool = require('pg').Pool;

const pool = new Pool({
    user:"vikeqfzfahtipl",
    host:"ec2-44-209-186-51.compute-1.amazonaws.com",
    database:"dcldblkdlejvhc",
    password:"7aab18d1c1fe3fc012fa384316102c4c1df30cf7506571b84723cb10dc041e9e",
    port: 5432,
    ssl:{
        rejectUnauthorized:false,
    }
})
module.exports = pool; 
