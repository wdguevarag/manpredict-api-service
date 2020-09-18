import { Router } from 'express'
import AuthController from './controllers/auth.controller';
import EquipmentController from './controllers/equipment.controller';

const routes = Router();

const auth = new AuthController();
const equipment = new EquipmentController();

//--------------------------------------------------------//
// ╔═╗╔═╗╔╦╗
// ║ ╦║╣  ║
// ╚═╝╚═╝ ╩
//--------------------------------------------------------//

routes.get('/api/v1/equipment/flota/sec/:flotaPr', equipment.getFlotasSecByFlotaPr)

//--------------------------------------------------------//
// ╔═╗╔═╗╔═╗╔╦╗
// ╠═╝║ ║╚═╗ ║
// ╩  ╚═╝╚═╝ ╩
//--------------------------------------------------------//

routes.post('/api/v1/auth/login', auth.login)

//--------------------------------------------------------//
// ╔═╗╦ ╦╔╦╗
// ╠═╝║ ║ ║
// ╩  ╚═╝ ╩
//--------------------------------------------------------//

//--------------------------------------------------------//
// ╔╦╗╔═╗╦  ╔═╗╔╦╗╔═╗
//  ║║║╣ ║  ║╣  ║ ║╣
// ╚╩╝╚═╝╚═╝╚═╝ ╩ ╚═╝
//--------------------------------------------------------//


//--------------------------------------------------------//


export default routes;
