import {Request, Response} from 'express';
import {CONTROL_QUERY_USER} from '../databases/queries/control.query';
import sequelize from '../databases/sequelize.connections';
import {QueryTypes} from 'sequelize';
import bcrypt from "bcrypt";

export default class UserController {

    load_user_list = async (req: Request, res: Response) => {
        try {

            let query = `select * from users order by is_active desc, 9 desc`;

            let users = await sequelize.query(query, {type: QueryTypes.SELECT});

            return res.json({success: true, users});
        } catch (err) {
            return res.status(500).json({sucess: false, err});
        }
    }

    insert_user = async (req: Request, res: Response) => {

        let u = req.body.newUser;

        //Validación para usuario existente

        let query_verify_user = `select count(*) from users where user_us = '${u.user}'`;
        let query_exist_user = await sequelize.query(query_verify_user, {type: QueryTypes.SELECT});

        // @ts-ignore
        if (query_exist_user[0].count > 0) return res.json({success: false, message: 'Usuario existente'});

        else {
            try {

                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(u.password, salt, async function (err, hash) {
                        let query = `select public.insert_new_user ('${u.user}', '${hash}', true, '${u.firstName}', '${u.lastName}', ${u.role})`;

                        let query_response = await sequelize.query(query, {type: QueryTypes.SELECT});

                        return res.json({success: true, query_response});

                    });
                });

            } catch (err) {
                return res.status(500).json({sucess: false, err});
            }
        }

    }

    update_user = async (req: Request, res: Response) => {

        let u = req.body.editUser;
        let u_id = req.body.userId;
        let changePass = req.body.checkPass;

        let query_verify_user = `select * from users where user_us = '${u.user}'`;
        let query_exist_user = await sequelize.query(query_verify_user, {type: QueryTypes.SELECT});

        if (query_exist_user.length > 0 && query_exist_user[0]?.user_id !== u_id)
             return res.json({success: false, message: 'Usuario existente'});

        else {
            try {
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(u.password, salt, async function (err, hash) {

                        let query = changePass ?
                            `update users set 
                                    user_us = '${u.user}',
                                    pass_us = '${hash}',
                                    first_name = '${u.firstName}',
                                    last_name = '${u.lastName}',
                                    client_id = ${u.role},
                                    update_time = now()
                             where user_id = ${u_id}` :

                            `update users set 
                                    user_us = '${u.user}',
                                    first_name = '${u.firstName}',
                                    last_name = '${u.lastName}',
                                    client_id = ${u.role},
                                    update_time = now()
                             where user_id = ${u_id}`

                        let query_response = await sequelize.query(query, {type: QueryTypes.UPDATE});

                        return res.json({success: true, query_response});

                    });
                });


            } catch (err) {
                return res.status(500).json({sucess: false, err});
            }
        }
    }

    enable_user = async (req: Request, res: Response) => {

        let u_id = req.body.userId;
        let changePass = req.body.status;

        try {

            let query = `update users set 
                                    is_active = '${changePass}',
                                    update_time = now()
                             where user_id = ${u_id}`;

            let users = await sequelize.query(query, {type: QueryTypes.UPDATE});

            return res.json({success: true, users});
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
