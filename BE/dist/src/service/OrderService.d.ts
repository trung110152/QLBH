declare class OrderService {
    private orderRepository;
    private productOrderRepository;
    constructor();
    showCart: (id: any) => Promise<any>;
    save: (value: any) => Promise<"Can not save order" | "Saved order">;
    updateOrder: (id: any, newOrder: any) => Promise<"Can not update order" | "Updated order">;
    findById: (id: any) => Promise<any>;
    findByStatusOrder: (idUser: any) => Promise<any>;
    checkTotalPoint: (idOrder: any) => Promise<any>;
    saveCart: (values: any) => Promise<"Can not save cart" | "Saved cart">;
}
declare const _default: OrderService;
export default _default;
