import { Model, DataTypes } from 'sequelize';
import sequelize from '../databases/sequelize.connections';

class Idioma extends Model {

    public id_idioma!: number;
    public cod_iso_idioma!: string;
    public nombre_idioma!: string;

}

Idioma.init({
    id_idioma: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
    },
    cod_iso_idioma: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    nombre_idioma: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    }
    
}, {
    schema: 'public',
    tableName: "ts_idioma",
    timestamps: false,
    sequelize: sequelize
});

export default Idioma;