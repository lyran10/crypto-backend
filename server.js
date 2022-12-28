const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./routes/routes.js");
const path = require("path")
dotenv.config();
const connectDB = require("../backend/connections/connections")

connectDB()

app.use(cors({ origin:"https://crypto-backend-girw.onrender.com", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`running on ${process.env.PORT}`);
});

// app.use("/",express.static(path.join(__dirname, 'client/build')));
// app.get('*',(req,res)=>{
//   res.sendFile(path.resolve(__dirname,'./client/build','index.html'))
// })
