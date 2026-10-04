import Product from "./product.js";

export default class PhysicalProduct extends Product{
   protected weight: number;
    taxRate: number = 0.10;

    constructor(sku:string, name:string, price:number, weight:number){
        super(sku,name,price);
        this.weight = weight;
        
    }
    getWeight(): string {
        return `The weight is ${this.weight} kg.`;
    }
    
    override displayDetails(): string {
        return super.displayDetails() + `It weighs ${this.weight}kg.`;
    }
    override getPriceWithTax(): number {
        return super.getPriceWithTax()*(this.taxRate+1);
    }

    
}