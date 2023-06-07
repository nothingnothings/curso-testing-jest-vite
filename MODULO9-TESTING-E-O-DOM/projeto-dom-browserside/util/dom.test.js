import { it, expect, describe } from 'vitest';
import { showError } from './dom';

describe('first test', () => { //ISSO FALHARÁ --> FALHARÁ PQ NÃO TEMOS, NATIVAMENTE, ACESSO AO 'DOM' COM O VITEST...
  it('first test', () => { //ganharemos 'document is not defined'...
    showError('some message');
  });
});
