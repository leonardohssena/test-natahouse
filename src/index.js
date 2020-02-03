import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import jwt from 'express-jwt'
import helmet from 'helmet'
import passport from 'passport'
import mongoose from 'mongoose'

import config from './config'

import unlessPath from './middlewares/unlessPath'

import routes from './routes'
import seeder from './helpers/seeders'
import allSchedule from './helpers/scheduled-jobs'

const app = express()
const PORT = process.env.PORT || 3001

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use(cors())

app.use(compression())

app.use(passport.initialize())
app.use(passport.session())

app.use(helmet())

app.use(jwt({
  secret: config.secret
}).unless(unlessPath))

mongoose
  .connect(config.mongoDB, {
    reconnectTries: 1000,
    useNewUrlParser: true
  })
  .then(
    () => {
      console.log('Connected on MongoDB')
      seeder()
    },
    err => console.log({
      error: err.message
    })
  )

app.use(
  (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Unauthorized')
    }
  }
)

allSchedule()
routes(app)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode.`)
})

export default app
