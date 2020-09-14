import { Model, DataTypes } from 'sequelize';
import sequelize from '../databases/sequelize.connections';

class Settings extends Model {

    public key!: string;
    public value!: string;
    
}

Settings.init({
    key: {
        type: DataTypes.STRING,
        autoIncrement: false,
        primaryKey: true,
    },
    value: {
        type:  DataTypes.JSON,
        allowNull: false,
    },
    
}, {
    schema: 'clbrtn',
    tableName: 'd0401_settings',
    timestamps: false,
    sequelize: sequelize
});

export default Settings;