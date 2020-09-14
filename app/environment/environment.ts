import * as dotenv from "dotenv";

dotenv.config();

export const CONFIG = {


    SERVER: {
        PORT: Number(process.env.SERVER_PORT),
        ENV: process.env.ENV
    },

    HEALTH_SENSE_DB: {
        HOST_DB: process.env.HOST_DATA_BASE,
        USER_DB: process.env.USER_DATA_BASE,
        PASS_DB: process.env.PASS_DATA_BASE,
        NAME_DB: process.env.NAME_DATA_BASE,
        PORT_DB: Number(process.env.PORT_DATA_BASE),
    },

    AUTH: {
        JWT_SECRET: process.env.JWT_SECRET == null ? 'seed-desarrolo' : process.env.JWT_SECRET,
        JWT_EXPIRE: process.env.JWT_EXPIRE == null ? '60 * 60 * 24' : process.env.JWT_EXPIRE,
    }

}

