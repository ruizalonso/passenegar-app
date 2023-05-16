import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes'
import db from './config/mongo'
import { jwt } from './utils/jwt.handle'
import { handleHttpError } from './middleware/error'
import Helmet from 'helmet'

const PORT = process.env.PORT || 3000

const app = express()
app.use(Helmet())
app.use(cors())
app.use(express.json())
app.use(jwt())
app.use('/api/v1', router)
app.use(handleHttpError)
db().then(() => console.log('Conexion Ready'))
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`))
