import Product from "./product.js";
export interface DiscountableProduct {
    applyDiscount(percentage: number): void;
}
export default class DigitalProduct extends Product implements DiscountableProduct {
    protected fileSize: number;
    constructor(sku: string, name: string, price: number, fileSize: number);
    applyDiscount(): void;
    getPriceWithTax(): number;
    displayDetails(): string;
    getFileSize(): string;
}
//# sourceMappingURL=DigitalProduct.d.ts.map