import Router from 'express'
import {
  getStarshipStops
} from './starship'

const Routes = Router()

Routes
  .get('/stops', getStarshipStops)

export const module = {
  name: 'starship',
  route: Routes
}
