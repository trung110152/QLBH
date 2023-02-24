declare class OrderService {
    private orderRepository;
    private productOrderRepository;
    constructor();
    save: (order: any) => Promise<any>;
    update: (id: any, newOrder: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    findByStatus: (idUser: any) => Promise<any>;
    checkTotalPoint: (idOrder: any) => Promise<any>;
}
declare const _default: OrderService;
export default _default;
