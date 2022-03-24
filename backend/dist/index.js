"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const express_1 = __importDefault(require("express"));
const colors_1 = __importDefault(require("colors"));
const port = 3000;
const server = new server_1.default(port);
colors_1.default.enable();
server.app.use(express_1.default.urlencoded({ extended: true }));
server.app.use(express_1.default.json());
//Levantar express
server.start(() => {
    console.log("\n");
    console.log(`Servidor corriendo el puerto ${server.port}`.italic.bgBlue);
});
