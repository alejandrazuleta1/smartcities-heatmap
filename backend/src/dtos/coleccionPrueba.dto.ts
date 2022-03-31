

export default class ColeccionPruebaDto{
    private _id?: string;
    private id_Medata: string;
    private datos:[];

    constructor(data?: any) {
        
        console.log(data);

        if(!data){
            this.id_Medata = "";
            this.datos = [];
        }else{
            this._id = data.id;
            this.id_Medata = data.id_Medata;
            this.datos = data.datos;
        }
    }

    getId(){
        return this._id;
    }

    getId_Medata(){
        return this.id_Medata;
    }

    getDatos(){
        return this.datos;
    }

}