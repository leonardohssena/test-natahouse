import schedule from 'node-schedule'

import {
  updateAllStarships
} from './services'

/**
 * @name initAllScheduledJobs
 *
 * Funções executadas automaticamente a cada X horario
 *
 */
const initAllScheduledJobs = () => {
  schedule.scheduleJob({ hour: 3 }, () => {
    updateAllStarships()
  })
}

export default initAllScheduledJobs
