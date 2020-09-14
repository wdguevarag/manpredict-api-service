import bodyParser from 'body-parser';
import cors from 'cors';

import Server from './server/server';
import routes from './routes';
import sequelize from './databases/sequelize.connections';
import fileUpload from 'express-fileupload';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import chalk from 'chalk';
import figlet from 'figlet';


const server = Server.instance;


//-------- Configure Plublic Root ------//
server.app.use(server.express.static('public'))
server.app.use(fileUpload())

//---------CONFIGURE BODY PARSE---------//
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
//---------CONFIGURE BODY PARSE---------//

//---------CONFIGURE CORS---------//
server.app.use(cors({ origin: true, credentials: true }))
//---------CONFIGURE CORS---------//

//---------CONFIGURE ROUTES---------//
server.app.use('/', routes)
//---------CONFIGURE ROUTES---------//


sequelize.authenticate()
    .then(() => {
        // console.log(chalk.green(figlet.textSync("MS4M - H S", {
        //     horizontalLayout: "default",
        //     verticalLayout: "default"
        // })))

        console.log(chalk.green(' \u2714 Data Base connected..! '));

        server.start(() => {
            server.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
            console.log( chalk.green(` \u2714 Server corriendo en el puerto ${server.port}`));
        });
    }).catch((err) => {
        console.log(err);
    })



