export interface Proyectos{
    //Atributos 
    id: number;
    nombres: String;
    categoria: String;
    cliente:String;
    fechaPublicacion: String;
    URL: string;
    Tecnologias: Array<String>;
    descripcion : string;
    fotoPortada: string
    fotos : Array<String>;
}