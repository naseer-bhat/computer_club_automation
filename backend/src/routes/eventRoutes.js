import { Router } from "express";
const router = Router();
import { getEvents, getEventById, createEvent, updateEvent, deleteEvent } from "../controllers/eventController.js";   
router.get("/allevents", getEvents);
router.get("/event/:id", getEventById); 
router.post("/event", createEvent);
router.put("/event/:id", updateEvent);  
router.delete("/event/:id", deleteEvent);
export default router;
