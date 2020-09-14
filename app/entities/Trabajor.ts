import { Model, DataTypes } from 'sequelize';
import sequelize from '../databases/sequelize.connections';

class Trabajador extends Model {

    public id_trabajador!: number;
    public nombre_tr!: string;
    public apellido_paterno_tr!: string;
    public apellido_materno_tr!: boolean;
}

Trabajador.init({
    id_trabajador: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
    },
    nombre_tr: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    apellido_paterno_tr: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    apellido_materno_tr: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    
}, {
    schema: 'public',
    tableName: "tp_trabajador",
    timestamps: false,
    sequelize: sequelize
});



export default Trabajador;