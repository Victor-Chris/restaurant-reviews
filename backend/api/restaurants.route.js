import express from "express";
import ReviewsController from "./reviews.controller.js";
import RestaurantController from "./restaurants.controller.js";

const router = express.Router();

//router.route("/").get((req, res) => res.send("Server Test"));
router.route("/").get(RestaurantController.apiGetRestaurants);
router.route("/id/:id").get(RestaurantController.apiGetRestaurantById);
router.route("/cuisines").get(RestaurantController.apiGetRestaurantCuisines);

router
  .route("/review")
  .post(ReviewsController.apiPostReview)
  .put(ReviewsController.apiUpdateReview)
  .delete(ReviewsController.apiDeleteReview);

export default router;
