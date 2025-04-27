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
router.get("/gallery/:id", getGalleryById);
router.post("/gallery",authorizeRoles('admin'), createGallery);
router.put("/gallery/:id",authorizeRoles('admin'), updateGallery);
router.delete("/gallery/:id",authorizeRoles('admin'), deleteGallery);
router.get("/gallery/event/:eventId", getGalleryByEventId);
export default router;
