// connecting to the data base
const knex = require('knex');
const dotenv = require('dotenv');

// connecting to .env
dotenv.config();

const db = knex({
  client:'pg',
  connection: {
    host:process.env.DB_HOST,
    port: process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    ssl:{rejectUnauthorized:true},
    idleTimeoutMillis: 0,
    connectionTimeoutMillis : 0
  },
  acquireConnectionTimeout: 5000,
  pool: {
    min: 0,
    max: 10,
    createTimeoutMillis: 8000,
    acquireTimeoutMillis: 8000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
  },
})


// const connection = async() => {
//   try {
//     await db.connect(() =>{
//       console.log("RECONNECTING ATTEMPT")
//       console.log('connected')
//     });
//   } catch (error) {
//     console.error('connection error', error)
//   }

//        const res = await db.query(queryString, args);
//        await db.end();
//        return res.rows;
// }
module.exports = db

