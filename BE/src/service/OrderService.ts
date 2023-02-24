
import {Order} from "../model/order";
import {AppDataSource} from "../data-source";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {ProductOrder} from "../model/product-order";

class OrderService {
    private orderRepository;
    private productOrderRepository
    constructor() {
        this.orderRepository = AppDataSource.getRepository(Order)
        this.productOrderRepository = AppDataSource.getRepository(ProductOrder)
    }

    save = async (order) => {
        return  this.orderRepository.save(order);
    }

    update = async (id, newOrder)=>{
        let order = await this.orderRepository.findOneBy({id:id});
        if(!order){
            return null;
        }
        return this.orderRepository.update({id: id}, newOrder);
    }


    findById = async (id)=> {
        let order = await this.orderRepository.findOneBy({id:id});
        if(!order){
            return null;
        }
        return order;
    }

    findByStatus = async (idUser)=> {

        let sql =`select * from shop.order o where o.idUser = ${idUser} and  o.status = 'buying';`
        let order = await this.orderRepository.query(sql);
        if(!order){
            return null;
        }
        return order;
    }

    checkTotalPoint = async (idOrder) =>{
        let sql = `SELECT SUM(total) as totalPoint  FROM product_order p WHERE p.idOrder = ${idOrder};`;
        let totalPoint = await this.productOrderRepository.query(sql)
        if(!totalPoint){
            return null
        }
        return totalPoint[0].totalPoint;
    }


}

export default new OrderService();