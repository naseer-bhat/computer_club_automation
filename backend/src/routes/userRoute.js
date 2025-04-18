import { Router } from "express";
import { getUsers ,getUserById,createUser,updateUser,deleteUser} from "../controllers/userController.js";
const router = Router();
router.get("/allusers", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", createUser);  
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
export default router;
