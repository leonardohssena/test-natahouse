import StarshipSchema from '../modules/starship/models/starship-schema'

/**
 * @name createOrUpdateStarshipByName
 *
 * Função DAO para criar ou atualizar um starship
 *
 * @param starShipInfo Objeto contendo todos os dados necessários para criar um starship
 */
const createOrUpdateStarshipByName = (starShipInfo) => {
  return StarshipSchema.findOneAndUpdate({
    name: starShipInfo.name
  }, {
    $set: starShipInfo
  }, {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
    useFindAndModify: false
  })
}

/**
 * @name findStarshipPaginate
 *
 * Função DAO para buscar os starships de acordo com filtro e paginação informada
 *
 * @param filter Objeto contendo as configurações do filtro
 * @param page Página atual da paginação
 * @param limit Número máximo de resultados por página
 *
 * @returns Lista paginada com os starship
 */
const findStarshipPaginate = (filter, page, limit) => {
  return StarshipSchema.paginate(filter, { page, limit })
}

export {
  createOrUpdateStarshipByName,
  findStarshipPaginate
}
