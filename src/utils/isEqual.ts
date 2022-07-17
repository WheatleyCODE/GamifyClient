export type IsEqualParam = string | number | object;

export const isEqual = (a: IsEqualParam, b: IsEqualParam): boolean => {
  if (typeof a === 'object' && typeof a === 'object') {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  return a === b;
};
