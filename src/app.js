"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var database_1 = __importDefault(require("./database"));
var routes_1 = require("./routes");
database_1.default();
// instancia Servidor
var app = express_1.default();
exports.app = app;
// ROTAS
app.use(express_1.default.json());
app.use(routes_1.router);
