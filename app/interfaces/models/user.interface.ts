
export interface IUser {

    id_usuario: number;
    login_user: string;
    pass_user: string;
    is_activo: boolean;
    id_idioma: number;
    id_trabajador: number;
    language: {
        id_idioma: number;
        cod_iso_idioma: string;
        nombre_idioma: string;
    }
    trabajador: {
        id_trabajador: number;
        nombre_tr: string;
        apellido_paterno_tr: string;
        apellido_materno_tr: boolean;
    }

}