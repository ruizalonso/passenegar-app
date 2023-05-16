import { Schema, Types, model } from "mongoose";
import { Entry } from "../interfaces/entry.interface";

const EntrySchema = new Schema<Entry>(
  {
    user: {
      type: Types.ObjectId,
      ref: 'user',
    },
    entryName: {
      type: String,
      required: true,
    },
    entryDescription: {
      type: String,
    },
    entryValue: {
      type: String,
      required: true
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const EntryModel = model("entry", EntrySchema);
export default EntryModel;
