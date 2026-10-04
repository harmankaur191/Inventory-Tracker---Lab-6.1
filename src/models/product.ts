
export default class Product {
    sku: string;
    name: string;
    price: number;
    

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
        
    }
    displayDetails(): string {
        return `{this.name} costs $${this.price}. The sku is ${this.sku}`;
    }

    getPriceWithTax():number{

        let result: number = this.price; // remeber to add tax
        return result;
    }
}

