import { Router } from "express";
import { getTopics, getTopicById, createTopic, updateTopic, deleteTopic } from "../controllers/topicController.js"; 
const router = Router();
router.get("/alltopics", getTopics);
router.get("/topic/:id", getTopicById);
router.post("/topic", createTopic);
router.put("/topic/:id", updateTopic);
router.delete("/topic/:id", deleteTopic);
export default router;