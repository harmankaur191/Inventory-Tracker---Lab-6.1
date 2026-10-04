import Product from "../models/product.js";

export function sortProducts(products: Product[],sortBy:"name" | "price"): Product[] {
   return products.sort((a, b) => {
        if(sortBy === "price"){
            return a.price - b.price;
        }else{
            return a.name.localeCompare(b.name);
        }

    });
}