import { Router } from 'express'
import AuthController from './controllers/auth.controller';
import UserController from './controllers/user.controller';
import EquipmentController from './controllers/equipment.controller';
import ComponentController from './controllers/components.controller';
import ElementController from './controllers/element.controller';
import FleetController from './controllers/fleets.controller';

const routes = Router();

const auth = new AuthController();
const user = new UserController();
const equipment = new EquipmentController();
const component = new ComponentController();
const element = new ElementController();
const fleet = new FleetController();

//--------------------------------------------------------//
// ╔═╗╔═╗╔╦╗
// ║ ╦║╣  ║
// ╚═╝╚═╝ ╩
//--------------------------------------------------------//

routes.get('/api/v1/equipment/flota/sec/:flotaPr', equipment.getFlotasSecByFlotaPr)
routes.get('/api/v1/auth/getusers', user.load_user_list)

routes.get('/api/v1/components/getcomponents', component.load_component_list)
routes.get('/api/v1/components/getcomponents/toselect', component.load_component_list_to_select)

routes.get('/api/v1/elements/getelements', element.load_element_list)

routes.get('/api/v1/fleets/getfleets', fleet.load_fleet_list)

//--------------------------------------------------------//
// ╔═╗╔═╗╔═╗╔╦╗
// ╠═╝║ ║╚═╗ ║
// ╩  ╚═╝╚═╝ ╩
//--------------------------------------------------------//

routes.post('/api/v1/auth/login', auth.login)
routes.post('/api/v1/auth/register', user.insert_user)

routes.post('/api/v1/components/newcomponent', component.insert_component)

routes.post('/api/v1/elements/newelement', element.insert_element)

routes.post('/api/v1/fleets/newfleet', fleet.insert_fleet)

//--------------------------------------------------------//
// ╔═╗╦ ╦╔╦╗
// ╠═╝║ ║ ║
// ╩  ╚═╝ ╩
//--------------------------------------------------------//
routes.put('/api/v1/auth/update', user.update_user)
routes.put('/api/v1/auth/disabled', user.enable_user)

routes.put('/api/v1/components/update', component.update_component)
routes.put('/api/v1/components/disabled', component.enable_component)

routes.put('/api/v1/elements/update', element.update_element)
routes.put('/api/v1/elements/disabled', element.enable_element)

routes.put('/api/v1/fleets/update', fleet.update_fleet)
routes.put('/api/v1/fleets/disabled', fleet.enable_fleet)
//--------------------------------------------------------//
// ╔╦╗╔═╗╦  ╔═╗╔╦╗╔═╗
//  ║║║╣ ║  ║╣  ║ ║╣
// ╚╩╝╚═╝╚═╝╚═╝ ╩ ╚═╝
//--------------------------------------------------------//


//--------------------------------------------------------//


export default routes;
