import { Schema, model } from "mongoose";
const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true, maxlength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true, minlength: 8 },
  phone: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10,
  },
  role: {
    type: String,
    enum: ["admin", "coordinator", "participant"],
    default: "participant",
  },
});
export  const User = model("User", UserSchema);
