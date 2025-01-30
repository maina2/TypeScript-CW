interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'customer';
}

type Product = {
    id: string;
    name: string;
    price: number;
    stock: number;
};

type Order = {
    id: string;
    userId: string;
    products: { productId: string; quantity: number }[];
    total: number;
};

// Generic Repository for CRUD operations
class Repository<T> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
    }
    
    getAll(): T[] {
        return this.items;
    }
    
    find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }
}

// User Service
class UserService {
    private users = new Repository<User>();
    
    register(user: User): void {
        this.users.add(user);
    }
    
    getUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }
}

// Product Service
class ProductService {
    private products = new Repository<Product>();
    
    addProduct(product: Product): void {
        this.products.add(product);
    }
    
    getAllProducts(): Product[] {
        return this.products.getAll();
    }
}

// Order Service
class OrderService {
    private orders = new Repository<Order>();
    
    placeOrder(order: Order): void {
        this.orders.add(order);
    }
    
    getOrdersByUser(userId: string): Order[] {
        return this.orders.getAll().filter(order => order.userId === userId);
    }
}

// Usage Example
const userService = new UserService();
const productService = new ProductService();
const orderService = new OrderService();

userService.register({ id: '1', name: 'Alice', email: 'alice@example.com', role: 'customer' });
productService.addProduct({ id: '101', name: 'Laptop', price: 1200, stock: 10 });

const order: Order = {
    id: '5001',
    userId: '1',
    products: [{ productId: '101', quantity: 1 }],
    total: 1200,
};

orderService.placeOrder(order);

console.log('User Orders:', orderService.getOrdersByUser('1'));
