import {Request, Response} from "express";
import orderService from "../service/OrderService";



class OrderController {
    private orderService;


    constructor() {
        this.orderService = orderService;

    }

    showCart = async (req: Request, res: Response)=>{
        try {
            let response = await this.orderService.showCart(req.params.idOrder);
            res.status(200).json(response)
        } catch (e){
            res.status(500).json(e.message)
        }

    }

    checkTotalPoint = async (req: Request, res: Response)=>{
        try {
            let response = await this.orderService.checkTotalPoint(req.params.idOrder);
            res.status(200).json(response)
        } catch (e){
            res.status(500).json(e.message)
        }

    }

    addCart = async (req: Request, res: Response)=>{
        try{
            let response = await this.orderService.saveCart(req.body);
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }

    addOrder = async (req: Request, res: Response)=>{
        try{
            let response = await this.orderService.save(req.body);
            res.status(200).json(response)
        } catch (e){
            res.status(500).json(e.message)
        }
    }

    editOrder = async (req: Request, res: Response) => {
        try{
            let id = req.params.id;
            let newOrder = req.body;
            let response = await this.orderService.updateOrder(id, newOrder);
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }

    findByStatus = async (req: Request, res: Response)=>{
        try{
            let idUser = req.params.idUser
            let response = await this.orderService.findByStatusOrder(idUser);
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }

    findById = async (req: Request, res: Response)=>{
        try{
            let idUser = req.params.idUser
            let response = await this.orderService.findById(idUser);
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }


}

export default new OrderController();