const express = require("express");
const socket = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());

const server = app.listen(process.env.PORT || 8080, () =>
  console.log("Port 8080")
);

app.use(express.static("public"));

// socket setup
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("User connected");
  /*
  socket event example
   socket.on("chat", (data) => {
     console.log(data);
     io.sockets.emit("chat", data);
   });
   ------------------------------------------
   broadcast example
   socket.on("keypress", (data) => {
     console.log(data);
     socket.broadcast.emit("keypress", data);
    });
  */
});