import User from '../entities/User';
import Idioma from '../entities/Idioma';
import Trabajador from '../entities/Trabajor';



export default class UserRepository {


    static async getUserByUser(userName: string) {


        let user  = await User.findOne({ where: { login_user: userName, is_activo: true }, include: [{ model: Idioma, as: 'language' }, { model: Trabajador, as: 'trabajador' }] });
        return user;
    }
}