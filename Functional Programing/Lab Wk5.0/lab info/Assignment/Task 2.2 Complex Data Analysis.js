// Challenge: Calculate the total value of in-stock inventory
const totalValue = products
  .filter(/* filter for in-stock items */)
  .reduce(/* sum up the prices */, 0);

console.log('Total inventory value: $' + totalValue);

// Challenge: Find the most expensive product
const mostExpensive = products.reduce(/* find the product with highest price */);
console.log('Most expensive:', mostExpensive.name);

// Challenge: Group products by category
const groupedByCategory = products.reduce(/* group products by category */, {});
console.log('Products by category:', groupedByCategory);

/* Expected Results:
 - totalValue: 1078 (999 + 15 + 25 + 199)
 - mostExpensive: {name: 'Laptop', price: 999, ...}
 - groupedByCategory: grouped by category */
