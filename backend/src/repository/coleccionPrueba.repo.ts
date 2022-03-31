import ColeccionPruebaDto from "../dtos/coleccionPrueba.dto";
import { ColeccionPrueba } from "../models/coleccionPrueba.model";


class ColeccionPruebaRepo {

    async crear(coleccionPruebaDto: ColeccionPruebaDto): Promise<Boolean> {
        try{
            let coleccionPruebaModel = new ColeccionPrueba({
                id_Medata: coleccionPruebaDto.getId_Medata(),
                datos: coleccionPruebaDto.getDatos()
            });

            let coleccionPrueba = await ColeccionPrueba.create(coleccionPruebaModel);

            return true;
        }
        catch(error) {
            console.log(error);
            throw(error);
        } 
    }

    async obtenerTodos(): Promise<ColeccionPruebaDto[]> {
        return new Promise (async (resolve, reject) => {
            try{
                let coleccionPruebaArray: ColeccionPruebaDto[] = [];

                let coleccionPruebaData = await ColeccionPrueba.find();

                coleccionPruebaData.forEach(prueba =>{
                    coleccionPruebaArray.push(new ColeccionPruebaDto(prueba));
                });

                resolve(coleccionPruebaArray);

            } catch(error) {
                return reject (error);
            }
        })
    }



}

export default ColeccionPruebaRepo;