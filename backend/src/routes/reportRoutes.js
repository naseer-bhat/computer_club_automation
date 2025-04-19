import { Router } from "express";
const router = Router();
import {
  getReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
  getReportCardByEventId,
  getReportCardByUserId,
} from "../controllers/reportController.js";
router.get("/allreports", getReports);
router.get("/report/:id", getReportById);
router.post("/report", createReport);
router.put("/report/:id", updateReport);
router.delete("/report/:id", deleteReport);
router.get("/report/user/:userId", getReportCardByUserId);
router.get("/report/event/:eventId", getReportCardByEventId);
export default router;
