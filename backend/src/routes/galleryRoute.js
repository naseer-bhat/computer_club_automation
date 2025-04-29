import { Router } from "express";
import authorizeRoles from "../middlewares/authorizeRoles.js";
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
router.get("/gallerybyid/:id", getGalleryById);
router.post("/addgallery",authorizeRoles('admin'), createGallery);
router.put("/updategallery/:id",authorizeRoles('admin'), updateGallery);
router.delete("/deletegallery/:id",authorizeRoles('admin'), deleteGallery);
router.get("/gallery/event/:eventId", getGalleryByEventId);
export default router;
