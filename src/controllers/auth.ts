import { Request, Response } from 'express'
import { registerNewUser, loginUser } from '../services/auth'
import { handleHttp, httpErrors } from '../utils/error.handle'

const userRegistration = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(res, body)
    res.send(responseUser)
  } catch (e) {
    httpErrors(res, 400)
  }
}

const userLogin = async ({ body }: Request, res: Response) => {
  if (!body) httpErrors(res, 422)
  const { email, password } = body
  const responseUser = await loginUser(res, { email, password })
  res.send(responseUser)
}

export { userRegistration, userLogin }
