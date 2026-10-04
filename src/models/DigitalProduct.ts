import Product from "./product.js";

export default class DigitalProduct extends Product{
    protected fileSize: number;

    constructor( sku:string, name:string, price:number, fileSize: number){
        super(sku,name,price);
        this.fileSize = fileSize;
    }
     override getPriceWithTax(): number {
        return super.getPriceWithTax();
    }
    override displayDetails(): string {
        return super.displayDetails() + `The file size is ${this.fileSize}MB`;
    }

    getFileSize(): string{
        return `The file size is ${this.fileSize} MB.`;
    }
}