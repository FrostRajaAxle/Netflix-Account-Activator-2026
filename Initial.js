class Product {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    totalValue() {
        return this.quantity * this.price;
    }
}

class InventoryManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    inventoryValue() {
        return this.products.reduce(
            (sum, product) => sum + product.totalValue(),
            0
        );
    }

    printReport() {
        console.log("Inventory Report");
        console.log("================");

        for (const product of this.products) {
            console.log(
                `${product.id} | ${product.name} | ${product.quantity} | $${product.price.toFixed(2)}`
            );
        }

        console.log("================");
        console.log(
            `Total Inventory Value: $${this.inventoryValue().toFixed(2)}`
        );
    }
}

const inventory = new InventoryManager();

inventory.addProduct(new Product(1, "Laptop", 8, 899.99));
inventory.addProduct(new Product(2, "Keyboard", 25, 59.50));
inventory.addProduct(new Product(3, "Mouse", 40, 24.90));
inventory.addProduct(new Product(4, "Monitor", 12, 219.00));

inventory.printReport();
