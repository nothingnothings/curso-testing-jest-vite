import { it, expect, describe } from 'vitest';
import { vi } from 'vitest';
import { showError } from './dom';
import { Window } from 'happy-dom';

import fs from 'fs'; // usado para IMPORTAR 1 FILE (o 'index.html') NO VIRTUAL DOM PRODUZIDO PELO 'HAPPY-DOM'...
import path from 'path'; // usado para IMPORTAR 1 FILE NO VIRTUAL DOM PRODUZIDO PELO 'HAPPY-DOM'...

const htmlDocPath = path.join(process.cwd(), 'index.html'); //path de noso arquivo html
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString(); //conteúdo de nosso arquivo html

const window = new Window(); //criamos 1 'window' (1 DOM VIRTUAL) com o 'happy-dom'...
const document = window.document; //criamos 1 'document' (1 DOM VIRTUAL) com o 'happy-dom'...

document.write(htmlDocumentContent); //escrevemos o conteúdo de nosso arquivo html no 'document' (1 DOM VIRTUAL) criado com o 'happy-dom'...

vi.stubGlobal('document', document); //criamos 1 stub global para o 'document' (1 DOM VIRTUAL) criado com o 'happy-dom'...

// describe('first test', () => {
//   ISSO FALHARÁ --> FALHARÁ PQ NÃO TEMOS, NATIVAMENTE, ACESSO AO 'DOM' COM O VITEST...
//   it('first test', () => {
//     ganharemos 'document is not defined'...
//     showError('some message');
//   });
// });

describe('showError', () => {
  it('should add an error paragraph to the id="errors" element', () => {
    //ARRANGE
    const message = 'some error';
    const errorsElement = document.getElementById('errors');
    //ACT
    showError(message);
    const errorParagraph = errorsElement.firstElementChild;
    //ASSERT
    expect(errorParagraph).not.toBeNull(); //verificamos SE ESSE ELEMENT NÃO ESTÁ COMO 'null' (ou seja, se ele EXISTE)...
  });
});

// --> SE O ELEMENTO PARAGRAPH NÃO EXISTISSE DENTRO

// DAQUELE ELEMENT,

// ELE SERIA 'null' (

//   é assim que fazemos, para checar se coisas FORAM RENDERIZADAS NO DOM...
// )
