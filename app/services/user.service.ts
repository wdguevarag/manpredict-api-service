import User from '../entities/User';
import Decrypt from '../services/decrypt.service';
import bcrypt from 'bcrypt';



export function UserAndPasswordIsRequired(user: string, password: string) {
    if (user === '' || password === '') {

        return {
            success: false,
            message: "Fields Requiered"
        }

    }
    return {
        success: true,
    }

}

export function UserNotExist(user: User | null | undefined) {

    if (user === undefined || user === null) {
        return {
            success: false,
            message: "User not found"
        }
    }
    return {
        success: true,
    }

}

export function PasswordIsNotValid(passInput: string, passUser: string, id_cs: number | null) {
    let decrypt = new Decrypt();

    if (id_cs != null) {
        return decrypt.asciinom(decrypt.decode(passUser)) == passInput ? { success: true } : { success: false, message: "Pass not valid" }
    } else {
        return bcrypt.compareSync(passInput,passUser) ? { success: true } : { success: false, message: "Pass not valid" }

    }



}
