import Product from "./product.js";

export interface DiscountableProduct{
    applyDiscount(percentage: number): void;
}

export default class DigitalProduct extends Product implements DiscountableProduct{
    protected fileSize: number;

    constructor( sku:string, name:string, price:number, fileSize: number){
        super(sku,name,price);
        this.fileSize = fileSize;
    }

    applyDiscount(): void {
        if(this.price>500){
            const percentage =0.05;
            console.log("Discount: "+ percentage*100+"%");
            this.price = this.price*(1-percentage);
        }
    }
     override getPriceWithTax(): number {
        this.applyDiscount();
        return super.getPriceWithTax();
    }
    override displayDetails(): string {
        return super.displayDetails() + `The file size is ${this.fileSize}MB`;
    }

    getFileSize(): string{
        return `The file size is ${this.fileSize} MB.`;
    }
    
}