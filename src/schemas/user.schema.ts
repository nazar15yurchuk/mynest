import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    status: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);
