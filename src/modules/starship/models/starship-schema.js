import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import model from './starship-model'
import { timeToHours } from '../../../helpers/utils'

const schema = new mongoose.Schema(model, { timestamps: true })

schema.plugin(mongoosePaginate)

schema.pre('findOneAndUpdate', async function (next) {
  const updated = this.getUpdate().$set
  let { MGLT, consumables } = updated
  MGLT = MGLT !== 'unknown' ? MGLT : undefined
  consumables = consumables !== 'unknown' ? consumables : undefined
  const consumablesInHours = consumables ? timeToHours(...consumables.split(' ')) : undefined

  this.set({ ...updated, MGLT, consumables, consumablesInHours })
  next()
})

const Schema = mongoose.model('starship', schema)
export default Schema
