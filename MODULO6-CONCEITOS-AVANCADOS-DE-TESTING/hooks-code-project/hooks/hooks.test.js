import { it, expect, describe } from 'vitest';

import { User } from './hooks';

import { beforeAll, beforeEach, afterEach, afterAll } from 'vitest'; ///SÃO OS HOOKS QUE PODEMOS IMPORTAR, LÁ DO VITEST (para ter 'prep work' e 'clean up work')....

// const testEmail = 'test@test.com'; // ISTO NÃO É UM HOOK DE TEST, MAS __ É UM EXEMPLO DE COMO PODEMOS DEFINIR E USAR 'GLOBAL CONSTANTS' NOS NOSSOS TESTS (aí não precisamos reescrever isso toda hora, em todos os tests)...
// const user = new User(testEmail); // * VAMOS UTILIZAR ESSE OBJECT PARA DEMONSTRAR OS HOOKS (beforeAll, beforeEach, afterEach, afterAll)...

let user;
let testEmail;

beforeAll(() => {
  // * ESTE É UM HOOK DE TEST (é um hook que vai rodar antes de TODOS os tests)...
  console.log('BEFORE ALL');
  user = new User(testEmail);
});

beforeEach(() => {
  // * ESTE É UM HOOK DE TEST (é um hook que vai rodar antes de CADA test)...
  // * É UM EXEMPLO DE COMO PODEMOS DEFINIR E USAR 'GLOBAL CONSTANTS' NOS NOSSOS TESTS (aí não precisamos reescrever isso toda hora, em todos os tests)...
  console.log('BEFORE EACH');
  user = new User(testEmail);
  testEmail = 'test@test.com';
});

afterAll(() => {
  /// TODO - VOCê PODE USAR ESSE TEST PARA 'CLEANUP WORK', para limpar 1 database que vc criou em 'beforeAll', por exemplo...
  // * ESTE É UM HOOK DE TEST (é um hook que vai rodar depois de TODOS os tests)...
  console.log('AFTER ALL');
});

afterEach(() => {
  // * ESTE É UM HOOK DE TEST (é um hook que vai rodar depois de CADA test)...
  console.log('AFTER EACH');
});

describe('User', () => {
  it('should have an email property', () => {
    //ARRANGE
    // const testEmail = 'test@test.com';
    //ACT
    // const user = new User(testEmail); // TODO - EXEMPLO DE UTILIZAÇÃO DE HOOK (pq sempre vamos instanciar 'User', pq todos os tests envolvem a criação desse object)...
    //ASSERT
    expect(user).toHaveProperty('email');
  });

  it('should update the email', () => {
    //ARRANGE
    // const testEmail = 'test@test.com';
    const newTestEmail = 'test2@test.com';
    //ACT
    // const user = new User(testEmail);
    user.updateEmail(newTestEmail);
    //ASSERT
    expect(user.email).toBe(newTestEmail);
  });

  // 'describe.concurrent()' // TODO - ESTE É UM EXEMPLO DE COMO VC PODE RODAR TODOS OS TESTS EM 1 DESCRIBE BLOCK EM PARALELO (se vc tiver 1 test que demora muito, vc pode rodar ele em paralelo com outros tests, para ganhar tempo)...

  // it.concurrent('should update the email', () => { /// TODO - ESTE É UM EXEMPLO DE COMO VC PODE RODAR SEUS TESTS EM PARALELO (se vc tiver 1 test que demora muito, vc pode rodar ele em paralelo com outros tests, para ganhar tempo)...
  //   ARRANGE
  //   const newTestEmail = 'test2@test.com';
  //   ACT
  //   user.updateEmail(newTestEmail);
  //   ASSERT
  //   expect(user.email).toBe(newTestEmail);
  // });

  it('should store the provided email value', () => {
    //ARRANGE
    // const testEmail = 'test@test.com';
    //ACT
    // const user = new User(testEmail);
    //ASSERT
    expect(user.email).toBe(testEmail);
  });

  it('should clear the email', () => {
    //ARRANGE
    // const testEmail = 'test@test.com';
    //ACT
    // const user = new User(testEmail);
    user.clearEmail();
    //ASSERT
    expect(user.email).toBe('');
  });

  it('should still have an email property after clearing the email', () => {
    //ARRANGE
    // const testEmail = 'test@test.com';
    //ACT
    // const user = new User(testEmail);
    user.clearEmail();
    ///ASSERT
    expect(user).toHaveProperty('email');
  });
});

// SE VC TIVER 1 FILE COM MÚLTIPLOS 'TESTING SUITES' (describe),

// vc ___

// PODE __ TAMBÉM COLOCAR

// SEUS HOOKS EM

// 1 'SUITE' LEVEL... (dentro de

// cada suite..
// )

// --> SE VC COLOCA ESSES HOOKS DENTRO DE 1 SUITE,

// ESSES HOOKS VÃO SER APLICADOS NA SUITE ONLY ...

// --> já se vc COLOCAR SEUS HOOKS NO 'ROOT LEVEL' DE SEU ARQUIVO
// DE

// TEST,

// A LÓGICA DOS HOOKS VAI SER APLICADA EM 1 GLOBAL LEVEL,

// VAI SER APLICADA

// __ EM TODOS OS TESTS NA FILE...
