const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
  it("should round and divide inputs, given the right type", () => {
    const result = calculateNumber('SUM', 6.3, 2.5); // 9
    expect(result).to.equal(9);

    const result1 = calculateNumber('SUBTRACT', 6.3, 2.5); // 3
    expect(result1).to.equal(3);

    const result2 = calculateNumber('DIVIDE', 6.3, 2.5); // 2
    expect(result2).to.equal(2);

    const result3 = calculateNumber('DIVIDE', 5.2, -2.5); // -2.5
    expect(result3).to.equal(-2.5);
  });

  it("should take care of divide by zero", () => {
    expect(calculateNumber('DIVIDE', 4.0, 0.123)).to.equal('Error');
  });

  it("should handle invalid types", () => {
    expect(calculateNumber('INVALID', 3.0, 2.0)).to.equal('Unknown type');
  });
});
