// @flow
// function stringify(value: mixed) {
//   // $ExpectError
//   return "" + value; // Error!
// }
//
// stringify("foo");


function stringify(value: mixed) {
  if (typeof value === 'string') {
    return "" + value; // Works!
  } else {
    return "";
  }
}

stringify("foo");
