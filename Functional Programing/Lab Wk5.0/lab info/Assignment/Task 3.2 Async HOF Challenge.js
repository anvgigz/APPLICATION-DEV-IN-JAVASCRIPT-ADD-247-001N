// Simulate async operations
function simulateAsyncOperation(data, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data * 2); // Simulate some processing
    }, delay);
  });
}

const asyncData = [1, 2, 3, 4, 5];

// ❌ This won't work as expected:
asyncData.forEach(async item => {
  const result = await simulateAsyncOperation(item, 100);
  console.log('Processed:', result);
});

// ✅ Your turn: Create a working async version
async function processAsyncData() {
  const promises = asyncData.map(/* your code here */);
  const results = await Promise.all(promises);
  console.log('All processed:', results);
}

// Call your function
processAsyncData();

/* Important: Standard HOFs don't wait for async operations.
   Use Promise.all() or async-aware versions. */
