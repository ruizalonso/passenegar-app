import { Request, Response } from 'express'
import { update, getAll, getUserById } from '../services/user'
import { handleHttp, httpErrors } from '../utils/error.handle'

const updateUser = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await update(id, body)
    res.send(response)
  } catch (e) {
    httpErrors(res, 400)
  }
}

const getUsers = async (req: Request, res: Response) => {
  try {
    const response = await getAll()
    res.send(response)
  } catch (e) {
    httpErrors(res, 400)
  }
}

const getUser = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.auth
    const response = await getUserById(id)
    res.send(response)
  } catch (e) {
    httpErrors(res, 400)
  }
}

const updateItem = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_BLOG')
  }
}

const postItem = async ({ body }: Request, res: Response) => {
  try {
    res.send(body)
  } catch (e) {
    handleHttp(res, 'ERROR_POST_BLOG')
  }
}

const deleteItem = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_BLOG')
  }
}

export { updateUser, getUsers, getUser, postItem, updateItem, deleteItem }
