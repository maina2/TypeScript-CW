// Type Aliases and Interfaces
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

type CartItem = {
    productId: string;
    quantity: number;
};

type Order = {
    id: string;
    userId: string;
    items: CartItem[];
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

// Cart Service
class CartService {
    private carts: Map<string, CartItem[]> = new Map();
    
    addToCart(userId: string, item: CartItem): void {
        if (!this.carts.has(userId)) {
            this.carts.set(userId, []);
        }
        const cart = this.carts.get(userId)!;
        cart.push(item);
    }
    
    getCart(userId: string): CartItem[] {
        return this.carts.get(userId) || [];
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
const userService = new Repository<User>();
const productService = new Repository<Product>();
const cartService = new CartService();
const orderService = new OrderService();

userService.add({ id: '1', name: 'Bob', email: 'bob@example.com', role: 'customer' });
productService.add({ id: '102', name: 'Smartphone', price: 800, stock: 15 });

cartService.addToCart('1', { productId: '102', quantity: 2 });
const cartItems = cartService.getCart('1');

const order: Order = {
    id: '6001',
    userId: '1',
    items: cartItems,
    total: 1600,
};

orderService.placeOrder(order);

console.log('User Orders:', orderService.getOrdersByUser('1'));
console.log('User Cart:', cartService.getCart('1'));
