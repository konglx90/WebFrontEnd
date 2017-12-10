// https://segmentfault.com/a/1190000006876228
// 这个只能处理单参数
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

// compose(f, g) === f(g())

// sequence(g, f) === f(g())

// from Redux

function compose(...funcs) {
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

//

Function.prototype.compose = function(prevFunc) {
  var nextFunc = this;
  return function() {
    return nextFunc.call(this,prevFunc.apply(this,arguments));
  }
}
function function1(a){return a + ' 1';}
function function2(b){return b + ' 2';}
function function3(c){return c + ' 3';}
var composition = function3.compose(function2).compose(function1);
console.log( composition('count') ); // returns 'count 1 2 3'

function floorSqrt1(num) {
  var sqrtNum = Math.sqrt(num);
  var floorSqrt = Math.floor(sqrtNum);
  var stringNum = String(floorSqrt);
  return stringNum;
}
function floorSqrt2(num) {
  return String(Math.floor(Math.sqrt(num)));
}
function floorSqrt3(num) {
  return [num].map(Math.sqrt).map(Math.floor).toString();
}
var floorSqrt4 = String.compose(Math.floor).compose(Math.sqrt);
var floorSqrt5 = Math.sqrt.sequence(Math.floor).sequence(String);

floorSqrt1(17); // Returns: 4
