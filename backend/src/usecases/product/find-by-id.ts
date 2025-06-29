import { Product } from "../../domain/product";
import { ProductModel } from "../../models/product";

// Caso de uso: buscar produto por id
export async function findProductByIdUseCase(id: string): Promise<Product | null> {
    const product = await ProductModel.findOne({ id, deleted: 0 }).lean();

    if (!product) {
        return null;
    }

    if (product.images.length === 0) {
        product.images = ["https://placehold.co/600x400/gray/white"];
    }
    

    const result: Product = { ...product };

    return result;
}