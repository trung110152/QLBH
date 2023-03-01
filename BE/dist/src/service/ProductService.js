"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let sql = `select p.id, p.name, p.price, p.description, p.totalQuantity, p.image, c.name as nameCategory
                  from product_category pc
                           join product p on pc.idProduct = p.id
                           join category c on pc.idCategory = c.id`;
            let products = await this.productRepository.query(sql);
            if (!products) {
                return 'Can not get products';
            }
            return products;
        };
        this.save = async (value) => {
            let product = this.productRepository.save(value);
            if (!product) {
                return "Can not save product";
            }
            return product;
        };
        this.update = async (id, newProduct) => {
            let product1 = await this.productRepository.findOneBy({ id: id });
            if (!product1) {
                return "Can not find by id product";
            }
            let product2 = this.productRepository.update({ id: id }, newProduct);
            if (!product2) {
                return "Can not update product";
            }
            return 'Updated product';
        };
        this.findById = async (id) => {
            let sql = `select p.id, p.name, p.price, p.description, p.totalQuantity, p.image, c.name as nameCategory
                  from product_category pc
                           join product p on pc.idProduct = p.id
                           join category c on pc.idCategory = c.id where p.id = ${id}`;
            let product = await this.productRepository.query(sql);
            if (!product) {
                return "Can not find by id product";
            }
            return product;
        };
        this.findByName = async (search) => {
            let sql = `select p.id, p.name, p.price, p.description, p.totalQuantity, p.image, c.name as nameCategory from product_category pc join product p on pc.idProduct = p.id join category c on pc.idCategory = c.id where c.name like '%${search}%'`;
            let product = await this.productRepository.query(sql);
            if (!product) {
                return "Can not find by name";
            }
            return product;
        };
        this.remove = async (id) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return 'Can not remove product';
            }
            this.productRepository.delete({ id: id });
            return 'Removed product';
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=ProductService.js.map