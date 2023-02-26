import {Router} from "express";
import homeController from "../controller/HomeController";

export const productRouter = Router();

productRouter.get('/', homeController.getAll);
productRouter.post('/', homeController.create);
productRouter.put('/:id', homeController.update);
productRouter.delete('/:id', homeController.remove);
productRouter.get('/findById/:id', homeController.findById);
productRouter.get('/getCategories', homeController.getCategories);
productRouter.get('/search/findByName', homeController.search);


