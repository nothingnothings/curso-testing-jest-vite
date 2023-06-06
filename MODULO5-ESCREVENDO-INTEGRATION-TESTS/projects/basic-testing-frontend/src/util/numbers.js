export function transformToNumber(value) {
  if (!value) {
    throw new Error('No value provided.');
  }
  return +value;
}
