import { Hono } from 'hono'
import { fromUnixTime } from 'date-fns'
import { utcToZonedTime, format } from 'date-fns-tz'

import { env } from '../env'
import { invalid, valid } from './state'

const app = new Hono({ strict: false })

interface Time {
  genesis: number,
  future: number
}

const time: Time = {
  genesis: env.DRAND_CHAIN_GENESIS,
  future: env.user.FUTURE_TIME
}

let { genesis, future } = time

let currentRound: number
let futureRound: number

// https://date-fns.org/v2.29.3/docs/Time-Zones
const timeZone = env.user.TIME_ZONE
const futureTime = utcToZonedTime(fromUnixTime(future), timeZone)

// https://date-fns-interactive.netlify.app
const pattern = 'EEEE, LLLL do yyyy @ HH:mm a'
// https://github.com/marnusw/date-fns-tz#format
const secretDate = format(futureTime, pattern, { timeZone: timeZone })

// currentUNIX - genesisUNIX / 30 = drandRound
const getFutureRound = (genesis: number, future: number) => {
  return (future - genesis) / 30
}

// Middleware
app.use(async (_, next) => {
  // DRAND_CHAIN_HASH is optional, omitting it will use 'mainnnet/default'
  const response: any = await fetch(`${env.DRAND_ENDPOINT}/${env.DRAND_CHAIN_HASH}/public/latest`)

  const jsonData: any = await response.json()

  currentRound = jsonData.round
  futureRound = getFutureRound(genesis, future)

  await next()
})

app.get('/', (c) => {
  if ( futureRound > currentRound ) {
    c.header('Content-Type', 'text/html')
    return c.html(invalid(secretDate, timeZone))
  } else {
    c.header('Content-Type', 'text/html')
    return c.html(valid(env.user.SECRET_STRING))
  }
})

export default app
