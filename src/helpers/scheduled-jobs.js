import schedule from 'node-schedule'

import {
  updateAllStarships
} from './services'

const initAllScheduledJobs = () => {
  schedule.scheduleJob({ hour: 3 }, () => {
    updateAllStarships()
  })
}

export default initAllScheduledJobs
