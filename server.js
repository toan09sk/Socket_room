var express = require('express');
var app = express();
app.use(express.static("public")); // localhost:3000/teo.png

app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection", (socket) => {
    console.log("co nguoi ket noi " + socket.id);
    console.log(socket.adapter.rooms);

    socket.on("tao-room", (data) => {
        console.log(data);
    });
});

app.get("/", (req, res) => {
    res.render("trangchu");
});