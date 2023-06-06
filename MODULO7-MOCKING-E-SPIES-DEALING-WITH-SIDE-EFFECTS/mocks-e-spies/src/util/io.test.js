import { expect, it, describe } from 'vitest';

import writeData from './io.js';

// describe('writeData', () => {
//   it('should write data to a file', async () => {
//     //ARRANGE
//     const data = 'DUMMY';
//     //ACT
//     const result = await writeData(data, 'data.txt');
//     //ASSERT
//     expect(result).toBe(true);
//   });
// });

// describe('writeData', () => {
//   it('should write data to a file', async () => {
//     //ARRANGE
//     const data = 'DUMMY';
//     //ACT
//     const result = await writeData(data, 'data.txt');
//     //ASSERT
//     expect(result).toBe(true);
//   });
// });


// ? NOSSO TEST, AQUI, TEM 1 SIDE EFFECT -----> ELE FAZ WRITE DE DATA AO HARD DRIVE --> e isso é ruim, dependendo da situação.
it('should execute the writeFile method', async () => {
  //ARRANGE
  const testData = 'DUMMY';
  const testFileName = 'test.txt';
  //ACT
  const result = await writeData(testData, testFileName);
   //// ACT E ASSERT
  //   return expect(writeData(testData, testFileName)).resolves.toBeUndefined(); //isto também funciona.
  //ASSERT
  expect(result).toBeUndefined(); // isto funciona.
});
