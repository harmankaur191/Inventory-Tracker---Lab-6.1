import Product from "./product.js";

export default class PhysicalProduct extends Product{
   protected weight: number;
   quantity: number;
    taxRate: number = 0.10;

    constructor(sku:string, name:string, price:number, weight:number,quantity:number){
        super(sku,name,price);
        this.weight = weight;
        this.quantity=quantity;
    }
    getWeight(): string {
        return `The weight is ${this.weight} kg.`;
    }
    
    override displayDetails(): string {
        return super.displayDetails() + `It weighs ${this.weight}kg. Quantity: ${this.quantity}`;
    }
    override getPriceWithTax(): number {
        let beforeDiscount=super.getPriceWithTax()*this.quantity*(1+this.taxRate);
        console.log("Price before Discount:"+ beforeDiscount.toFixed(2));
        return super.getPriceWithTax()*(1-this.getBulkPriceWithTax())*(this.taxRate+1)*this.quantity;
    }

    getBulkPriceWithTax(): number{
        let discount;
        if(this.quantity >=5 || this.weight > 4){
            discount=0.20;
            console.log(`Discount:`+ discount*100 + "%");
           return discount;
           
            
        }else{
            discount=0;
            console.log(`Discount:`+ discount*100 + "%");
            return discount;
        }

    }
    
}