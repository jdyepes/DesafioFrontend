import { BaseModel } from "./base";

export class Usuario extends BaseModel
{
    public nombreLogin?: string;
    public nombre?: string;
    public apellido?: string;
    public password?: string;
    public rol?: string;
    public fechaCreacion?: string;
    public fechaModificacion?: string;
    public direccionIP?: string;
    public token?: string;

    public static clone( usuario: Usuario ): Usuario
    {
        let result : Usuario = new Usuario() 
       
        result.id = usuario.id;
        result.nombreLogin = usuario.nombreLogin;
        result.nombre = usuario.nombre;
        result.apellido = usuario.apellido;
        result.password = usuario.password;
        result.rol = usuario.rol;
        result.token = usuario.token;
        result.fechaCreacion = usuario.fechaCreacion;
        result.fechaModificacion = usuario.fechaModificacion;
        result.direccionIP = usuario.direccionIP;

        return result;
    }
}
