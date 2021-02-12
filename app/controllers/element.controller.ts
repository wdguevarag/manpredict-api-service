import {Request, Response} from "express";
import sequelize from "../databases/sequelize.connections";
import {QueryTypes} from "sequelize";

export default class UserController {

    load_component_list = async (req: Request, res: Response) => {
        try {

            let query = `select * from components order by is_active desc, 5 desc`;

            let components = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, components});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

    insert_component = async (req: Request, res: Response) => {

        let c = req.body.newComponent;

        let query_verify_component = `select count(*) from components where component_name = '${c.componentName.trim()}'`;
        let query_exist_component = await sequelize.query(query_verify_component, {type: QueryTypes.SELECT});

        // @ts-ignore
        if (query_exist_component[0].count > 0) return res.json({success: false, message: 'Componente existente'});

        else {
            try {
                let query = `select public.insert_new_component ('${c.componentName.trim()}', true)`;
                let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});
                return res.json({success: true, query_response});
            } catch (err) {
                return res.status(500).json({sucess: false, err});
            }
        }

    }

    update_component = async (req: Request, res: Response) => {

        let c = req.body.editComponent;
        let c_id = req.body.componentId;

        let query_verify_component = `select * from components where component_name = '${c.componentName.trim()}'`;
        let query_exist_component = await sequelize.query(query_verify_component, {type: QueryTypes.SELECT});

        if (query_exist_component.length > 0 && query_exist_component[0]?.component_id !== c_id)
            return res.json({success: false, message: 'Componente existente'});

        else {
            try {
                let query =
                    `update components set 
                            component_name = '${c.componentName}',
                            update_time = now()
                     where component_id = ${c_id}`

                let query_response = await sequelize.query(query, {type: QueryTypes.UPDATE});

                return res.json({success: true, query_response});

            } catch (err) {
                return res.status(500).json({sucess: false, err});
            }
        }
    }

    enable_component = async (req: Request, res: Response) => {

        let c_id = req.body.componentId;
        let isActive = req.body.status;

        try {

            let query = `update components set 
                                    is_active = '${isActive}',
                                    update_time = now()
                             where component_id = ${c_id}`;

            let users = await sequelize.query(query, {type: QueryTypes.UPDATE});

            return res.json({success: true, users});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }
}
