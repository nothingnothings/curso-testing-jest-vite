export function add(numbers) {
  // let sum //! FAILURE

  let sum = 0; //* SUCCESS

  if (!numbers) {
    const error = new Error('No numbers provided.');

    throw error;
  }

  if (typeof numbers !== 'object') {
    const error = new Error(
      'Please provide an array of numbers, instead of multiple number-arguments'
    );

    throw error;
  }
  for (const number of numbers) {
    // sum += number;  //com erros de concatenação ('0' + 1' = 01; PARA QUE ENTÃO FIQUE 0 + 1 = 1...)
    sum += +number;
  }
  return sum;
}
