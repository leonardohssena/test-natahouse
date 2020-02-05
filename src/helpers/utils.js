const toHours = {
  hour: 1,
  hours: 1,
  day: 24,
  days: 24,
  week: 168,
  weeks: 168,
  month: 720,
  months: 720,
  year: 262800,
  years: 262800
}

/**
 * @name timeToHours
 *
 * Função para transformar um certo horario no seu referencial em horas
 *
 * @param time Horario a ser transformado
 * @param type Tipo do horario a ser transformado
 *
 * @returns Valor em horas do horario
 */
const timeToHours = (time, type) => {
  return time * toHours[type]
}

export { timeToHours }
