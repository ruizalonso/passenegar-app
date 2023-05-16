import { Schema, Types, model, Model } from 'mongoose'
import { Rol } from '../interfaces/rol.interface'

const RolSchema = new Schema<Rol>(
  {
    rolId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
      default: 'user',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const RolModel = model('rol', RolSchema)
export default RolModel
