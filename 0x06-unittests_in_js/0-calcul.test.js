const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calc test", () => {
  it("should round the numbers and return their sum", () => {
    assert.strictEqual(calculateNumber(2.6, 3.5), 7);
    assert.strictEqual(calculateNumber(2.4, 3.5), 6);
    assert.strictEqual(calculateNumber(2.0, 3.0), 5);
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it("should tolerate negative numbers", () => {
    assert.strictEqual(calculateNumber(2.3, -3.5), -1);
  });

  it("should round long decimals", () => {
    assert.strictEqual(calculateNumber(2.4999999999, 5.49999999999), 7);
  })
})