import { Schema,model } from "mongoose";
const ReportCardSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Participant",
    required: true,
  },
  eventId: { type: Schema.Types.ObjectId, ref: "Event", required: true },
 score: { type:Number, required: true },
  remarks: { type: String, required: true },
});
export const ReportCard = model("ReportCard", ReportCardSchema);