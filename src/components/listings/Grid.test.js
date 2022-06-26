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

const data2 = ['React Native', 'React'];

test('The list of courses should contain "React" and "React native"', () => {
  expect(data2).toEqual(expect.arrayContaining(['React Native', 'React']));
});

// Objects

test('The first course should have a property "title"', () => {
  expect(data[0]).toHaveProperty('title');
});

test('The first course should have a property "views" and value of 31,266', () => {
  expect(data[0]).toHaveProperty('views', '31,266');
});
