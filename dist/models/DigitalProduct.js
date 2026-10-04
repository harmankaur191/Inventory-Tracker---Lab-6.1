import Product from "./product.js";
export default class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        return super.getPriceWithTax();
    }
    displayDetails() {
        return super.displayDetails() + `The file size is ${this.fileSize}MB`;
    }
    getFileSize() {
        return `The file size is ${this.fileSize} MB.`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map