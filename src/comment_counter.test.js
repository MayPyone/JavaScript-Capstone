import { comment_count } from './comment_counter.js';

describe('counting comments ', () => {
  test('the number of comments should be 6', () => {
    const a = [1, 2, 3, 4, 5];
    let i = 0;
    i = comment_count(a);
    expect(i).toBe(5);
  });

  test('the number of comments should be 15', () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let i = 0;
    i = comment_count(a);
    expect(i).toBe(15);
  });
});
