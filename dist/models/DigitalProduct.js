import Product from "./product.js";
export default class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    applyDiscount() {
        if (this.price > 500) {
            const percentage = 0.05;
            console.log("Discount: " + percentage * 100 + "%");
            this.price = this.price * (1 - percentage);
        }
    }
    getPriceWithTax() {
        this.applyDiscount();
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