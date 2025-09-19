//The Real Power: You can chain HOFs together to create powerful data processing pipelines!

const data = [
  { name: 'Alice', age: 30, city: 'NYC' },
  { name: 'Bob', age: 25, city: 'LA' },
  { name: 'Charlie', age: 35, city: 'NYC' },
  { name: 'Diana', age: 28, city: 'Chicago' }
];

const result = data
  .filter(person => person.age > 25)       // Over 25
  .filter(person => person.city === 'NYC') // From NYC
  .map(person => person.name)              // Get names
  .join(', ');                              // Join into string

// Result: "Alice, Charlie"
