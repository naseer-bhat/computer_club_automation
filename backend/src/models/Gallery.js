import { schema, model } from "mongoose";
const GallerySchema = new schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  eventID: { type: schema.Types.ObjectId, ref: "Event", required: true },
  dateCreated: { type: Date, default: Date.now },
});
export const Gallery = model("Gallery", GallerySchema);
