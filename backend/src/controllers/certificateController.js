import { User } from "../models/User.js";
import { Certificate } from "../models/Certificates.js";
import { Event } from "../models/Events.js";
import { Topic } from "../models/Topics.js";
export const getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find()
      .populate("eventID", "title")
      .populate("userID", "name email")
      .populate("topicID", "title description category");
    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const getCertificateById = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id)
      .populate("eventID", "title")
      .populate("userID", "name email")
      .populate("topicID", "title description category");
    if (!certificate) return res.status(404).json({ message: "Certificate not found" });
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const createCertificate = async (req, res) => {
  const { eventID, userID, topicID } = req.body;
  try {
    const event = await Event.findById(eventID);
    if (!event) return res.status(404).json({ message: "Event not found" });
    const user = await User.findById(userID);
    if (!user) return res.status(404).json({ message: "User not found" });
    const topic = await Topic.findById(topicID);
    if (!topic) return res.status(404).json({ message: "Topic not found" });
    const newCertificate = new Certificate({ eventID, userID, topicID });
    await newCertificate.save();
    res.status(201).json(newCertificate);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  } 
}
export const updateCertificate = async (req, res) => {
  const { eventID, userID, topicID } = req.body;
  try {
    const certificate = await Certificate.findById(req.params.id);
    if (!certificate) return res.status(404).json({ message: "Certificate not found" });
    const event = await Event.findById(eventID);
    if (!event) return res.status(404).json({ message: "Event not found" });
    const user = await User.findById(userID);
    if (!user) return res.status(404).json({ message: "User not found" });
    const topic = await Topic.findById(topicID);
    if (!topic) return res.status(404).json({ message: "Topic not found" });
    certificate.eventID = eventID || certificate.eventID;
    certificate.userID = userID || certificate.userID;
    certificate.topicID = topicID || certificate.topicID;
    await certificate.save();
    res.status(200).json(certificate);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const deleteCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);
    if (!certificate) return res.status(404).json({ message: "Certificate not found" });
    await certificate.remove();
    res.status(200).json({ message: "Certificate deleted successfully" });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}