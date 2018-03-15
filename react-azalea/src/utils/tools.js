function classOf(o) {
  if (o === null) return 'Null';
  if (o === undefined) return 'Undefined';
  return Object.prototype.toString.call(o).slice(8, -1);
}

function isNumber(o) {
  return classOf(o) === 'Number';
}
