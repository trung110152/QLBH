declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    getCate1: () => Promise<any>;
    save: (value: any) => Promise<any>;
    update: (id: any, newProduct: any) => Promise<"Can not find by id product" | "Can not update product" | "Updated product">;
    findById: (id: any) => Promise<any>;
    findByName: (search: any) => Promise<any>;
    remove: (id: any) => Promise<"Can not remove product" | "Removed product">;
}
declare const _default: ProductService;
export default _default;
