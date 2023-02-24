
import {Category} from "../model/category";
import {AppDataSource} from "../data-source";
import {ProductCategory} from "../model/product-category";

class CategoryService {
    private categoryRepository
    private product_categoryRepository
    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category);
        this.product_categoryRepository = AppDataSource.getRepository(ProductCategory)
    }

    getAll = async () => {
        let categories = await this.categoryRepository.find();
        return categories;
    }


    save = async (productCategory) => {
        return  this.product_categoryRepository.save(productCategory);
    }

    remove = async (idProduct)=> {
        let pc = await this.product_categoryRepository.findOneBy({idProduct:idProduct});
        if(!pc){
            return null;
        }
        return  this.product_categoryRepository.delete({idProduct: idProduct});
    }


}

export default new CategoryService();