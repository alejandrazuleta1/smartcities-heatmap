import Server from "./classes/server";
import express from 'express';
import colors from "colors";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';



import coleccionPruebaRoutes from "./routes/coleccionPrueba";


dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}


const port: number = parseInt(process.env.PORT);

const server = new Server(port);
colors.enable();



//Body parser
server.app.use(express.urlencoded({ extended: true }));
server.app.use(express.json());

server.app.use(cors());



//Rutas de la app
server.app.use('/coleccionPrueba', coleccionPruebaRoutes);


//Conexión  de Base de datos
let URI = process.env.MONGODB_URL as string;




mongoose.connect(URI,  (err) => {

    if (err) {
        console.log("\n");
        console.log("****************************".bgRed);
        console.log("Mongo no se pudo conectar".red);
        console.log("****************************".bgRed);
        console.log("\n");
        console.log(err);

        throw err;
    }
    console.log("\n");
    console.log("*****************************".bgGreen);
    console.log("Mongo conectado correctamente".italic.green);
    console.log("*****************************".bgGreen);
    console.log("\n");
});





//Levantar express
server.start(() => {
    console.log("\n");
    console.log(`Servidor corriendo el puerto ${server.port}`.italic.bgBlue);

});

