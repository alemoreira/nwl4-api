"use strict";
// import 'reflect-metadata';
// import express, { Router } from 'express';
// import './database';
// import { router } from './routes';
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
// // instancia Servidor
// const app = express();
// // ROTAS
// app.use(express.json());
// app.use(router);
// http://localhost:3333/hello
// app.get("/hello", (rquest, response) => {
//   return response.send("Hello NLW#4")
// });
// app.get("/welcome", (rquest, response) => {
//   return response.json({
//     message: "Hello World - NLW #04"
//   })
// });
// app.post("/", (rquest, response) => {
//   return response.json({
//     message: "Os dados foram salvos com sucesso.",
//   })
// });
// adiciona a porta na qual a o servidor estará rodando.
app_1.app.listen(3333, function () { return console.log("SERVER is running..."); });
