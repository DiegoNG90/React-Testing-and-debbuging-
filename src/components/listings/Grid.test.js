import data from '../../data/courses.json';

const numItems = data.length;

describe('Number tests', () => {
  test('Number of items should be 12', () => {
    expect(numItems).toBe(12);
  });

  test('Number of items should be greator or equal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});
// Nums

const dataTest = data[0].title;
// Strings
describe('String tests', () => {
  test('Title should contain "JS" in this title', () => {
    expect(dataTest).toMatch(/JS/);
  });
  test('Title should contain "React" in this title', () => {
    expect(dataTest).toContain('React');
  });
});

// Arrays & Objects

const data2 = ['React Native', 'React'];
describe('Array and objects tests', () => {
  test('The list of courses should contain "React" and "React native"', () => {
    expect(data2).toEqual(expect.arrayContaining(['React Native', 'React']));
  });
  test('The first course should have a property "title"', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('The first course should have a property "views" and value of 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});
