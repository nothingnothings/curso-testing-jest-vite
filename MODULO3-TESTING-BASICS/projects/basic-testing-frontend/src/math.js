export function add(numbers) {
  // let sum //! FAILURE
  let sum = 0;  //* SUCCESS

  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
