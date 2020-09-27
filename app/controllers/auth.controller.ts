import { Request, Response } from 'express';
import UserRepository from '../repository/user.repository';
import * as userService from '../services/user.service';
import jwt from 'jsonwebtoken';
import { CONFIG } from '../environment/environment';

export default class AuthController {

    login = async (req: Request, res: Response) => {

        let { userName, pass } = req.body;

        let response = userService.UserAndPasswordIsRequired(userName, pass);
        if (!response?.success) { return res.json({ response }) }
        let user: any = await UserRepository.getUserByUser(userName)
        let responseUser = userService.UserNotExist(user)
        if (!responseUser?.success) return res.json({ response: responseUser })
        let responsePass = userService.PasswordIsNotValid(pass, user == null ? '' : user.pass_user, user.id_cs)
        if (!responsePass?.success) return res.json({ response: responsePass })

        let user_plain = user.get({ plain: true })
        delete user_plain?.pass_user
        let token = jwt.sign({
            usuario: user_plain
        }, CONFIG.AUTH.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

        return res.json(
            { response: {
                success: true,
                user: user?.login_user,
                language: user?.language?.cod_iso_idioma,
                worker: `${user?.trabajador?.nombre_tr} ${user?.trabajador?.apellido_paterno_tr} ${user?.trabajador?.apellido_materno_tr}`,
                token
            }
    }
            );

    }

}
