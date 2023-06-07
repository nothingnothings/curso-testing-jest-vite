///cada module que está dentro de '__mocks__' é um MOCK IMPLEMENTATION...
//(será 1 module que vc vai querer mockar) -->
//vc vai querer SUBSTITUIR O COMPORTAMENTO DEFAULT DESSE MODULE,
// AS PROPERTIES E METHODS, POR ESSAS PROPERTIES E METHODS QUE VC VAI DEFINIR NESTA FILE

import { vi } from 'vitest';

export const promises = {
  writeFile: vi.fn((path, data) => {
    // com isso, podemos escrever nossa própria implementation para essa spy function...
    //e vamos IMITAR O FORMATO DO 'writeFile' DO 'fs', mas sem o actual write de content a 1 file em nosso file system (sem side effects, portanto)...
    return new Promise((resolve, reject) => {
      resolve(); //fazemos 'resolve()' to nothing, exatamente como na function original de 'fs.writeFile()'..
    });
  }),
};
