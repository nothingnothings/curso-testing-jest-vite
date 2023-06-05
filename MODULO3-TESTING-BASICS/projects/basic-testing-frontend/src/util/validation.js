export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
}

// export function validateNumber(number) {
//   if (!number) {
//     throw new Error('No value provided');
//   }
//   if (isNaN(number)) {
//     throw new Error('Invalid number input.');
//   }
// }

export function validateNumber(number) {
  if (!number) {
    throw new Error('No value provided');
  }
  if (isNaN(number) || typeof number !== 'number') {
    throw new Error('Invalid number input.');
  }
}
