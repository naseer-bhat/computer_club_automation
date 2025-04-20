
import {Participant} from "../models/ParticipationRequests.js";
import {User} from "../models/User.js";
import { Event } from "../models/Events.js";
export const getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find().populate("eventID", "title").populate("userID", "name email");
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
} 
export const getRegistrationById = async (req, res) => {
  try {
    const registration = await Participant.findById(req.params.id).populate("eventID", "title").populate("userID", "name email");
    if (!registration) return res.status(404).json({ message: "Registration not found" });
    res.status(200).json(registration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const createRegistration = async (req, res) => {
  const { eventID, userID } = req.body;
  try {
    const event = await Event.findById(eventID);
    if (!event) return res.status(404).json({ message: "Event not found" });
    const user = await User.findById(userID);
    if (!user) return res.status(404).json({ message: "User not found" });  
    const newRegistration = new Participant({ eventID, userID });
    await newRegistration.save();
    res.status(201).json(newRegistration);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
} 
export const updateRegistration = async (req, res) => {
  const { eventID, userID } = req.body;
  try {
    const registration = await Participant.findById(req.params.id);
    if (!registration) return res.status(404).json({ message: "Registration not found" });
    const event = await Event.findById(eventID);
    if (!event) return res.status(404).json({ message: "Event not found" });
    const user = await User.findById(userID);
    if (!user) return res.status(404).json({ message: "User not found" });
    registration.eventId = eventID || registration.eventId;
    registration.userId = userID || registration.userId;
    await registration.save();
    res.status(200).json(registration);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const deleteRegistration = async (req, res) => {
  try {
    const registration = await Participant.findById(req.params.id);
    if (!registration) return res.status(404).json({ message: "Registration not found" });
    await registration.remove();
    res.status(200).json({ message: "Registration deleted successfully" });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
} 