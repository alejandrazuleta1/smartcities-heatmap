import { Response, Request } from "express";
import ColeccionPruebaDto from "../dtos/coleccionPrueba.dto";
import ColeccionPruebaRepo from "../repository/coleccionPrueba.repo";




export let crear = async (req: Request, res: Response) => {
    try {
        const body = req.body;

        const coleccionPruebaDto = new ColeccionPruebaDto(body);
        const coleccionPruebaRepo = new ColeccionPruebaRepo();
        const nuevaColeccionPrueba = await coleccionPruebaRepo.crear(coleccionPruebaDto);
        res.json({
            ok:true,
            data: nuevaColeccionPrueba,
            message: 'Dato de prueba almacenado con éxito',
            error: null
        });
    }catch (error:any) {
        res.json({
            ok:false, 
            error: error,
            message: 'Error al crear dato de prueba' + error.message
        });
    }
}


export let obtenerTodos = async (req: Request, res: Response) => {
    try{
        const coleccionPruebaRepository = new ColeccionPruebaRepo();
        const coleccionPVector = await coleccionPruebaRepository.obtenerTodos();
        res.json({
            ok:true,
            data: coleccionPVector,
            message: 'Dato de prueba almacenado con éxito',
            error: null
        });
    }catch (error:any) {
        res.json({
            ok:false, 
            error: error,
            message: 'Error al crear dato de prueba' + error.message
        });
    }
}