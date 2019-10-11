var socket = io("http://localhost:3000");

$(document).ready(() => {
    $("#btnTaoRoom").click(() => {
        socket.emit("tao-room", $("#txtRoom").val());
    });
});