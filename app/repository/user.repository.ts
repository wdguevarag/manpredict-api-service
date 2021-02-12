import User from '../entities/User';
import Idioma from '../entities/Idioma';
import Trabajador from '../entities/Trabajor';



export default class UserRepository {


    static async getUserByUser(userName: string) {


        let user = await User.findOne({
            where:
            {
                user_us: userName,
                is_active: true
            }
        });
        return user;
    }
}
