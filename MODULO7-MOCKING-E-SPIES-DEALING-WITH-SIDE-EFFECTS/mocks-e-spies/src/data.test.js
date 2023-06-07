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
    expect(logFunctionSpy).toHaveBeenCalledTimes(1);
    // expect(logFunctionSpy).toHaveBeenCalledTimes(2); //! ISTO FALHARÁ, É CLARO. pq essa function foi chamada apenas 1 única vez...
    expect(logFunctionSpy).toHaveBeenCalledWith(
      'Some dummy data for this demo app'
    );
  });
});

describe('generateReportData 2', () => {
  it('should call the log function, if it has been provided as an argument 2', () => {
    //ARRANGE
    const logFunctionSpy = vi.fn(() => {}); //? ISTO É UM SPY com 1 FUNCTION INTERNA SENDO PASSADA COMO PARAMETER...
    // ? ESSA FUNÇÃO INTERNA, NESSA DUMMY FUNCTION, SERVE PARA VC EXECUTAR ALGUM 'TEST-SPECIFIC BEHAVIOR'...
    // OK...  QUER DIZER QUE NÓS AINDA TEREMOS UMA FUNCTION DUMMY QUE VAI 'KEEP TRACK' DE EXECUTIONS E ASSIM POR DIANTE, MAS __ QUE TAMBÉM VAI TER ALGUM BEHAVIOR CUSTOMIZAOD...
    //ACT

    //TODO - logFunctionSpy.mockImplementationOnce(() => { console.log('your logic') }); --> use 'mockImplementationOnce' se vc quiser que o comportamento de 'execute uma função dummy/vazia' seja substituída pelo run DA LÓGICA DESSA ANON FUNCTION __ APENAS 1 ÚNICA VEZ (depois disso, o comportamento de sua mocked function/module vai voltar a ser o que era antes, 1 dummy function, vazia)...
    generateReportData(logFunctionSpy);
    //ASSERT

    expect(logFunctionSpy).toHaveBeenCalled(); //? ISTO É UM SPY, E NÃO UMA FUNCTION, E POR ISSO NÃO TEMOS DE USAR '()'
    expect(logFunctionSpy).toHaveBeenCalledTimes(1);
    expect(logFunctionSpy).toHaveBeenCalledWith(
      'Some dummy data for this demo app'
    );
  });
});
