import Product from "../models/product.js";

export function calculateTax(product: Product):number {
    
    return product.getPriceWithTax();

}