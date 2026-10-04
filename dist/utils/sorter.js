import Product from "../models/product.js";
export function sortProducts(products, sortBy) {
    return products.sort((a, b) => {
        if (sortBy === "price") {
            return a.price - b.price;
        }
        else {
            return a.name.localeCompare(b.name);
        }
    });
}
//# sourceMappingURL=sorter.js.map