// E-commerce order data
const orders = [
  { id: 1, customer: 'Alice', items: ['laptop', 'mouse'], total: 1050, status: 'completed' },
  { id: 2, customer: 'Bob', items: ['keyboard'], total: 75, status: 'pending' },
  { id: 3, customer: 'Alice', items: ['headphones', 'webcam'], total: 250, status: 'completed' },
  { id: 4, customer: 'Charlie', items: ['monitor'], total: 300, status: 'cancelled' },
  { id: 5, customer: 'Bob', items: ['desk', 'chair'], total: 450, status: 'completed' }
];

// Challenge 1: Calculate total revenue from completed orders
const totalRevenue = orders
  .filter(/* filter completed orders */)
  .reduce(/* sum the totals */, 0);

console.log('Total revenue: $' + totalRevenue);

// Challenge 2: Find customers who have made multiple orders
const customerOrderCounts = orders
  .reduce(/* count orders per customer */, {});

const repeatCustomers = Object.entries(customerOrderCounts)
  .filter(/* find customers with more than 1 order */)
  .map(/* extract just the customer names */);

console.log('Repeat customers:', repeatCustomers);

// Challenge 3: Create a summary of order statuses
const statusSummary = orders
  .reduce(/* count orders by status */, {});

console.log('Order status summary:', statusSummary);

/* Expected Results:
 - totalRevenue: 1750 (1050 + 250 + 450)
 - repeatCustomers: ['Alice', 'Bob']
 - statusSummary: { completed: 3, pending: 1, cancelled: 1 } */
