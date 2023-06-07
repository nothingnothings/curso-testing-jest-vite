import { it, expect, describe, beforeAll, beforeEach } from 'vitest';

import { HttpError, ValidationError } from './errors';

//httpError
let statusCode;
let message;
let data;
let httpError;

//validationError

let validationMessage;
let validationError;

describe('HttpError', () => {
  beforeAll(() => {
    httpError = new HttpError(statusCode, message, data);
  });

  beforeEach(() => {
    //ARRANGE
    statusCode = 404;
    message = 'Not found';
    data = { message: 'Product Not Found' };
    //'ACT'
    httpError = new HttpError(statusCode, message, data);
  });

  it('should have properties set as undefined if called with no parameters being passed', () => {
    //ACT
    httpError = new HttpError();
    //ASSERT
    expect(httpError.statusCode).toBeUndefined();
    expect(httpError.message).toBeUndefined();
    expect(httpError.data).toBeUndefined();
  });

  it('should be able to be instantiated with a statusCode, message and data parameters', () => {
    //ASSERT
    expect(httpError).toBeInstanceOf(HttpError);
  });

  it('should be able to update its statusCode property', () => {
    //ARRANGE
    statusCode = 500;
    //ACT
    httpError.statusCode = statusCode;
    //ASSERT
    expect(httpError.statusCode).toBe(statusCode);
  });

  it('should be able to update its message property', () => {
    //ARRANGE
    message = 'exemplo';
    //ACT
    httpError.message = message;
    //ASSERT
    expect(httpError.message).toBe(message);
  });

  it('should be able to update its data property', () => {
    //ARRANGE
    data = { message: 'Hello world!' };
    //ACT
    httpError.data = data;
    //ASSERT
    expect(httpError.data).toBe(data);
  });
});

describe('ValidationError', () => {
  beforeAll(() => {
    validationError = new ValidationError(validationMessage);
  });

  beforeEach(() => {
    //ARRANGE
    validationMessage = 'Not found';
    //'ACT'
    validationError = new ValidationError(validationMessage);
  });

  it('should have message property set as undefined if called with no parameter being passed', () => {
    //ACT
    validationError = new ValidationError();
    //ASSERT
    expect(validationError.message).toBeUndefined();
  });

  it('should instantiate object with string property equal to the message passed as paremeter', () => {
    //ACT
    validationError = new ValidationError(validationMessage);
    //ASSERT
    expect(validationError.message).toBe(validationMessage);
  });
});
