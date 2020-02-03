import { updateAllStarships } from '../services'

const seederStarships = async () => {
  await updateAllStarships()
}

export default seederStarships
