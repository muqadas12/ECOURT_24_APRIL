// // var socket=require("socket.io")
// // const express=require("express");
// // const http=require("http")
// // const app=express();
// // const server=http.createServer(app)
// // const io=socket(server)
// // io.on("connection",(socket)=>{
// //     socket.emit("me",socket.id)
// // })
// // socket.on("disconnect",()=>{
// //     socket.broadcast.emit("Callended")

// // })
// // socket.on("calluser",(data)=>{
// //     io.to(data.userTocall).emit("calluser",{signal:data.signalData,from:data.from,name:data.name})
// // })
// // socket.on("answercall",(data)=>io.to(data.to).emit("callAccepted"),data.signal)


// const express = require("express")
// const http = require("http")
// const app = express()
// var socket=require("socket.io")
// const server = http.createServer(app)
// const io=socket(server)
// // const io = require("socket.io")(server, {
	
// // })

// io.on("connection", (socket) => {
// 	socket.emit("me", socket.id)

// 	socket.on("disconnect", () => {
// 		socket.broadcast.emit("callEnded")
// 	})

// 	socket.on("callUser", (data) => {
// 		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
// 	})

// 	socket.on("answerCall", (data) => {
// 		io.to(data.to).emit("callAccepted", data.signal)
// 	})
// })

