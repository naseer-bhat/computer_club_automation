import { Router } from "express";
const router = Router();
import {
  getReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
  getReportByEventId,
  getReportByUserId,
} from "../controllers/reportController.js";
router.get("/allreports", getReports);
router.get("/reportbyid/:id", getReportById);
router.post("/addreport", createReport);
router.put("/updatereport/:id", updateReport);
router.delete("/deletereport/:id", deleteReport);
router.get("/getreport/user/:userId", getReportByUserId);
router.get("/getreport/event/:eventId", getReportByEventId);
export default router;
