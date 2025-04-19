import { Schema, model } from "mongoose";
const GallerySchema = new Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  eventId: { type: Schema.Types.ObjectId, ref: "Event", required: true },
});
export const Gallery = model("Gallery", GallerySchema);
