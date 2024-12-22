function foo(a, b) {
  if (a === null || b === null) {
    return NaN; // Handle null values with NaN
  }
  return a + b; //Regular addition
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(null, null)); //Output: NaN
//Alternatively, throw an error
function foo2(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  return a + b;
}
console.log(foo2(1,2)); // Output 3
console.log(foo2(null,2)); //Throws Error