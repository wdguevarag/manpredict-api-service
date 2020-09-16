import {Request, Response} from 'express';
import {CONTROL_QUERY_USER} from '../databases/queries/control.query';
import sequelize from '../databases/sequelize.connections';
import {QueryTypes} from 'sequelize';

export default class UserController {

    static load_user_list = async (req: Request, res: Response) => {
        try {
            let query = CONTROL_QUERY_USER.USER_LIST;
            let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, query_response});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

    static insert_user = async (req: Request, res: Response) => {
        try {
            let {calibration_id} = req.params;

            let query = CONTROL_QUERY_USER.ADD_USER;
            let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, query_response});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

    static update_user = async (req: Request, res: Response) => {
        try {
            let {calibration_id} = req.params;

            let query = CONTROL_QUERY_USER.UPDATE_USER;
            let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, query_response});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

    static delete_user = async (req: Request, res: Response) => {
        try {
            let {calibration_id} = req.params;

            let query = CONTROL_QUERY_USER.DELETE_USER;
            let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, query_response});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }
}
