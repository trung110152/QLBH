"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("../service/ProductService"));
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
class HomeController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let products = await ProductService_1.default.getAll();
                res.status(200).json(products);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findById = async (req, res) => {
            try {
                let id = req.params.id;
                let product = await this.productService.findById(id);
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.create = async (req, res) => {
            let a = req.body;
            let product = {
                content: a.content,
                status: a.status,
                image: a.image,
                date: a.date,
                user: a.user
            };
            let newBlog = await ProductService_1.default.save(product);
            let pc = {
                idBlog: newBlog.id,
                idCategory: a.idCategory
            };
            await CategoryService_1.default.save(pc);
            res.status(200).json('Success');
        };
        this.update = async (req, res) => {
            let id = req.params.id;
            let newBlog = req.body;
            await this.productService.update(id, newBlog);
            res.status(200).json('Success!');
        };
        this.remove = async (req, res) => {
            let id = req.params.id;
            await this.productService.remove(id);
            await this.categoryService.remove(id);
            res.status(200).json('Success!');
        };
        this.search = async (req, res) => {
            let search = req.query.name;
            let blogs = await ProductService_1.default.findByName(search);
            res.status(200).json(blogs);
        };
        this.getCategories = async (req, res) => {
            try {
                let categories = await CategoryService_1.default.getAll();
                res.status(200).json(categories);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.productService = ProductService_1.default;
        this.categoryService = CategoryService_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=HomeController.js.map