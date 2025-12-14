import e, {Router} from "express";
import RoomController from "../controllers/RoomController";

const router = Router();
const roomController = new RoomController();
router.get("/", roomController.getAllRooms);
router.post("/", roomController.createRoom);    

export default router;