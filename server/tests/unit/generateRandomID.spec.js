/* eslint-disable no-undef */
const generateRandomID = require('../../src/utils/generateRandomId');

describe('generateRandomID', () => {
  it('should generate a random ID', () => {
    const id = generateRandomID();

    expect(id.length).toBe(8);
  });
});
