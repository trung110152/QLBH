import {Request, Response} from "express";
import orderService from "../service/OrderService";


class OrderController {
    private orderService;

    constructor() {
        this.orderService = orderService;
    }

    checkTotalPoint = async (req: Request, res: Response)=>{
        let response = await this.orderService.checkTotalPoint(req.params.idOrder);
        res.status(200).json(response)
    }


}

export default new OrderController();