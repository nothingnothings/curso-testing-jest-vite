import { it, expect, describe, vi } from 'vitest';

import { sendDataRequest } from './http';
import { HttpError } from './errors';

const testResponseData = { testKey: 'testDataDummy' };
const fetchSpyFunction = vi.fn((url, options) => {
  //criamos 1 'spy function' com 'vi.fn()'... --> e essa spy function deve ter os mesmos parâmetros da function que mockamos... que, no caso, é 'fetch(url, options)'...

  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      //com isso, se a data passada NÃO FOR 1 STRING (json data é uma string... e obtemos 1 string por meio do call de 'JSON.stringify(data)'), nosso código vai dar 1 ERRO...
      return reject('Not a string.');
    }

    const testResponse = {
      ok: true, //usado na linha 14 de 'http.js'...
      json() {
        //usado na linha 12 de 'http.js'... (e que retorna 1 promise, que é o que queremos retornar aqui, também..)
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };

    resolve(testResponse); //fazemos 'resolve()' para 1  value específico, exatamente como a function original de 'fetch' faria, se tivesse 1 resultado válido..
  });
});

//COM 'STUBGLOBAL', ficamos capazes de mockar GLOBAL FUNCTIONS E OBJECTS, como 'fetch'... (coisas que não são MODULES NATIVOS DE NOSSA LANGUAGE, OU QUE NÃO SÃO CUSTOM MODULES/FILES IMPORTADOS POR NÓS)...
// com esse method, podemos definir nossas próprias implementations para essas functions/objects
// vi.stubGlobal('fetch', () => Promise.resolve({ data: 'Hi there!' }));

vi.stubGlobal('fetch', fetchSpyFunction); //e esse stub, de 'fetch', será usado nessa function de 'sendDataRequest', que possui um FETCH function call no seu interior...

// describe('sendDataRequest', () => {
//   it('should return any available response data', async () => {
//     //ARRANGE
//     const testData = { key: 'test' };
//     //ACT
//     const result = await sendDataRequest(testData);
//     //ASSERT
//     expect(result).toEqual(testResponseData);
//   });
// });

describe('sendDataRequest', () => {
  //? VERSÃO ALTERNATIVA do test de cima:
  it('should return any available response data', () => {
    //ARRANGE
    const testData = { key: 'test' };
    //ACT AND ASSERT
    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });

  it('should convert the provided data to JSON before sending the request', async () => {
    //ARRANGE
    const testData = { key: 'test' };
    let errorMessage;
    //ACT
    try {
      await sendDataRequest(testData);
    } catch (err) {
      //ASSERT
      errorMessage = err;
    }

    expect(errorMessage).not.toBe('Not a string.');
  });

  it('should throw an HttpError in case of non-ok responses', () => {
    //ARRANGE
    const testData = { key: 'test' };
    //? exemplo de uso de 'vi.fn().mockImplementationOnce()';

    fetchSpyFunction.mockImplementationOnce(
      //com isso, colocamos 'overwrite' na nossa implementation de 'fetchSpyFunction' UMA ÚNICA VEZ...
      (url, _options) => {
        return new Promise((resolve, reject) => {
          const testResponse = {
            ok: false, // TODO - ISTO FARÁ A DIFERENÇA (pq usamos isto neste teste, específico)...
            json() {
              return new Promise((resolve, reject) => {
                resolve(testResponseData);
              });
            },
          };

          resolve(testResponse);
        });
      }
    );

    //ACT AND ASSERT
    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});

// it('should throw an error if the provided data is not converted to JSON before sending the request', () => {
//   //ARRANGE
//   const testData = { key: 'test' };
//   //ACT
//   sendDataRequest(testData);
//   //ASSERT
//   expect(fetch).toBeCalled();
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
