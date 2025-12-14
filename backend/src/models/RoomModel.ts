import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomNumber: String,
    capacity: Number,
    floor: Number, 
    chargesPerNight: Number,
})

const Room = mongoose.model("Room", roomSchema);

export default Room;