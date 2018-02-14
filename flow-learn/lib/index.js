function foo(x) {
  if (x) {
    return x.toSting();
  }
  return "default string";
}

foo(2);

function square(n) {
  return n * n;
}

const z = square(2);