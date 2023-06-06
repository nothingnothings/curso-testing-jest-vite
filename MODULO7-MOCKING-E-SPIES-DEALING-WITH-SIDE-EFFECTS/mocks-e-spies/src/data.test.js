import { describe, it, expect } from 'vitest';
import { vi } from 'vitest'; //? É COM 'vi' QUE PODEMOS USAR  COISAS COMO o 'vi.fn()', que é usado para CRIAR SPIES (tipo mocks, mas mais simples)...

import { generateReportData } from './data';
// import { log } from '../util/logger';

describe('generateReportData', () => {
  it('should call the log function, if it has been provided as an argument', () => {
    //ARRANGE
    // ? EXEMPLO DE SPY...
    const logFunctionSpy = vi.fn(); //? ISTO É UM SPY...
    // TODO - 'vi.fn()' É UM METHOD QUE __ CRIA UMA EMPTY FUNCTION; EMPTY FUNCTION QUE 'KEEPS TRACK'  DE QUAISQUER FUNCTION EXECUTIONS DESSA FUNCTION (e também ANOTA OS ARGUMENTS QUE FORAM PROVIDENCIADOS NESSAS CALLS )
    //usaremos 'logFunctionSpy' EM VEZ DE 'log' //! 'logFunctionSpy', que é 'vi.fn()', NÃO FAZ ACTUALLY COISA ALGUMA, MAS NOS DEIXA 'SPY' ESSA FUNCTION, NOS DEIXA 'ESPIONAR' ESSA FUNCTION E CONSTATAR SE ELA FOI EXECUTADA CORRETAMENTE, QUAIS ARGUMENTS FORAM PASSADOS, ETC...
    //ACT
    generateReportData(logFunctionSpy);
    //ASSERT

    expect(logFunctionSpy).toHaveBeenCalled(); //? ISTO É UM SPY, E NÃO UMA FUNCTION, E POR ISSO NÃO TEMOS DE USAR '()'
  });
});