import Product from "./product.js";
export default class PhysicalProduct extends Product {
    weight;
    taxRate = 0.10;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    getWeight() {
        return `The weight is ${this.weight} kg.`;
    }
    displayDetails() {
        return super.displayDetails() + `It weighs ${this.weight}kg.`;
    }
    getPriceWithTax() {
        return super.getPriceWithTax() * (this.taxRate + 1);
    }
}
//# sourceMappingURL=PhysicalProduct.js.map