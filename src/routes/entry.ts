import { Router } from 'express'
import {
  getEntryByEntryId,
  getAllEntresByUserId,
  getEntries,
  insertEntry,
  updateEntry,
  deleteEntry,
} from '../controllers/entry'

const router = Router()

//OJO, no se pueden ver todas, solo por usuario
router.get('/', getEntries)

// router.get('/:id', getEntryByEntryId)

router.get('/user', getAllEntresByUserId)

router.post('/', insertEntry)

router.put('/:id', updateEntry)

router.delete('/:id', deleteEntry)

export { router }
