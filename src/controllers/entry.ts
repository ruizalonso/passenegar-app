import { Request, Response } from 'express'
import {
  insert,
  getAll,
  get,
  getByUserId,
  update,
  deleteOne,
} from '../services/entry'
import { handleHttp, httpErrors } from '../utils/error.handle'
import { encryptValueBeforeSave } from '../utils/encrypt.handle'

const getEntryByEntryId = async ({ params }: Request, res: Response) => {
  if (!params) httpErrors(res, 422)
  try {
    const { id } = params
    const response = await get(id)
    const data = response ? response : httpErrors(res, 404)
    res.send(data)
  } catch (e) {
    httpErrors(res, 400)
  }
}

const getAllEntresByUserId = async ({ auth }: Request | any, res: Response) => {
  console.log('auth', auth)
  if (!auth) httpErrors(res, 401)
  try {
    const { id } = auth
    const response = await getByUserId(id)
    const data = response ? response : httpErrors(res, 404)
    res.send(data)
  } catch (e) {
    httpErrors(res, 400)
  }
}

const getEntries = async (req: Request | any, res: Response) => {
  // console.log('user', req.auth)
  try {
    const response = await getAll()
    res.send(response)
  } catch (e) {
    httpErrors(res, 400)
  }
}

const insertEntry = async ({ body }: Request, res: Response) => {
  if (!body) httpErrors(res, 422)
  const encryptedValue = await encryptValueBeforeSave(body.entryValue)
  body.entryValue = encryptedValue
  try {
    const responseItem = await insert(body)
    res.send(responseItem)
    res.send(body)
  } catch (e) {
    httpErrors(res, 400)
  }
}

const updateEntry = async ({ params, body }: Request, res: Response) => {
  if (!body || !params) httpErrors(res, 422)
  try {
    const { id } = params
    const response = await update(id, body)
    res.send(response)
  } catch (e) {
    httpErrors(res, 400)
  }
}

const deleteEntry = async ({ params }: Request, res: Response) => {
  if (!params) httpErrors(res, 422)
  try {
    const { id } = params
    const response = await deleteOne(id)
    res.send(response)
  } catch (e) {
    httpErrors(res, 400)
  }
}

export {
  getEntryByEntryId,
  getAllEntresByUserId,
  getEntries,
  insertEntry,
  updateEntry,
  deleteEntry,
}
