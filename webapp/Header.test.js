import { Header } from './Header.js';

test('Gjeneron një titull HTML me tekstin e pritshëm', () => {
  const element = Header();
  expect(element.tagName).toBe('H1');
  expect(element.textContent).toBe('Mirë se erdhe në testin e aplikacionin DevOps');
});
