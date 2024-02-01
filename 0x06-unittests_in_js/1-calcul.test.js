const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  it("should round and divide inputs, given the right type", () => {
    assert.strictEqual(calculateNumber('SUM', 6.3, 2.5), 9);
    assert.strictEqual(calculateNumber('SUBTRACT', 6.3, 2.5), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 6.3, 2.5), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 5.2, -2.5), -2.5);
  });

  it("should take care of divide by zero", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.0, 0.123), 'Error');
  });

  it("should handle invalid types", () => {
    assert.strictEqual(calculateNumber('INVALID', 3.0, 2.0), 'Unknown type');
  });
});
