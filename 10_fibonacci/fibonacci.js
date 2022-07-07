const fibonacci = function (pos) {
  // check for edge cases
  if (pos < 0) return "OOPS";
  if (pos === 0) return 0;

  let a = 0;
  let b = 1;
  let next = a + b;

  for (let i = 1; i < pos - 1; i++) {
    a = b;
    b = next;
    next = a + b;
  }

  return next;
};
console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
