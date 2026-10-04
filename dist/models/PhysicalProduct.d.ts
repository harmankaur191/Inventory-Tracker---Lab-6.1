import Product from "./product.js";
export default class PhysicalProduct extends Product {
    protected weight: number;
    taxRate: number;
    constructor(sku: string, name: string, price: number, weight: number);
    getWeight(): string;
    displayDetails(): string;
    getPriceWithTax(): number;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map