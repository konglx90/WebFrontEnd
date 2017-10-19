// https://segmentfault.com/a/1190000006876228
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

// compose(f, g) === f(g())

// sequence(g, f) === f(g())

// from Redux

export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  const last = funcs[funcs.length - 1]
  const rest = funcs.slice(0, -1)
  return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args))
}


const add = (x, y) => x + y
const multiply2 = x => x * 2

const z = compose(multiply2, add)
z(1, 2) // 6

const minus10 = x => x - 10
const zz = compose(minus10, multiply2, add);
zz(1, 2) // -4

// ---

var toUpperCase = function(x) { return x.toUpperCase(); };
var exclaim = function(x) { return x + '!'; };
var shout = compose(exclaim, toUpperCase);
shout("send in the clowns");
//=> "SEND IN THE CLOWNS!"
/* bad hard to read
var shout = function(x){
  return exclaim(toUpperCase(x));
};
*/
// 结合律 var associative = compose(f, compose(g, h)) == compose(compose(f, g), h);

const logger1 = store => next => action => {
  // 传递前, 执行的代码
  console.log('log1-1')
  let result = next(action)
  console.log('log1-2')
  // 传递完, 执行的代码
  return result
}

const logger2 = store => next => action => {
  // 传递前, 执行的代码
  console.log('log2-1')
  let result = next(action)
  console.log('log2-2')
  // 传递完, 执行的代码
  return result
}

compose(logger1(''), logger2(''))(action => console.log(action))('action')
/*
log1-1
log2-1
action
log2-2
log1-2
*/

// ...next(next(next(action)))

//
