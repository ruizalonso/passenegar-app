import { Schema, Types, model, Model } from 'mongoose'
import { User } from '../interfaces/user.interface'

const UserSchema = new Schema<User>(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const UserModel = model('user', UserSchema)
export default UserModel
