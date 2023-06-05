export const resultTextConstructor = (result) => {
  let resultText = '';

  console.log(resultText);

  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + result;
  }

  return resultText;
};
