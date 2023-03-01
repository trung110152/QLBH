import { Request, Response } from "express";
declare class OrderController {
    private orderService;
    constructor();
    showCart: (req: Request, res: Response) => Promise<void>;
    checkTotalPoint: (req: Request, res: Response) => Promise<void>;
    addCart: (req: Request, res: Response) => Promise<void>;
    addOrder: (req: Request, res: Response) => Promise<void>;
    editOrder: (req: Request, res: Response) => Promise<void>;
    findByStatus: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
}
declare const _default: OrderController;
export default _default;
