import { Auth } from '../interfaces/auth.interface'
import { User } from '../interfaces/user.interface'
import UserModel from '../models/user'
import { encrypt, verified } from '../utils/bcrypt.handle'
import { httpErrors } from '../utils/error.handle'
import { generateToken } from '../utils/jwt.handle'
import { Request, Response } from 'express'

const registerNewUser = async (
  res: Response,
  { email, password, name }: User
) => {
  const checkIs = await UserModel.findOne({ email })
  if (checkIs) return httpErrors(res, 400, 'This email is already in use')
  const passHash = await encrypt(password)
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  })
  return registerNewUser
}

const loginUser = async (res: Response, { email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email })
  if (!checkIs) return httpErrors(res, 404, 'User not found')

  const passwordHash = checkIs.password
  const isCorrect = await verified(password, passwordHash)

  if (!isCorrect) return httpErrors(res, 404, 'Incorrect password')

  const token = generateToken(checkIs._id)

  const { name, status, _id } = checkIs
  const data = {
    token,
    _id,
    name,
    status,
  }
  return data
}

export { registerNewUser, loginUser }
