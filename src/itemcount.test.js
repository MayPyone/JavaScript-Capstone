import { items } from './itemcount.js';

describe('counting data', () => {
  test('the number should be "1,2,3,4,5"', () => {
    const a = [1, 2, 3, 4, 5];
    let i = 0;
    a.forEach((element) => {
      expect(items(element)).toBe(i += 1);
    });
  });
});