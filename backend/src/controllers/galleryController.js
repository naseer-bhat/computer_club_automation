import { Gallery } from "../models/Gallery.js";
import { Event } from "../models/Event.js";
export const getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find();
    if (!gallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createGallery = async (req, res) => {
  const { eventId, imageUrl, title } = req.body;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    const newGallery = new Gallery({
      eventId,
      imageUrl,
      title,
    });
    await newGallery.save();
    res.status(201).json(newGallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateGallery = async (req, res) => {
  const { id } = req.params;
  const { eventId, imageUrl, title } = req.body;
  try {
    const gallery = await Gallery.findById(id);
    if (!gallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    gallery.eventId = eventId;
    gallery.imageUrl = imageUrl;
    gallery.title = title;
    await gallery.save();
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteGallery = async (req, res) => {
  const { id } = req.params;
  try {
    const gallery = await Gallery.findById(id);
    if (!gallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }
    await gallery.remove();
    res.status(200).json({ message: "Gallery deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getGalleryByEventId = async (req, res) => {
  const { eventId } = req.params;
  try {
    const gallery = await Gallery.find({ eventId });
    if (!gallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getGalleryById = async (req, res) => {
  const { id } = req.params;
  try {
    const gallery = await Gallery.findById(id);
    if (!gallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};