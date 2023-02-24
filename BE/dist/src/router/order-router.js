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
//# sourceMappingURL=order-router.js.map