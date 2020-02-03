import StarshipSchema from '../modules/starship/models/starship-schema'

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

const findStarshipPaginate = (filter, page, limit) => {
  return StarshipSchema.paginate(filter, { page, limit })
}

export {
  createOrUpdateStarshipByName,
  findStarshipPaginate
}
