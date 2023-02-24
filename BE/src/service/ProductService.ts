import {Product} from "../model/product";
import {AppDataSource} from "../data-source";

class ProductService {
    private productRepository
    constructor() {
        this.productRepository = AppDataSource.getRepository(Product)
    }

    getAll = async () => {
        let sql =`select p.id, p.name, p.price, p.description, p.totalQuantity, p.image, c.name as nameCategory from product_category pc join product p on pc.idProduct = p.id join category c on pc.idCategory = c.id`;
        let products = await this.productRepository.query(sql);
        return products;
    }


    save = async (product) => {
        return  this.productRepository.save(product);
    }

    update = async (id, newProduct)=>{
        let product = await this.productRepository.findOneBy({id:id});
        if(!product){
            return null;
        }
        return this.productRepository.update({id: id}, newProduct);
    }

    findById = async (id)=> {
        let product = await this.productRepository.findOneBy({id:id});
        if(!product){
            return null;
        }
        return product;
    }

    findByName = async (search)=> {

        let sql =`select p.id, p.name, p.price, p.description, p.totalQuantity, p.image, c.name as nameCategory from product_category pc join product p on pc.idProduct = p.id join category c on pc.idCategory = c.id where p.name like '%${search}%'`;
        let product = await this.productRepository.query(sql);
        if(!product){
            return null;
        }
        return product;
    }


    remove = async (id)=> {
        let product = await this.productRepository.findOneBy({id:id});
        if(!product){
            return null;
        }
        return  this.productRepository.delete({id: id});
    }
}

export default new ProductService();