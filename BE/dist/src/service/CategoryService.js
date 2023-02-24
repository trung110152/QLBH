"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../model/category");
const data_source_1 = require("../data-source");
const product_category_1 = require("../model/product-category");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            let categories = await this.categoryRepository.find();
            return categories;
        };
        this.save = async (productCategory) => {
            return this.product_categoryRepository.save(productCategory);
        };
        this.remove = async (idProduct) => {
            let pc = await this.product_categoryRepository.findOneBy({ idProduct: idProduct });
            if (!pc) {
                return null;
            }
            return this.product_categoryRepository.delete({ idProduct: idProduct });
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(category_1.Category);
        this.product_categoryRepository = data_source_1.AppDataSource.getRepository(product_category_1.ProductCategory);
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=CategoryService.js.map