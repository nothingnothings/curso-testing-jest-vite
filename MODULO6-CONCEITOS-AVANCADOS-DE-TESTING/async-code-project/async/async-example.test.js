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

// TODO - EXEMPLO DE TEST ASYNC COM __ CALLBACKS___....
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

// TODO - EXEMPLO DE TEST ASYNC COM __ THEN-CATCH (promises, sem callbacks) --> este approach é bem melhor.... é conciso, funciona, é perfeito.
it('should generate a token value', () => {
  const value = 'test@test.com';

  //  PARA TESTAR 1 FUNCTION QUE RETORNA 1 PROMISE, NÃO PRECISAMOS DO 'done'... --> precisamos WRAPPAR nossa function com o 'EXPECT', e aí CHAINAR OS METHODS DE 'resolve' e 'rejects'...
  return expect(generateTokenPromise(value)).resolves.toBeDefined();
  // expect(generateTokenPromise(value)).resolves.toBe(2);
  // expect(generateTokenPromise('error')).rejects.toBeDefined(); // * 'no email provided'
});

// TODO - EXEMPLO DE TEST ASYNC COM __ ASYNC/AWAIT (promises, sem callbacks) --> este approach é bem melhor... é o approach de cima, mas com async/await....
it('should generate a token value', async () => {
  //adicione 'async' aqui...
  //ARRANGE
  const value = 'test@test.com';

  //ACT
  ///success case
  const result1 = await generateTokenPromise(value);
  ///failure/error2 case
  // const result2 = await generateTokenPromise('error');

  //ASSERT
  expect(result1).toBeDefined();
  // expect(result2); // * 'no email provided'
  // expect(result2).toBeDefined();
});

// TODO - EXEMPLO DE TEST ASYNC COM __ ASYNC/AWAIT (promises, sem callbacks) --> este approach é bem melhor... é o approach de cima, mas com async/await....
it('should return a string, even if "error" is provided as a value', async () => {
  //ARRANGE
  const value = 'error';

  //ACT
  ///success case
  const result2 = await generateTokenPromise(value);
  ///failure/error2 case
  // const result2 = await generateTokenPromise('error');

  //ASSERT
  expect(result2).toBeDefined();
  // expect(result2); // * 'no email provided'
  // expect(result2).toBeDefined();
});

// describe(generateTokenPromise, () => {
//   it('should generate a token for a given user email', () => {
//     //ARRANGE
//     const value = 'exemplo@exemplo.com';
//     //ACT
//     const result = generateTokenPromise();
//     //ASSERT
//   });
// });
