import { Schema, model } from "mongoose";
const TopicSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  eventID: { type: Schema.Types.ObjectId, ref: "Event", required: true },   
});
export const Topic = model("Topic", TopicSchema);