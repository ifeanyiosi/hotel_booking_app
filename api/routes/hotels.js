import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updatedHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//Create
router.post("/", createHotel);

//Update
router.put("/:id", updatedHotel);

//Delete
router.delete("/:id", deleteHotel);

export default router;

//Get
router.get("/:id", getHotel);

//Get All
router.get("/", async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
});
