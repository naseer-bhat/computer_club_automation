import { Router } from "express";
import authenticateToken from "../middlewares/authenticateToken.js";
import authorizeRoles from "../middlewares/authorizeRoles.js";

import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoute.js";
import certificateRoutes from "./certificateRoutes.js";
import eventRoutes from "./eventRoutes.js";
import galleryRoutes from "./galleryRoute.js";
import registrationRoutes from "./registrationRoutes.js";
import reportRoutes from "./reportRoutes.js";
import topicRoutes from "./topicRoutes.js";

const router = Router();
router.use("/auth", authRoutes);
router.use(authenticateToken);
router.use("/user", authorizeRoles('admin', 'participant'), userRoutes);
router.use("/certificate", authorizeRoles('admin','participant'), certificateRoutes);
router.use("/event", authorizeRoles('admin', 'participant'), eventRoutes);
router.use("/gallery", galleryRoutes); 
router.use("/registration", registrationRoutes); 
router.use("/report", authorizeRoles('admin'), reportRoutes);
router.use("/topic", topicRoutes);

export default router;
