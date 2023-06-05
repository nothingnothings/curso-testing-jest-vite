import { extractNumbers } from '../parser.js';

export const formExtractor = (event, form) => {
  event.preventDefault();
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);

  return numberInputs;
};
