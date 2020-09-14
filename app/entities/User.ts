import { Model, DataTypes } from 'sequelize';
import Idioma from './Idioma';
import sequelize from '../databases/sequelize.connections';
import Trabajador from './Trabajor';

class User extends Model {

    public id_usuario!: number;
    public login_user!: string;
    public pass_user!: string;
    public is_activo!: boolean;
    public id_idioma!: number;
    public id_trabajador!:number;
}

User.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
    },
    login_user: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    pass_user: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    is_activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    id_idioma: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_trabajador: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}, {
    schema: 'public',
    tableName: "tp_usuario",
    timestamps: false,
    sequelize: sequelize
});

User.belongsTo(Idioma, {foreignKey: 'id_idioma', as: 'language'});
User.belongsTo(Trabajador, {foreignKey: 'id_trabajador', as: 'trabajador'});


export default User;