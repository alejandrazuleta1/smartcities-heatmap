import { Router } from "express";

import * as controller from "../controllers/coleccionPrueba.controller";

const coleccionPruebaRoutes = Router();


coleccionPruebaRoutes.post('/crear', controller.crear);
coleccionPruebaRoutes.get('/obtener', controller.obtenerTodos);

export default coleccionPruebaRoutes;