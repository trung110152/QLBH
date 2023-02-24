import {Request, Response} from "express";
import productService from "../service/ProductService";
import categoryService from "../service/CategoryService";
class HomeController {
    private productService;
    private categoryService;

    constructor() {
        this.productService = productService;
        this.categoryService = categoryService;
    }

    getAll = async (req: Request, res: Response) => {
        try{
            let products = await productService.getAll();
            res.status(200).json(products)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }


    findById = async (req: Request, res: Response) => {
        try{
            let id = req.params.id
            let product = await this.productService.findById(id);
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    create = async (req: Request, res: Response) => {
        let a = req.body;
        let product = {
            content : a.content,
            status : a.status,
            image : a.image,
            date: a.date,
            user: a.user
        };
        let newBlog = await productService.save(product);
        let pc = {
            idBlog: newBlog.id,
            idCategory: a.idCategory
        };
        await categoryService.save(pc);
        res.status(200).json('Success');
    }



    update = async (req: Request, res: Response) => {
        let id = req.params.id;
        let newBlog = req.body;
        await this.productService.update(id, newBlog);
        res.status(200).json('Success!')
    }


    remove = async (req: Request, res: Response) => {
        let id = req.params.id;
        await this.productService.remove(id);
        await this.categoryService.remove(id)
        res.status(200).json('Success!')

    }

    search = async (req: Request, res: Response) => {
        let search = req.query.name;
        let blogs = await productService.findByName(search);
        res.status(200).json(blogs)
    }




    getCategories = async (req: Request, res: Response) => {
        try{
            let categories = await categoryService.getAll();
            res.status(200).json(categories)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new HomeController();