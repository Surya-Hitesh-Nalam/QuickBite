import express from "express"
import {isAuthenticated} from "../middlewares/isAuthenticated";
import { createCheckoutSession, getOrders } from "../controllers/order.controller";
const router = express.Router();


const asyncHandler = (fn: any) => (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    Promise.resolve(fn(req, res, next)).catch(next);
}


router.route("/").get(asyncHandler(isAuthenticated), asyncHandler(getOrders));
router.route("/checkout/create-checkout-session").post(asyncHandler(isAuthenticated), asyncHandler(createCheckoutSession));
//router.route("/webhook").post(express.raw({type: 'application/json'}), asyncHandler(stripeWebhook));

export default router;