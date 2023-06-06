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

// describe(generateToken, () => {
//     it('should generate a token for a given user email', () => {
//       //ARRANGE
//       const value = 'exemplo@exemplo.com';
//       //ACT
//       // const result = generateToken(); //! ERRADO

//       generateToken(value, (err, token) => { //! ISTO TAMBÉM ESTÁ ERRADO, PQ _ NÃO PODEMOS TESTAR CÓDIGO ASYNC ASSIM, com 1 'EXPECT' DENTRO DE 1 CALLBACK FUNCTION...
//         //ASSERT -- //!  ISSO NÃO FUNCIONARÁ, PQ O 'ASSERT' FICA/FICARÁ DENTRO DA CALLBACK FUNCTION....
//         expect(token).toBeDefined(); // !isso dará como 'PASSED', mas não significa que o test ocorreu corretamente
//         expect(token).toBe(2); /// ! é um resultado __ IMPOSSÍVEL, mas aparecerá como 'passed', justamente pq NÃO É ASSIM QUE ESCREVEMOS TESTS DE ASYNC CODE...
//       });
//     });
//   });

// describe(generateToken, () => {
//   it('should generate a token for a given user email', (done) => {
//     // * 'done' deve ser adicionado, como parameter extra, quando vc deseja TESTAR CALLBACK FUNCTIONS DENTRO DAS FUNCTIONS QUE VC ESTÁ TESTANDo...
//     //ARRANGE
//     const value = 'exemplo@exemplo.com';
//     //ACT
//     generateToken(value, (err, token) => {
//       //ASSERT
//       expect(token).toBeDefined();
//       // expect(token).toBe(2);
//       done(); // * isso é o que faz o test funcionar, quando vc está testando 1 CALLBACK FUNCTION DENTRO DE 1 FUNCTION...
//       //'done' significa que 'ESTAMOS DONE COM NOSSO TEST WORK, DENTRO DESSA CALLBACK FUNCTION'.
//     });
//   });
// });

// describe(generateToken, () => { //a princípio, NÃO PODEMOS ENVELOPAR NOSSOS IT CASES/TESTS _ COM DESCRIBE, SE ESTAMOS TESTANDO CALLBACK FUNCTIONS...

it('should generate a token for a given user email', (done) => {
  //ARRANGE
  const value = 'test@test.com';
  //ACT
  generateToken(value, (err, token) => {
    //ASSERT
    try {
      expect(token).toBeDefined(); ///este test vai funcionar, depois de 1 tempo, justamente por nosso código ser async...
      // expect(token).toBe('2'); //este test vai sempre falhar, pq é impossível.
      done();
    } catch (error) {
      /// é ASSIM que podemos capturar quaisquer FAILED TESTS/errors que ocorram durante o nosso test (como 'não há como ser o value de 2', nesse exemplo).
      done(error);
    }
  });
});
// });

// describe(generateTokenPromise, () => {
//   it('should generate a token for a given user email', () => {
//     //ARRANGE
//     const value = 'exemplo@exemplo.com';
//     //ACT
//     const result = generateTokenPromise();
//     //ASSERT
//   });
// });
