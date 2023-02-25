"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderService_1 = __importDefault(require("../service/OrderService"));
class OrderController {
    constructor() {
        this.checkTotalPoint = async (req, res) => {
            try {
                let response = await this.orderService.checkTotalPoint(req.params.idOrder);
                res.status(200).json(response);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.addCart = async (req, res) => {
            try {
                let response = await this.orderService.saveCart(req.body);
                res.status(200).json(response);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.addOrder = async (req, res) => {
            try {
                let response = await this.orderService.save(req.body);
                res.status(200).json(response);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.editOrder = async (req, res) => {
            try {
                let id = req.params.id;
                let newOrder = req.body;
                let response = await this.orderService.updateOrder(id, newOrder);
                res.status(200).json(response);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findByStatus = async (req, res) => {
            try {
                let idUser = req.params.idUser;
                let response = await this.orderService.findByStatusOrder(idUser);
                res.status(200).json(response);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.orderService = OrderService_1.default;
    }
}
exports.default = new OrderController();
//# sourceMappingURL=OrderController.js.map