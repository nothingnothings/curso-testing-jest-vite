// import { test } from 'vitest';  // é possível deixar de importar diretamente o 'test' do vitest, se vc escrever '--globals' lá no run de 'npm test', lá na package.json do seu project... mas isso não é recomendado, pq o suporte do IDE sem o impotrt não é tão bom..
// ? 'test' É A MESMA COISA QUE A FUNCTION DE 'it()'...

import { it, expect } from 'vitest';

import { add } from './math.js'; // DEVEMOS USAR/RODAR NOSSA FUNCTION DENTRO DO TEST, COM 'expect().toBe()'...

it('should summarize all number values in an array', () => {
  const result = add([1, 2, 3, 4, 5]);
  expect(result).toBe(15);
//   expect(result).toBe(6);


  expect(result).toBe
});
