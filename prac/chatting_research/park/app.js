import http from "http";
import fs from "fs";
import { Server } from "socket.io";

const httpServer = http.createServer((req, rep) => {
  if (req.url === "/" && req.method === "GET") {
    const page = fs.readFileSync("./login.html");
    rep.writeHead(200, { "Content-Type": "text/html; charset:UTF-8;" });
    rep.write(page);
    rep.end();
  }
  if (req.url === "/chat" && req.method === "POST") {
    const page = fs.readFileSync("./chat.html");
    rep.writeHead(200, { "Content-Type": "text/html; charset:UTF-8;" });
    rep.write(page);
    rep.end();
  }
});

const io = new Server(httpServer);

httpServer.listen(2080, (err) => {
  if (err) {
    throw err;
  }
  console.log("server is runnig...");
});

let setNick = "";
io.on("connection", (socket) => {
  // console.log("유저가 접속했습니다");
  console.log(socket.id);
  // setNick = socket.id;
  // socket.broadcast.emit("안녕하세요.");
  socket.on("disconnect", () => {
    console.log("유저가 나갔습니다.");
  });
  socket.on("setNickname", (nickname) => {
    setNick = nickname;
    console.log(`form에 입력된 값 : ${setNick}`);
    io.emit();
    // return setNick;
    // io.emit("nicknameSet", setNick);
  });
  socket.on("chat message", (msg) => {
    // console.log(setNick);
    console.log(`${setNick}님이 입력한 메세지: ` + msg);
    io.emit("chat message", { nickname: setNick, message: msg });
  });
});
