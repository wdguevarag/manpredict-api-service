import {Request, Response} from 'express';
import {CONTROL_QUERY_PROFILE} from '../databases/queries/control.query';
import sequelize from '../databases/sequelize.connections';
import {QueryTypes} from 'sequelize';

export default class ProfileController {

    static load_profile_list = async (req: Request, res: Response) => {
        try {

            let query = CONTROL_QUERY_PROFILE.PROFILE_LIST;
            let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, query_response});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

    static insert_profile = async (req: Request, res: Response) => {
        try {
            let {desc_forfile} = req.params;

            let query = CONTROL_QUERY_PROFILE.ADD_PROFILE.replace(/{{desc_perfil}}/g, desc_forfile);
            let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, query_response});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

    static update_profile = async (req: Request, res: Response) => {
        try {
            let {id_update, desc_update} = req.params;

            let query = CONTROL_QUERY_PROFILE.ADD_PROFILE.replace(/{{id_perfil}}/g, id_update).replace(/{{desc_perfil}}/g, desc_update);
            let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, query_response});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

    static delete_profile = async (req: Request, res: Response) => {
        try {
            let {id_delete} = req.params;

            let query = CONTROL_QUERY_PROFILE.DELETE_PROFILE.replace(/{{id_perfil}}/g, id_delete);
            let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, query_response});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

}
