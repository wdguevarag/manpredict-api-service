import {Model, DataTypes} from 'sequelize';
import sequelize from '../databases/sequelize.connections';

export default class Equipo extends Model {

    id!: number;
    id_equipo!: number;
    id_flota!: number;
    nombre!: string;
    ipequipo!: string;
    tiem_elimin!: Date;
    grupoconexion!: number;
    ishp!: boolean;
    icono!: number
}

Equipo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
    },
    id_equipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_flota: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nombre: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    ipequipo: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    tiem_elimin: {
        type: new DataTypes.DATE,
        allowNull: true,
    },
    grupoconexion: {
        type: new DataTypes.SMALLINT,
        allowNull: true,
    },
    ishp: {
        type: new DataTypes.TINYINT,
        allowNull: true,
    },
    icono: {
        type: new DataTypes.INTEGER,
        allowNull: true,
    },


}, {
    schema: 'public',
    tableName: "ts_equipos",
    timestamps: false,
    sequelize: sequelize
});
Equipo.belongsTo(Equipo, {foreignKey: 'id_flota', as: 'parent'});


