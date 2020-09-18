import { Request, Response } from 'express';
import EquipmentRepository from '../repository/equipment.repository';

export default class EquipmentController {

    getFlotasSecByFlotaPr = async (req: Request, res: Response) => {

        try {
            let { flotaPr } = req.params;
            let data = await EquipmentRepository.getFlotaSecByFlotaPr(Number(flotaPr));
            return res.status(200).json({ success: true, data });
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, err });

        }

    }

}