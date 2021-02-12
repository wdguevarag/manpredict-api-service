import {Request, Response} from "express";
import sequelize from "../databases/sequelize.connections";
import {QueryTypes} from "sequelize";

export default class UserController {

    load_element_list = async (req: Request, res: Response) => {
        try {

            let query = `select c.component_name, e.* from elements e left join components c on e.component_id = c.component_id order by e.is_active desc, 9 desc`;

            let elements = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, elements});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

    insert_element = async (req: Request, res: Response) => {

        let c = req.body.newElement;

        let query_verify_element = `select count(*) from elements where element_name = '${c.elementName.trim()}' or code = '${c.code.trim()}'`;
        let query_exist_element = await sequelize.query(query_verify_element, {type: QueryTypes.SELECT});

        // @ts-ignore
        if (query_exist_element[0].count > 0) return res.json({success: false, message: 'Nombre de componente y/o código existente'});

        else {
            try {
                let query = `select public.insert_new_element ('${c.elementName.trim()}','${c.description.trim()}','${c.code.trim()}','${c.component}', true)`;
                let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});
                return res.json({success: true, query_response});
            } catch (err) {
                return res.status(500).json({sucess: false, err});
            }
        }

    }

    update_element = async (req: Request, res: Response) => {

        let c = req.body.editElement;
        let c_id = req.body.elementId;

        let query_verify_element = `select * from elements where element_name = '${c.elementName.trim()}' or code = '${c.code.trim()}'`;
        let query_exist_element = await sequelize.query(query_verify_element, {type: QueryTypes.SELECT});

        if (query_exist_element.length > 0 && query_exist_element[0]?.element_id !== c_id)
            return res.json({success: false, message: 'Nombre de componente y/o código existente'});

        else {
            try {
                let query =
                    `update elements set 
                            element_name = '${c.elementName}',
                            description = '${c.description}',
                            component_id = '${c.component}',
                            code = '${c.code}',
                            update_time = now()
                     where element_id = ${c_id}`

                let query_response = await sequelize.query(query, {type: QueryTypes.UPDATE});

                return res.json({success: true, query_response});

            } catch (err) {
                return res.status(500).json({sucess: false, err});
            }
        }
    }

    enable_element = async (req: Request, res: Response) => {

        let c_id = req.body.elementId;
        let isActive = req.body.status;

        try {

            let query = `update elements set 
                                    is_active = '${isActive}',
                                    update_time = now()
                             where element_id = ${c_id}`;

            let users = await sequelize.query(query, {type: QueryTypes.UPDATE});

            return res.json({success: true, users});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }
}
