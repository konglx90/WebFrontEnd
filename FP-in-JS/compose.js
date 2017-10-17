// https://segmentfault.com/a/1190000006876228
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);


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


add = (x, y) => x + y
multiply2 = x => x * 2

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

z = compose(m, add)
z(1, 2) // 6
