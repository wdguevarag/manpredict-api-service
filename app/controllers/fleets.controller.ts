import {Request, Response} from "express";
import sequelize from "../databases/sequelize.connections";
import {QueryTypes} from "sequelize";

export default class UserController {

    load_fleet_list = async (req: Request, res: Response) => {
        try {

            let query = `select * from fleets order by is_active desc, 5 desc`;

            let fleets = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, fleets});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

    load_fleet_list_to_select = async (req: Request, res: Response) => {
        try {

            let query = `select * from fleets where is_active is true order by fleet_name asc`;

            let fleets = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, fleets});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

    insert_fleet = async (req: Request, res: Response) => {

        let c = req.body.newFleet;

        let query_verify_fleet = `select count(*) from fleets where fleet_name = '${c.fleetName.trim()}'`;
        let query_exist_fleet = await sequelize.query(query_verify_fleet, {type: QueryTypes.SELECT});

        // @ts-ignore
        if (query_exist_fleet[0].count > 0) return res.json({success: false, message: 'Fleet existente'});

        else {
            try {
                let query = `select public.insert_new_fleet ('${c.fleetName.trim()}', true)`;
                let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});
                return res.json({success: true, query_response});
            } catch (err) {
                return res.status(500).json({sucess: false, err});
            }
        }

    }

    update_fleet = async (req: Request, res: Response) => {

        let c = req.body.editFleet;
        let c_id = req.body.fleetId;

        let query_verify_fleet = `select * from fleets where fleet_name = '${c.fleetName.trim()}'`;
        let query_exist_fleet = await sequelize.query(query_verify_fleet, {type: QueryTypes.SELECT});

        if (query_exist_fleet.length > 0 && query_exist_fleet[0]?.fleet_id !== c_id)
            return res.json({success: false, message: 'Fleet existente'});

        else {
            try {
                let query =
                    `update fleets set 
                            fleet_name = '${c.fleetName}',
                            update_time = now()
                     where fleet_id = ${c_id}`

                let query_response = await sequelize.query(query, {type: QueryTypes.UPDATE});

                return res.json({success: true, query_response});

            } catch (err) {
                return res.status(500).json({sucess: false, err});
            }
        }
    }

    enable_fleet = async (req: Request, res: Response) => {

        let c_id = req.body.fleetId;
        let isActive = req.body.status;

        try {

            let query = `update fleets set 
                                    is_active = '${isActive}',
                                    update_time = now()
                             where fleet_id = ${c_id}`;

            let users = await sequelize.query(query, {type: QueryTypes.UPDATE});

            return res.json({success: true, users});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }
}
