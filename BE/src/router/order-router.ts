import {Router} from "express";
import orderController from "../controller/OrderController";





export const orderRouter = Router();
orderRouter.get('/check-total/:idOrder', orderController.checkTotalPoint);
