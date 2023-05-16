import { Entry } from '../interfaces/entry.interface'
import EntryModel from '../models/entry'

const insert = async (item: Entry) => {
  const responseInsert = await EntryModel.create(item)
  return responseInsert
}

const getAll = async () => {
  const responseItem = await EntryModel.find({})
  return responseItem
}

const get = async (id: string) => {
  const responseItem = await EntryModel.findOne({ _id: id })
  return responseItem
}

const getByUserId = async (id: string) => {
  const responseItem = await EntryModel.find({ user: id })
  return responseItem
}

const update = async (id: string, data: Entry) => {
  const responseItem = await EntryModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  })
  return responseItem
}

const deleteOne = async (id: string) => {
  const responseItem = await EntryModel.remove({ _id: id })
  return responseItem
}

export { insert, getAll, get, getByUserId, update, deleteOne }
