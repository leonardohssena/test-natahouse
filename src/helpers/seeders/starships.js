import { updateAllStarships } from '../services'

/**
 * @name seederStarships
 *
 * Função para popular a tabela startship
 *
 */
const seederStarships = async () => {
  await updateAllStarships()
}

export default seederStarships
