import DigitalProduct from './models/DigitalProduct.js';
import PhysicalProduct from './models/PhysicalProduct.js';
import { calculateTax } from './utils/taxCalculator.js';
import { sortProducts } from './utils/sorter.js';
import Product from './models/product.js';
let inventory = [new PhysicalProduct("1", "HP Laptop", 700, 3, 9),
    new PhysicalProduct("2", "Lenovo Laptop", 800, 4, 2),
    new DigitalProduct("3", "Del Laptop", 1000, 12.4),
    new DigitalProduct("4", "ChromeBook", 300, 15)
];
for (let i = 0; i < inventory.length; i++) {
    const result = inventory[i];
    if (result) {
        console.log(result.displayDetails());
        console.log(`Final Price: $${calculateTax(result).toFixed(2)}`);
    }
}
console.log("===Sort By Price ====");
const sortByPrice = sortProducts(inventory, "price");
console.log(sortByPrice);
const sortByName = sortProducts(inventory, "name");
console.log("===Sort By Name ====");
console.log(sortByName);
//# sourceMappingURL=main.js.map