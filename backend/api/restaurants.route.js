import express from "express";
import RestaurantController from "./restaurants.controller.js";

const router = express.Router();

//router.route("/").get((req, res) => res.send("Server Test"));
router.route("/").get(RestaurantController.apiGetRestaurants);

export default router;
