import Product from "./product.js";

class PhysicalProduct extends Product{
    weight: number;

    constructor(sku:string, name:string, price:number, weight:number){
        super(sku,name,price);
        this.weight = weight;
    }
}