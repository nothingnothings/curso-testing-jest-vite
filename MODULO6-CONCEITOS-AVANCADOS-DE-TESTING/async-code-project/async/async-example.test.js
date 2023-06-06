import { expect, it, describe } from 'vitest';

import { generateToken, generateTokenPromise } from './async-example';

// describe(generateToken, () => {
//   it('should generate a token for a given user email', () => {
//     //ARRANGE
//     const value = 'exemplo@exemplo.com';
//     //ACT
     // const result = generateToken(); //! ERRADO

//     generateToken(value, (err, token) => { //! ISTO TAMBÉM ESTÁ ERRADO, PQ _ NÃO PODEMOS TESTAR CÓDIGO ASYNC ASSIM, com 1 'EXPECT' DENTRO DE 1 CALLBACK FUNCTION...
      //ASSERT -- //!  ISSO NÃO FUNCIONARÁ, PQ O 'ASSERT' FICA/FICARÁ DENTRO DA CALLBACK FUNCTION....
//       expect(token).toBeDefined(); // !isso dará como 'PASSED', mas não significa que o test ocorreu corretamente
//       expect(token).toBe(2); /// ! é um resultado __ IMPOSSÍVEL, mas aparecerá como 'passed', justamente pq NÃO É ASSIM QUE ESCREVEMOS TESTS DE ASYNC CODE...
//     });
//   });
// });




describe(generateToken, () => {
    it('should generate a token for a given user email', () => {
      //ARRANGE
      const value = 'exemplo@exemplo.com';
      //ACT
      // const result = generateToken(); //! ERRADO
  
      generateToken(value, (err, token) => { //! ISTO TAMBÉM ESTÁ ERRADO, PQ _ NÃO PODEMOS TESTAR CÓDIGO ASYNC ASSIM, com 1 'EXPECT' DENTRO DE 1 CALLBACK FUNCTION...
        //ASSERT -- //!  ISSO NÃO FUNCIONARÁ, PQ O 'ASSERT' FICA/FICARÁ DENTRO DA CALLBACK FUNCTION....
        expect(token).toBeDefined(); // !isso dará como 'PASSED', mas não significa que o test ocorreu corretamente
        expect(token).toBe(2); /// ! é um resultado __ IMPOSSÍVEL, mas aparecerá como 'passed', justamente pq NÃO É ASSIM QUE ESCREVEMOS TESTS DE ASYNC CODE...
      });
    });
  });

describe(generateTokenPromise, () => {
  it('should generate a token for a given user email', () => {
    //ARRANGE
    const value = 'exemplo@exemplo.com';
    //ACT
    const result = generateTokenPromise();
    //ASSERT
  });
});
