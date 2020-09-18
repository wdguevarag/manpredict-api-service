import Equipo from '../entities/Equipo';
import FlotaSec from '../entities/FlotaSec';



export default class EquipmentRepository {



    static async getFlotaSecByFlotaPr(flotaPrin: number) {

        let flotasSec = await FlotaSec.findAll({
            where: {
                id_flota_pr: flotaPrin,
                tiem_elimin: null
            },
            include: [
                {
                    model: Equipo,
                    as: 'equipments'
                }
            ]
        })

        return flotasSec;

    }
}