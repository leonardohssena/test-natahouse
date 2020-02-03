export default {
  mongoDB: process.env.mongoDB,
  secret: process.env.secret,
  LOGGER_LEVEL: process.env.LOGGER_LEVEL,
  swapi: {
    baseURL: process.env.swapiBaseURL
  }
}
