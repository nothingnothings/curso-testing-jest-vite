import { expect, it, describe } from 'vitest';
import { vi } from 'vitest'; // usamos 'vi' para ter coisas como SPIES (vi.fn()) E MOCKS... (com vi.mock())...

import writeData from './io.js';
import { promises as fs } from 'fs'; //exatamente o mesmo código importado lá em 'io.js'...

vi.mock('fs'); //o segundo argumento, de config, é OPCIONAL. POR MEIO DE 'vi.mock('nome-do-module')' PODEMOS MOCKAR COMPLETAMENTE ESSA FUNCIONALIDADE/MODULO/METHOD...
vi.mock('path', () => {
  // TODO - COM ISSO, TENTO SIMPLIFICAR AO MÁXIMO O CÓDIGO QUE EXECUTO NO MEU TEST... (substituo o MÓDULO INTEIRO de 'path' POR ESSA EXECUÇÃO AÍ...)
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1]; //? com isso, conseguimos retornar APENAS 'fileName'
      },
      // basename: ,  //outras propriedades/methods do module de 'path' que podemos customizar...
      // format: ,
    },
  };
});

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

//  ? NOSSO TEST, AQUI, TEM 1 SIDE EFFECT -----> ELE FAZ WRITE DE DATA AO HARD DRIVE --> e isso é ruim, dependendo da situação. --> para SOLUCIONAR ESTE PROBLEMA, DEVEMOS USAR SPIES/MOCKS (neste caso, MOCKS, pq nós NÃO SOMOS 'DONOS' da function de 'fs.writeFile', que roda quando 'writeData' é executada)...
// it('should execute the writeFile method', async () => {
//   //ARRANGE
//   const testData = 'DUMMY';
//   const testFileName = 'test.txt';
//   //ACT
//   const result = await writeData(testData, testFileName);
//    //// ACT E ASSERT
//   //   return expect(writeData(testData, testFileName)).resolves.toBeUndefined(); //isto também funciona.
//   //ASSERT
//   expect(result).toBeUndefined(); // isto funciona.
// });

// ? NOSSO TEST, AQUI, TEM 1 SIDE EFFECT -----> ELE FAZ WRITE DE DATA AO HARD DRIVE --> e isso é ruim, dependendo da situação.
it('should execute the writeFile method', () => {
  //ARRANGE
  const testData = 'DUMMY';
  const testFileName = 'test.txt';
  //ACT
  //   const result = await writeData(testData, testFileName);
  writeData(testData, testFileName); // ? VAI CHAMAR 'fs.writeFile', no seu interior...
  //// ACT E ASSERT
  //   return expect(writeData(testData, testFileName)).resolves.toBeUndefined(); //isto também funciona.

  //ASSERT
  //   return expect(result).resolves.toBeUndefined(); //! ISTO NÃO VAI MAIS FUNCIONAR PQ TODAS AS FUNCTIONS DENTRO DE 'fs' (fs.writeFile, por exemplo) FORAM MOCKADAS/TROCADAS POR EMPTY SPY FUNCTIONS...
  expect(fs.writeFile).toHaveBeenCalled(); // ESSA É A COISA PELA QUAL TESTAMOS DE VERDADE, PQ __ É REALMENTE ISSO QUE IMPORTA (se essa function foi chamada ou não, durante aquela execução)...
  expect(fs.writeFile).toBeCalledWith(testFileName, testData); // vai funcionar por conta do mock de 'fs'...
});

// OK... DENTRO DO OBJECT 'vi',

// TEMOS

// O METHOD DE '.mock()'...

// A ESSE METHOD,

// VC DEVE __ PASSAR __ O 'NOME DO MODULE/PATH AO MODULE'

// QUE _ DEVE SER MOCKADO...

/// ------------

// --> OK...

// SE VC RODAR

// 'vi.mock('fs')',

// VC

// VAI

// RODAR

// O ALGORITMO DE AUTO-MOCKING

// DO

// JEST/VITEST,

// QUE VAI BASICAMENTE ENCONTRAR ESSE MODULE

// E SUBSTITUIR

// __ TODAS AS FUNCTIONS DENTRO DESSE MODULE

// __ COM _ EMPTY SPY FUNCTIONS...

// ---------------

// OK... SE AGORA o 'writeData'

// FOR EXECUTADO, DURANTE NOSSO TEST,

// ELE NÃO VAI MAIS FAZER 'WRITE'

// DESSA TEXT FILE NA PASTA DE 'data',

// PQ _ NOS NOSSOS TESTS,

// O FILE SYSTEM, PROVIDENCIADO PELO NODE,

// FOI SUBSTITUÍDO POR ESSA VERSÃO 'MOCK',

// QUE

// CONTÉM
// VERSÕES
// VAZIAS QUE

// 'DONT DO ANYTHING'...
