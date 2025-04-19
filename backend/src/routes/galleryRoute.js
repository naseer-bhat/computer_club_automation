import { Router } from "express";
const router = Router();
import {
  getGallery,
  getGalleryById,
  createGallery,
  updateGallery,
  deleteGallery,
  getGalleryByEventId,
} from "../controllers/galleryController.js";

router.get("/allgalleries", getGallery);
router.get("/gallery/:id", getGalleryById);
router.post("/gallery", createGallery);
router.put("/gallery/:id", updateGallery);
router.delete("/gallery/:id", deleteGallery);
router.get("/gallery/event/:eventId", getGalleryByEventId);
export default router;
