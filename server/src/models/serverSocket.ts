import dotenv from "dotenv";
import http from "http";
import express from "express";
import socketIo from "socket.io";

// const config = dotenv.config();

export class ServerSocket {
  listen(): void {
    console.log("start listenning....");
    //   TODO: use env file
    const app = express();
    app.set("port", 4000);
    const server = new http.Server(app);
    const io = socketIo(http);
    io.on("connection", (socket: SocketIO.Socket) => {
      console.log(socket.id);
    });
  }
}
