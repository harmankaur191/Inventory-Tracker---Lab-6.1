import Product from "./product.js";
export default class PhysicalProduct extends Product {
    protected weight: number;
    quantity: number;
    taxRate: number;
    constructor(sku: string, name: string, price: number, weight: number, quantity: number);
    getWeight(): string;
    displayDetails(): string;
    getPriceWithTax(): number;
    getBulkPriceWithTax(): number;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map