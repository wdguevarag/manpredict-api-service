import User from '../entities/User';
import Decrypt from '../services/decrypt.service';


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

export function PasswordIsNotValid(passInput: string, passUser: string) {
    console.log(passUser)
    let decrypt = new Decrypt();
    if (decrypt.asciinom(decrypt.decode(passUser)) == passInput) {
        return {
            success: true,
        };
    }
    return {
        success: false,
        message: "Pass not valid"
    }
}
