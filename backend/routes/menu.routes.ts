import express from "express" 
import upload from "../middlewares/multer";
import {isAuthenticated} from "../middlewares/isAuthenticated";
import { addMenu, editMenu } from "../controllers/menu.controller";

const router = express.Router();
const asyncHandler = (fn: any) => (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    Promise.resolve(fn(req, res, next)).catch(next);
}


router.route("/").post(asyncHandler(isAuthenticated), upload.single("image"), asyncHandler(addMenu));
router.route("/:id").put(asyncHandler(isAuthenticated), upload.single("image"), asyncHandler(editMenu));
 
export default router;


