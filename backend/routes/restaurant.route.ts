import express from "express"
import upload from "../middlewares/multer";
import {isAuthenticated} from "../middlewares/isAuthenticated";
import { createRestaurant, getRestaurant, getRestaurantOrder, getSingleRestaurant, searchRestaurant, updateOrderStatus, updateRestaurant } from "../controllers/restaurant.controller";

const router = express.Router();

const asyncHandler = (fn: any) => (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    Promise.resolve(fn(req, res, next)).catch(next);
}

router.route("/").post(asyncHandler(isAuthenticated), upload.single("imageFile"), asyncHandler(createRestaurant));
router.route("/").get(asyncHandler(isAuthenticated), asyncHandler(getRestaurant));
router.route("/").put(asyncHandler(isAuthenticated), upload.single("imageFile"), asyncHandler(updateRestaurant));
router.route("/order").get(asyncHandler(isAuthenticated), asyncHandler(getRestaurantOrder));
router.route("/order/:orderId/status").put(asyncHandler(isAuthenticated), asyncHandler(updateOrderStatus));
router.route("/search/:searchText").get(asyncHandler(isAuthenticated), asyncHandler(searchRestaurant));
router.route("/:id").get(asyncHandler(isAuthenticated), asyncHandler(getSingleRestaurant));

export default router;


