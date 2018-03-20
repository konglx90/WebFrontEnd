export function classOf(o: object) {
  if (o === null) return 'Null';
  if (o === undefined) return 'Undefined';
  return Object.prototype.toString.call(o).slice(8, -1);
}

export function isNumber(o: object) {
  return classOf(o) === 'Number';
}
