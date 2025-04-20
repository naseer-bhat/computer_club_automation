import { Topic } from "../models/Topics.js";
import { Event } from "../models/Events.js";
export const getTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}   
export const getTopicById = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id).populate("eventID", "title");
    if (!topic) return res.status(404).json({ message: "Topic not found" });  
    res.status(200).json(topic);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const createTopic = async (req, res) => {
  const { title, description, category, eventID } = req.body;
  try {
    const event = await Event.findById(eventID);
    if (!event) return res.status(404).json({ message: "Event not found" });
    const newTopic = new Topic({ title, description, category, eventID });
    await newTopic.save();
    res.status(201).json(newTopic);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const updateTopic = async (req, res) => {
  const { title, description, category, eventID } = req.body;
  try {
    const topic = await Topic.findById(req.params.id);
    if (!topic) return res.status(404).json({ message: "Topic not found" });
    const event = await Event.findById(eventID);
    if (!event) return res.status(404).json({ message: "Event not found" });
    topic.title = title || topic.title;
    topic.description = description || topic.description;
    topic.category = category || topic.category;
    topic.eventID = eventID || topic.eventID;
    await topic.save();
    res.status(200).json(topic);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const deleteTopic = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    if (!topic) return res.status(404).json({ message: "Topic not found" });
    await topic.remove();
    res.status(200).json({ message: "Topic deleted successfully" });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}