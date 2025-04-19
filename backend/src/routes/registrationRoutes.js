import { Router } from "express";
const router = Router();
import { getRegistrations, getRegistrationById, createRegistration, updateRegistration, deleteRegistration } from "../controllers/registrationController.js";
router.get("/allregistrations", getRegistrations);
router.get("/registration/:id", getRegistrationById);
router.post("/registration", createRegistration);
router.put("/registration/:id", updateRegistration);
router.delete("/registration/:id", deleteRegistration);
export default router;