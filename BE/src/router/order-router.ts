import {Router} from "express";
import orderController from "../controller/OrderController";





export const orderRouter = Router();
orderRouter.get('/check-total/:idOrder', orderController.checkTotalPoint);
orderRouter.post('/addCart', orderController.addCart);
orderRouter.post('/addOrder', orderController.addOrder);
orderRouter.put('/editOrder/:id', orderController.editOrder);
orderRouter.get('/find-by-status/:idUser', orderController.findByStatus);


