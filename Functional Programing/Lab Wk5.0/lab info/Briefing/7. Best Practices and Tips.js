/*

When to Use Each HOF:

map(): When you want to transform every element
filter(): When you want to select some elements
reduce(): When you want to combine all elements into one result
forEach(): When you want to do something for each element (side effects)
find()/findIndex(): When you want to find the first match
every()/some(): When you want to check conditions across all elements



Common Pitfalls to Avoid:

Forgetting to return values in map() and filter()
Not providing initial values to reduce()
Using forEach() when you want a new array (use map() instead)
Trying to use async functions directly with standard HOFs
Over-complicating simple loops with HOFs
*/



