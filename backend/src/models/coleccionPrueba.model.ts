import { Schema, model, Document} from 'mongoose';

const coleccionPruebaSchema = new Schema({
    id_Medata:{
        type: String,
    },
    datos:[{
        fecha_hecho:{
            type: String
        },
        cantidad:{
            type: Number
        },
        longitud: {
            type: String,
        },
        latitud:{
            type: String
        },
        sexo:{
            type: String
        },
        edad:{
            type:Number
        }
    }]
});

interface IColeccionPrueba extends Document{
    id_Medata: string;
    data:[];
}

export const ColeccionPrueba = model<IColeccionPrueba>('ColeccionPrueba',coleccionPruebaSchema,'ColeccionPrueba')