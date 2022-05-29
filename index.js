'use strict';
void function() {

  const num1 = 5;
  const num2 = 7;

  const sum = (() => num1 + num2)();

  const diff = (() => num1 - num2)();

  const mult = (() => num1 * num2)();

  console.log(sum, diff, mult);
}();
