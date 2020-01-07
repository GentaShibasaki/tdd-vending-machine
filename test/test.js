const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });
  it("should reset balance and till", () => {
    const machine = new VendingMachine();

    machine.insertCoin(500);
    machine.changeReturn();

    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    });
    expect(machine.balance).to.equal(0);
  });

  it("should select row", () => {
    const machine = new VendingMachine();

    machine.pressButton("A");

    expect(machine.selectedRow).to.equal("A");
  });
  it("should select column", () => {
    const machine = new VendingMachine();

    machine.pressButton(1);

    expect(machine.selectedColumn).to.equal(1);
  });

  it("should select column", () => {
    const machine = new VendingMachine();

    machine.pressButton("B");
    machine.pressButton(3);

    expect(machine.selectedColumn).to.equal(3);
    expect(machine.selectedRow).to.equal("B");
  });

  it("should return correct change", () => {
    const machine = new VendingMachine();
    machine.insertCoin(500);
    machine.pressButton("A");
    machine.pressButton(1);

    expect(machine.dispenseProduct()).to.equal(150);
  });

  it("should log an error message if there is no investory", () => {
    const machine = new VendingMachine();
    machine.insertCoin(500);
    machine.pressButton("C");
    machine.pressButton(1);

    expect(machine.dispenseProduct()).to.equal(`This is not available!!`);
  });

  it("should log an error message if the balance is insufficient", () => {
    const machine = new VendingMachine();
    machine.insertCoin(100);
    machine.pressButton("A");
    machine.pressButton(1);

    expect(machine.dispenseProduct()).to.equal("your balance is insufficient");
  });
});
