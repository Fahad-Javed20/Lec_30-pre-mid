import Room from "../models/RoomModel";
import {Request, Response} from "express";  

class RoomController {
    async getAllRooms(req: Request, res: Response) {
        Room.find()
            .then((rooms) => res.json(rooms))
            .catch((err) => res.status(500).json({ error: err.message }));
    }   
    async createRoom(req: Request, res: Response) {
        const newRoom = new Room(req.body);
        newRoom.save()
            .then((room) => res.status(201).json(room))
            .catch((err) => res.status(400).json({ error: err.message }));
    }   

}

export default RoomController;