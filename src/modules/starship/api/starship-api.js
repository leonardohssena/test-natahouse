import { findStarshipPaginate } from '../../../helpers/data-access'

const calcStarshipStops = async (mglt, page = 1, limit = 10) => {
  const starships = await findStarshipPaginate({}, page, Number(limit))

  const docs = starships.docs.map(({ name, consumables, consumablesInHours, MGLT }) => {
    return {
      name,
      consumables: consumables || 'Desconhecido',
      MGLT: MGLT || 'Desconhecido',
      stops: consumablesInHours && MGLT ? Math.floor(mglt / MGLT / consumablesInHours) : 'Desconhecido'
    }
  })

  return { ...starships, docs }
}

export { calcStarshipStops }
