import Server from "./classes/server";
import express from 'express';
import colors from "colors";
import cors from "cors";





const port: number = 3000;

const server = new Server(port);
colors.enable();


server.app.use(express.urlencoded({ extended: true }));
server.app.use(express.json());

server.app.use(cors());


//Levantar express
server.start(() => {
    console.log("\n");
    console.log(`Servidor corriendo el puerto ${server.port}`.italic.bgBlue);

});

