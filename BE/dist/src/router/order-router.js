"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const OrderController_1 = __importDefault(require("../controller/OrderController"));
exports.orderRouter = (0, express_1.Router)();
exports.orderRouter.get('/check-total/:idOrder', OrderController_1.default.checkTotalPoint);
exports.orderRouter.post('/addCart', OrderController_1.default.addCart);
exports.orderRouter.post('/addOrder', OrderController_1.default.addOrder);
exports.orderRouter.put('/editOrder/:id', OrderController_1.default.editOrder);
exports.orderRouter.get('/find-by-status/:idUser', OrderController_1.default.findByStatus);
//# sourceMappingURL=order-router.js.map