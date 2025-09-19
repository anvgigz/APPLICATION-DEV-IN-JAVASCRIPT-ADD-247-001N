// Sample data: Product inventory
const products = [
  { name: 'Laptop', price: 999, category: 'Electronics', inStock: true },
  { name: 'Coffee Mug', price: 15, category: 'Kitchen', inStock: true },
  { name: 'Smartphone', price: 699, category: 'Electronics', inStock: false },
  { name: 'Book', price: 25, category: 'Books', inStock: true },
  { name: 'Headphones', price: 199, category: 'Electronics', inStock: true },
  { name: 'Desk Lamp', price: 45, category: 'Home', inStock: false }
];

// Challenge: Create a pipeline that:
// 1. Filters for in-stock items only
// 2. Filters for Electronics category only
// 3. Maps to just the product names
// 4. Joins the names with commas

const result = products
  .filter(/* filter for in-stock items */)
  .filter(/* filter for Electronics category */)
  .map(/* extract just the names */)
  .join(', ');

console.log('Available Electronics:', result);
// Expected: "Laptop, Headphones"
