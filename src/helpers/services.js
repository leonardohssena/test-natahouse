import logger from './logger'
import {
  requestsApi
} from './requests-api'
import {
  createOrUpdateStarshipByName
} from './data-access'

/**
 * @name updateAllStarships
 *
 * Função para atualizar todos os starships junto a swapi
 *
 */
const updateAllStarships = async () => {
  const loggerInfo = { name: 'updateAllStarships', params: {} }

  try {
    logger.info('Start ' + loggerInfo.name, loggerInfo.params)

    let page = 1
    let hasNext
    do {
      const starships = await getAllStarships({ page })

      starships.results.map(async starship => {
        await createOrUpdateStarshipByName(starship)
      })

      ++page
      hasNext = !!starships.next
    } while (hasNext)

    logger.info('End ' + loggerInfo.name, loggerInfo.params)
  } catch (err) {
    logger.error(loggerInfo.name, loggerInfo.params, err)
  }
}

const getAllStarships = async (params = {}) => {
  try {
    const starships = await requestsApi('GET', 'starships', '', params, {})
    return starships
  } catch (err) {
    logger.error('getAllStarships', { params }, err)
  }
}

export {
  updateAllStarships
}
