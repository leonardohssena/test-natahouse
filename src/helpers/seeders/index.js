import logger from '../logger'
import seederStarships from './starships'

/**
 * @name seeder
 *
 * Função para popular os dados no banco
 *
 */
const seeder = async () => {
  const loggerInfo = { name: 'seeder', params: {} }
  logger.info(loggerInfo.name, loggerInfo.params)
  try {
    await seederStarships()
  } catch (err) {
    logger.error(loggerInfo.name, loggerInfo.params, err)
  }
}

export default seeder
