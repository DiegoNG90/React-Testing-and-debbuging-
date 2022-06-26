import data from '../../data/courses.json';

const numItems = data.length;
// Nums
test('Number of items should be 12', () => {
  expect(numItems).toBe(12);
});

test('Number of items should be greator or equal to 12', () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

// Strings

const dataTest = data[0].title;

test('Title should contain "JS" in this title', () => {
  expect(dataTest).toMatch(/JS/);
});

test('Title should contain "React" in this title', () => {
  expect(dataTest).toContain('React');
});

// Arrays
