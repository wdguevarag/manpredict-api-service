import { Request, Response } from 'express';
import EquipmentRepository from '../repository/equipment.repository';

export default class EquipmentController {

    getFlotasSecByFlotaPr = async (req: Request, res: Response) => {

        let { flotaPr } = req.params;

        let data = await EquipmentRepository.getFlotaSecByFlotaPr(Number(flotaPr));


        return res.json({ flotaPr:data })



    }

}