declare class CategoryService {
    private categoryRepository;
    private product_categoryRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (productCategory: any) => Promise<any>;
    remove: (idProduct: any) => Promise<any>;
}
declare const _default: CategoryService;
export default _default;
