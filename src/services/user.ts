import { User } from '../interfaces/user.interface'
import UserModel from '../models/user'
import { encrypt } from '../utils/bcrypt.handle'

const update = async (id: string, data: User) => {
  if(data.password){
    const passHash = await encrypt(data.password)
    data.password = passHash
  }
  const responseItem = await UserModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  })
  return responseItem
}

const getAll = async () => {
  const responseItem = await UserModel.find({}, { password: 0 })
  return responseItem
}

const getUserById = async (id: string) => {
  const responseItem = await UserModel.findOne({_id: id}, { password: 0 })
  return responseItem
}

export { update, getAll, getUserById }
