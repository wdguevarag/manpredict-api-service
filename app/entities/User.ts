import { Model, DataTypes } from 'sequelize';
import sequelize from '../databases/sequelize.connections';

class User extends Model {

    public user_id!: number;
    public user_us!: string;
    public pass_us!: string;
    public is_active!: boolean;
}

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
    },
    user_us: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    pass_us: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    update_time: {
        type: new DataTypes.DATE,
        allowNull: true,
    }

}, {
    schema: 'public',
    tableName: "users",
    timestamps: false,
    sequelize: sequelize
});

export default User;
