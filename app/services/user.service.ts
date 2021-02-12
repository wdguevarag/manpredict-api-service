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

export async function PasswordIsNotValid(passInput: string, passUser: string) {
    let decrypt = new Decrypt();

    console.log('passInput=> ', passInput)
    console.log('passUser=> ', passUser)

    const match = await bcrypt.compare(passInput, passUser);

    console.log('MATCH=> ', match)

    return  match ? {success: true} : {
        success: false,
        message: "Pass not valid"
    }


}
