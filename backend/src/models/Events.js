import { Schema, model } from "mongoose";
const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  startDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ["upcoming", "ongoing", "cancelled", "completed"],
    default: "upcoming",
  },
});
export const Event = model("Event", EventSchema);
