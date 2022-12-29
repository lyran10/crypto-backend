// connecting to the data base
const knex = require('knex');
const dotenv = require('dotenv');
const {Client} = require("pg")

// connecting to .env
dotenv.config();

const db = knex({
  client:'pg',
  connection: {
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    idleTimeoutMillis: 0,
    connectionTimeoutMillis : 0,
    ssl:{rejectUnauthorized:false},
  },
  acquireConnectionTimeout: 5000,
  pool: {
    min: 2,
    max: 10,
    createTimeoutMillis: 8000,
    acquireTimeoutMillis: 8000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
  },
})

// const connectDB = async() => {

//   try {
//     const db = new Client({
//       client:'pg',
//       connection: {
//         host:process.env.DB_HOST,
//         port:process.env.DB_PORT,
//         user:process.env.DB_USER,
//         password:process.env.DB_PASS,
//         database:process.env.DB_NAME,
//         idleTimeoutMillis: 0,
//         connectionTimeoutMillis : 0,
//         ssl:{rejectUnauthorized:false},
//       },
//       acquireConnectionTimeout: 5000,
//       pool: {
//         min: 0,
//         max: 10,
//         createTimeoutMillis: 8000,
//         acquireTimeoutMillis: 8000,
//         reapIntervalMillis: 1000,
//         createRetryIntervalMillis: 100,
//       },
//     })
  
//     await db.connect()
//     const res = await db.query("SELECT * from users")
//     console.log(res)
//     await db.end()
//   } catch (error) {
//     console.log(error)
//   }
// }


module.exports = db
