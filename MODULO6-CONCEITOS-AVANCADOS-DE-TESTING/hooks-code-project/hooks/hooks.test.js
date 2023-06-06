import { it, expect } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com'; // ISTO NÃO É UM HOOK DE TEST, MAS __ É UM EXEMPLO DE COMO PODEMOS DEFINIR E USAR 'GLOBAL CONSTANTS' NOS NOSSOS TESTS (aí não precisamos reescrever isso toda hora, em todos os tests)...
const user = new User(testEmail); //já isto é 1 EXEMPLO DE HOOK...

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
