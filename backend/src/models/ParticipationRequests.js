import { Schema, model } from "mongoose";
const ParticipationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  eventId: { type: Schema.Types.ObjectId, ref: "Event", required: true },
  topocId: { type: Schema.Types.ObjectId, ref: "Topic", required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});
export const ParticipationRequest = model(
  "ParticipationRequest",
  ParticipationSchema
);
