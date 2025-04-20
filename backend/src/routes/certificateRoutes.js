import { Router } from "express";
import { getAllCertificates, getCertificateById, createCertificate, updateCertificate, deleteCertificate } from "../controllers/certificateController.js";
const router = Router();
router.get("/allcertificates", getAllCertificates);
router.get("/certificate/:id", getCertificateById);
router.post("/certificate", createCertificate);
router.put("/certificate/:id", updateCertificate);
router.delete("/certificate/:id", deleteCertificate);
export default router;