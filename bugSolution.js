function foo(a, b) {
  //Option 1: Return 0 if either argument is null
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;

  // Option 2: Return the non-null value if one is null
  // if (a === null && b === null) { return 0;} 
  // if (a === null) { return b; } 
  // if (b === null) { return a; } 
  // return a + b; 
}

console.log(foo(null, 1)); // 1 (Option 1), 1 (Option 2)
console.log(foo(1, null)); // 1 (Option 1), 1 (Option 2)
console.log(foo(1, 2)); // 3
console.log(foo(null, null)); // 0 (Option 1), 0 (Option 2)