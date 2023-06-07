import { it, expect, describe, vi } from 'vitest';

import { sendDataRequest } from './http';

const testResponseData = { testKey: 'testDataDummy' };
const fetchSpyFunction = vi.fn((url, options) => {
  //criamos 1 'spy function' com 'vi.fn()'... --> e essa spy function deve ter os mesmos parâmetros da function que mockamos... que, no caso, é 'fetch(url, options)'...

  const testResponse = {
    ok: true, //usado na linha 14 de 'http.js'...
    json() {
      //usado na linha 12 de 'http.js'... (e que retorna 1 promise, que é o que queremos retornar aqui, também..)
      return new Promise((resolve, reject) => {
        resolve(testResponseData);
      });
    },
  };
  return new Promise((resolve, reject) => {
    resolve(testResponse); //fazemos 'resolve()' para 1  value específico, exatamente como a function original de 'fetch' faria, se tivesse 1 resultado válido..
  });
});

//COM 'STUBGLOBAL', ficamos capazes de mockar GLOBAL FUNCTIONS E OBJECTS, como 'fetch'... (coisas que não são MODULES NATIVOS DE NOSSA LANGUAGE, OU QUE NÃO SÃO CUSTOM MODULES/FILES IMPORTADOS POR NÓS)...
// com esse method, podemos definir nossas próprias implementations para essas functions/objects
// vi.stubGlobal('fetch', () => Promise.resolve({ data: 'Hi there!' }));

vi.stubGlobal('fetch', fetchSpyFunction); //e esse stub, de 'fetch', será usado nessa function de 'sendDataRequest', que possui um FETCH function call no seu interior...

describe('sendDataRequest', () => {
  it('should return any available response data', async () => {
    //ARRANGE
    const testData = { key: 'test' };
    //ACT
    const result = await sendDataRequest(testData);
    //ASSERT
    expect(result).toEqual(testResponseData); 
  });
});


//? VERSÃO ALTERNATIVA do test de cima:
// describe('sendDataRequest', () => {
//   it('should return any available response data', async () => {
//     ARRANGE
//     const testData = { key: 'test' };
//     ACT AND ASSERT
//    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData); 
//  
//     
//   });
// });

// COMO PARTE DESSE TEST,

// É CLARO QUE VAMOS QUERER

// chamar 'sendDataRequest'...

// -> MAS AGORA QUEREMOS

// NOS CERTIFICAR DE QUE 'fetch'

// NÃO SERÁ EXECUTADA...

// -> NA VERDADE, QUEREMOS QUE ELA SEJA EXECUTADA, SIM,

// MAS NÃO QUEREMOS

// QUE

// A FUNCTION ORIGINAL SEJA EXECUTADA, E SIM 1 'mock'

// SEJA USADO NO SEU LUGAR...

// --> PARA ISSO, PODERÍAMOS USAR O FOLDER DE '__mocks__',

// a princípio...

// BEM, NA ÚLTIMA COURSE SECTION,

// O QUE FARÍAMOS

// SERIA

// IMPORTAR

// 'vi.mock()',

// E AÍ

// ESCREVER ALGO COMO

// 'vi.mock('fetch')',

// OU ALGO ASSIM..

// MAS O PROBLEMA, AQUI, É QUE 'fetch'

// NÃO É 1

// 'MODULE A SER REPLACED' ------> ISSO PQ

// 'FETCH'

// é uma

// API INTEIRA DO BROWSER...

// -> CERTO...

// 'fetch' --> É UMA __ GLOBALLY AVAILABLE FUNCTION --.

// -> CERTO...

// 'fetch' --> É UMA __ GLOBALLY AVAILABLE FUNCTION --.

// --> ISSO QUER DIZER QUE

// ELE NÃO É UM MODULE... -> NÃO É IMPORTADO DE QUALQUER MODULE.... É UMA GLOBALLY AVAILABLE FUNCTION..

// --> É POSSÍVEL TER MODULES NO FRONTEND JAVASCRIPT TAMBÉM,

// MAS ESTE NÃO É O CASO, AQUI...
