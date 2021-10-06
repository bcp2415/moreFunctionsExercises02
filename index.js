//Create an anonymous fucntion and set it equal to a variable.
const returnVariousThings = function (input) {
  if (typeof input === 'number') {
    return (input * 3);
  } else if (typeof input === 'string') {
    return 'ARRR!';
  } else {
    return input;
  };
};

//returnVariousThings(2);
/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. */



/* Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];
/*let newArr = arr.map(function(element) {
  returnVariousThings(element);
});
*/
let newArr = arr.map(function(el) {
  return returnVariousThings(el);
});
console.log(newArr);