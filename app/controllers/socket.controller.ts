import {Request, Response} from "express";
import {SOCKETS} from "../constants/constants"
import sockets from 'socket.io';

export default class SocketController {

    static constants = async (req: Request, res: Response) => {
        res.json(SOCKETS);
    }

    static subscribe = async (req: Request, res: Response) => {
        // if (!req.isSocket) {
        //     return res.badRequest();
        // }

        // let {room} = req.allParams();
        // const exists = helper.existsConstantsSocket(room);
        // if (!exists) {
        //     return res.json({
        //         success: false,
        //         message: 'room not exists',
        //     });
        // }
        //
        // let data = await helper.getDataProcessRoom(room);
        //
        // sockets.join(req, room, function () {
        //     const id = req.socket.id;
        //     return res.json({
        //         success: true,
        //         message: 'subscribe to sockets',
        //         socket_ID: id,
        //         lastime: 0,
        //         data: data,
        //     });
        // });
    }
}

let helper = {

    existsConstantsSocket(room: any) {
        const rooms = SOCKETS.ROOM;
        let values = Object.values(rooms);
        // let exists = _.includes(values, room);
        // return exists;
        return true;
    },

    async getDataProcessRoom(room: any) {
        let services = require('../services/auxCron');
        let serviceRoom = null;
        // _.forEach(services, (service: any) => {
        //     if (service.room === room) {
        //         serviceRoom = service;
        //     }
        // })
        // if (serviceRoom != null) {
        //     let all_data = auxFile.json.read('json', serviceRoom.file);
        //     return all_data;
        // }
        return null;
    }
}
