"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get('/', HomeController_1.default.getAll);
exports.productRouter.post('/', HomeController_1.default.create);
exports.productRouter.put('/:id', HomeController_1.default.update);
exports.productRouter.delete('/:id', HomeController_1.default.remove);
exports.productRouter.get('/findById/:id', HomeController_1.default.findById);
exports.productRouter.get('/getCategories', HomeController_1.default.getCategories);
exports.productRouter.get('/search/findByName', HomeController_1.default.search);
//# sourceMappingURL=product-router.js.map