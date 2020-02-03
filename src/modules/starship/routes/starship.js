import logger from '../../../helpers/logger'
import {
  calcStarshipStops
} from '../api/starship-api'

const getStarshipStops = async (req, res) => {
  const loggerInfo = {
    name: 'getStartshipStops',
    params: req.query
  }
  logger.info(loggerInfo.name, loggerInfo.params)

  const {
    mglt,
    page,
    limit
  } = req.query

  if (mglt) {
    const starshipStops = await calcStarshipStops(mglt, page, limit)
    res.status(200).json(starshipStops)
  } else {
    res.status(409).json({
      message: 'Distância inválida'
    })
  }
}

export {
  getStarshipStops
}
