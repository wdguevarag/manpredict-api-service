import {Request, Response} from 'express';
import {CONTROL_QUERY_PERMISSION} from '../databases/queries/control.query';
import sequelize from '../databases/sequelize.connections';
import {QueryTypes} from 'sequelize';

export default class PermissionController {

    static load_list_profiles = async (req: Request, res: Response) => {
        try {
            let query = CONTROL_QUERY_PERMISSION.PROFILES_LIST;
            let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, query_response});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

    static load_list_permissions = async (req: Request, res: Response) => {
        try {
            let {id_profile} = req.params;

            let query = CONTROL_QUERY_PERMISSION.LOAD_LOST_PERMISSIONS.replace(/{{id_perfil}}/g, id_profile);
            let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, query_response});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

    static update_permissions = async (req: Request, res: Response) => {
        try {
            let {id_permission, usuario_update, checked} = req.params;

            let query = CONTROL_QUERY_PERMISSION.UPDATE_PERMISSIONS.replace(/{{idpermiso}}/g, id_permission).replace(/{{id_usuario_update}}/g, usuario_update).replace(/{{ischecked}}/g, checked);
            let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, query_response});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

}
