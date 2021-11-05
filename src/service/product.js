import { db } from '../db/db';

class ProductService {
    async createProduct(productDto) {
        const { name, price, description, thumbnail, assets, specifications } =
            productDto;
        const [id] = await db('products')
            .insert({
                assets,
                description,
                name,
                price,
                specifications,
                thumbnail,
            })
            .returning('id');

        return id;
    }
}

export const productService = new ProductService();
