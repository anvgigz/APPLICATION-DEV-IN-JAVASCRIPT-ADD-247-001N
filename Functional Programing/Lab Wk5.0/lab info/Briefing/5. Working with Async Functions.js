/*

Important Warning: Standard HOFs like forEach(), map(), and filter() 
don't work well with async functions because they don't wait for promises to resolve!

*/

// ❌ Doesn't work as expected
const urls = ['url1', 'url2', 'url3'];
urls.forEach(async url => {
  const data = await fetch(url);
  console.log(data);
});

// ✅ Use async-aware alternatives
async function forEachAsync(arr, fn) {
  for (const item of arr) {
    await fn(item);
  }
}

// ✅ Or use Promise.all for parallel execution
const promises = urls.map(url => fetch(url));
const results = await Promise.all(promises);
