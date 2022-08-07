const { Op } = require('sequelize')
const { Award } = require('../models')

class AwardController {

    static async getAll(req, res) {
        const awardTypes = req.query.awardTypes
        const initialPoint = req.query.initialPoint || 0
        const finalPoint = 500000
        console.log(awardTypes)
        try {

            if (awardTypes) {
                const result = await Award.findAll({
                    where: {
                        type: awardTypes,
                        point: {
                            [Op.between]: [initialPoint, finalPoint]
                        }
                    }
                })
                console.log(result)
                res.status(200).json(result)
            } else {
                const result = await Award.findAll({
                    where: {
                        point: {
                            [Op.between]: [initialPoint, finalPoint]
                        }
                    }
                })
                console.log(result)
                res.status(200).json(result)
            }
        } catch (error) {
            console.log(error)
            res.status(200).json(error)
        }
    }

}

module.exports = AwardController;