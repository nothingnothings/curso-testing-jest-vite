import { it, expect, describe, vi } from 'vitest';

import { extractPostData } from './posts';

class MockFormData {
  ///VAMOS USAR ISTO, NO LUGAR DO CONSTRUCTOR DE 'FormData'...
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  get(key) {
    //substitui 'form.get('title')' e 'form.get('content')'...
    return this[key]; //this.content, this.title
  }
}

const mockedFormDataConstructor = vi.fn((title, content) => {
  return new MockFormData(title, content);
});

describe('extractPostData', () => {
  it('should extract the formData from the postData object', () => {
    //ARRANGE
    // const postData = new FormData({ ///! isso está ERRADO... --> não devemos usar a function 'FormData' DE VERDADE, E SIM __ DEVEMOS USAR 1 FUNCTION/CLASS COM AS MESMAS FUNCIONALIDADES CORE, MAS QUE NAÕ VAI EXECUTAR O CÓDIGO DE VERDADE, E SIM 1 MOCK...
    //   title: 'exemplo',
    //   content: 'exemplo',
    // });
    const postData = mockedFormDataConstructor('exemplo1', 'exemplo2'); // * isso está certo (com isso, mockamos o uso da function 'FormData' de verdade, e usamos 1 mock no lugar dela)...

    //ACT
    const result = extractPostData(postData); //extraímos a data contida nesse object criado a partir do constructor mockado de 'FormData'...
    //ASSERT
    expect(result).toEqual({ title: 'exemplo1', content: 'exemplo2' });
  });
});
