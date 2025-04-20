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
router.get("/report/:id", getReportById);
router.post("/report", createReport);
router.put("/report/:id", updateReport);
router.delete("/report/:id", deleteReport);
router.get("/report/user/:userId", getReportByUserId);
router.get("/report/event/:eventId", getReportByEventId);
export default router;
