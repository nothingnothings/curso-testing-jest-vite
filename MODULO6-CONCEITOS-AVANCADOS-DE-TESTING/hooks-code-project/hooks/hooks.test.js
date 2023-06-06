import { it, expect } from 'vitest';

import { User } from './hooks';

it('should update the email', () => {
  //ARRANGE
  const testEmail = 'test@test.com';
  const newTestEmail = 'test2@test.com';
  //ACT
  const user = new User(testEmail);
  user.updateEmail(newTestEmail);
  //ASSERT
  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
  //ARRANGE
  const testEmail = 'test@test.com';
  //ACT
  const user = new User(testEmail);
  //ASSERT
  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  //ARRANGE
  const testEmail = 'test@test.com';
  //ACT
  const user = new User(testEmail);
  //ASSERT
  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  //ARRANGE
  const testEmail = 'test@test.com';
  //ACT
  const user = new User(testEmail);
  user.clearEmail();
  //ASSERT
  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  //ARRANGE
  const testEmail = 'test@test.com';
  //ACT
  const user = new User(testEmail);
  user.clearEmail();
  ///ASSERT
  expect(user).toHaveProperty('email');
});
