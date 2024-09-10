const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
const homeRoutes = require("./routes/homeRoutes.js");
require("dotenv").config();
const connect = require("./config/connectedToDb.js");
const news = require("./models/news-model.js");
const cookieParser = require("cookie-parser");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(cookieParser());
connect();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/", homeRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

server.listen(3001, () => {
  console.log(`Server listening on port`);
});
