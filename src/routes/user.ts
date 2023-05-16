import { Router } from 'express'
import { updateUser, getUsers, getUser } from '../controllers/user'
import { logMiddleware } from '../middleware/log'

const router = Router()

// router.get('/', getUsers)
router.get('/', getUser)

router.put('/:id', updateUser)

export { router }
