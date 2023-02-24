"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../model/order");
const data_source_1 = require("../data-source");
const product_order_1 = require("../model/product-order");
class OrderService {
    constructor() {
        this.save = async (value) => {
            let order = this.orderRepository.save(value);
            if (!order) {
                return 'Can not save order';
            }
            return 'Saved order';
        };
        this.updateOrder = async (id, newOrder) => {
            let order = await this.orderRepository.findOneBy({ id: id });
            if (!order) {
                return 'Can not update order';
            }
            this.orderRepository.update({ id: id }, newOrder);
            return "Updated order";
        };
        this.findById = async (id) => {
            let order = await this.orderRepository.findOneBy({ id: id });
            if (!order) {
                return 'Can not find by id order';
            }
            return order;
        };
        this.findByStatusOrder = async (idUser) => {
            let sql = `select * from shop.order o where o.idUser = ${idUser} and  o.status = 'buying';`;
            let order = await this.orderRepository.query(sql);
            if (!order) {
                return 'Can not find by status order';
            }
            return order;
        };
        this.checkTotalPoint = async (idOrder) => {
            let sql = `SELECT SUM(total) as totalPoint  FROM product_order p WHERE p.idOrder = ${idOrder};`;
            let totalPoint = await this.productOrderRepository.query(sql);
            if (!totalPoint) {
                return "Can not check total point";
            }
            return totalPoint[0].totalPoint;
        };
        this.saveCart = async (values) => {
            let cart = this.productOrderRepository.save(values);
            if (!cart) {
                return 'Can not save cart';
            }
            return 'Saved cart';
        };
        this.orderRepository = data_source_1.AppDataSource.getRepository(order_1.Order);
        this.productOrderRepository = data_source_1.AppDataSource.getRepository(product_order_1.ProductOrder);
    }
}
exports.default = new OrderService();
//# sourceMappingURL=OrderService.js.map