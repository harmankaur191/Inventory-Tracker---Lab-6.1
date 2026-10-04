import Product from "./product.js";
export default class PhysicalProduct extends Product {
    weight;
    quantity;
    taxRate = 0.10;
    constructor(sku, name, price, weight, quantity) {
        super(sku, name, price);
        this.weight = weight;
        this.quantity = quantity;
    }
    getWeight() {
        return `The weight is ${this.weight} kg.`;
    }
    displayDetails() {
        return super.displayDetails() + `It weighs ${this.weight}kg. Quantity: ${this.quantity}`;
    }
    getPriceWithTax() {
        let beforeDiscount = super.getPriceWithTax() * this.quantity * (1 + this.taxRate);
        console.log("Price before Discount:" + beforeDiscount.toFixed(2));
        return super.getPriceWithTax() * (1 - this.getBulkPriceWithTax()) * (this.taxRate + 1) * this.quantity;
    }
    getBulkPriceWithTax() {
        let discount;
        if (this.quantity >= 5 || this.weight > 4) {
            discount = 0.20;
            console.log(`Discount:` + discount * 100 + "%");
            return discount;
        }
        else {
            discount = 0;
            console.log(`Discount:` + discount * 100 + "%");
            return discount;
        }
    }
}
//# sourceMappingURL=PhysicalProduct.js.map