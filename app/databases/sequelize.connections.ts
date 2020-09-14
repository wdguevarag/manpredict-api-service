import { CONFIG } from '../environment/environment';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    CONFIG.HEALTH_SENSE_DB.NAME_DB!,
    CONFIG.HEALTH_SENSE_DB.USER_DB!,
    CONFIG.HEALTH_SENSE_DB.PASS_DB,
    {
        port :5432,
        host: CONFIG.HEALTH_SENSE_DB.HOST_DB,
        dialect: 'postgres',
        pool: {
            max: 1,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);




export default sequelize;