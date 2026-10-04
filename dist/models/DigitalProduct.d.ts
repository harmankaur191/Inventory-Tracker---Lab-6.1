import Product from "./product.js";
export default class DigitalProduct extends Product {
    protected fileSize: number;
    constructor(sku: string, name: string, price: number, fileSize: number);
    getPriceWithTax(): number;
    displayDetails(): string;
    getFileSize(): string;
}
//# sourceMappingURL=DigitalProduct.d.ts.map