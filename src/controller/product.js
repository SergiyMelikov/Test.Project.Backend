import { productService } from '../service/product';
// TODO
// err response
// CRUD for product
// read multiple products endpoint pagenated(skip - take)

class ProductController {
    async createProduct(req, res) {
        try {
            const id = await productService.createProduct(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error(err);
        }
    }
}

export const productController = new ProductController();
