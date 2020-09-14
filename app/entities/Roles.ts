import { Model, DataTypes } from 'sequelize';
import sequelize from '../databases/sequelize.connections';


class Roles extends Model {

    public id!: number;
    public nombre!: string;
   
}

Roles.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
}, {
   
    tableName: "ta_permisos",
    timestamps: false,
    sequelize: sequelize
});



export default Roles;