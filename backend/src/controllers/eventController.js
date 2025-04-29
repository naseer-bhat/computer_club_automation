import { Event } from "../models/Events.js";
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    return res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    return res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createEvent = async (req, res) => {
  try {
    let { title, description, category, startDate, status } = req.body;
    if (!title || !description || !category || !startDate) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Normalize the date to remove timezone offset
    startDate = new Date(startDate);
    startDate = new Date(
      Date.UTC(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
      )
    );

    const event = new Event({
      title,
      description,
      category,
      startDate,
      status: status || "upcoming",
    });
    await event.save();
    return res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateEvent = async (req, res) => {
  try {
    const { title, description, category, startDate, status } = req.body;
    if (!title || !description || !category || !startDate) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { title, description, category, startDate, status },
      { new: true }
    );
    if (!event) return res.status(404).json({ message: "Event not found" });
    return res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
