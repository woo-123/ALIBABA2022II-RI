const Pool = require('pg').Pool;

const pool = new Pool({
    user:"rmubnlxpxrerwx",
    host:"ec2-44-206-214-233.compute-1.amazonaws.com",
    database:"d11qd9br5g15sk",
    password:"0b10ac228650798d05ba18955fd9d486e5e2503134b383e39495f091fa709e4f",
    port: 5432,
    ssl:{
        rejectUnauthorized:false,
    }
})
module.exports = pool; 
