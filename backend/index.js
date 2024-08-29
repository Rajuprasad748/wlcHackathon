const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js');
require('dotenv').config();

const connect = require('./config/connectedToDb.js');
 connect();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRoutes);

app.listen(4001, () => {
  console.log(`Server listening on port`);
});


// app.use((req,res,next)  => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept');
//     next();
//   })
