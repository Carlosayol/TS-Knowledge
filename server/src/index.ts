import express from 'express'
import { router } from './routes/loginRoutes'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import { router as controllerRouter } from './controllers/decorators/controller'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['laskdjf'] }))
app.use(controllerRouter)

app.listen(3000, () => {
  console.log('Estoy atento pa')
})