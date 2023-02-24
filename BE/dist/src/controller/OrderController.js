"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderService_1 = __importDefault(require("../service/OrderService"));
class OrderController {
    constructor() {
        this.checkTotalPoint = async (req, res) => {
            let response = await this.orderService.checkTotalPoint(req.params.idOrder);
            res.status(200).json(response);
        };
        this.orderService = OrderService_1.default;
    }
}
exports.default = new OrderController();
//# sourceMappingURL=OrderController.js.map