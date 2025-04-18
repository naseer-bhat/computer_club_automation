import { Schema,model } from "mongoose";
const CertificateSchema = new Schema({
  eventID: { type: Schema.Types.ObjectId, ref: "Event", required: true },
  userID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  topicID: { type: Schema.Types.ObjectId, ref: "Topic", required: true },
  certificateNumber: { type: String, required: true },
  dateIssued: { type: Date, default: Date.now },
});
export const Certificate = model("Certificate", CertificateSchema);