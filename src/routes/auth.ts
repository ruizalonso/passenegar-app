import { Request, Response, Router } from 'express'
import { userLogin, userRegistration } from '../controllers/auth'

const router = Router()
router.post('/register', userRegistration)
router.post('/login', userLogin)

export { router }
