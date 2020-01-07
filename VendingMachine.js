// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

class VendingMachine {
  constructor() {
    this.balance = 0;
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    this.selectedColumn = 0;
    this.selectedRow = "";

    const juice = { name: `Apple Juice`, price: 350, count: 5 };
    const coffee = { name: "Tully's", price: 250, count: 7 };
    const tea = { name: "Green Tea", price: 150, count: 10 };
    const soda = { name: "Coca Cola", price: 150, count: 9 };
    const juice1 = { name: `Apple Juice`, price: 350, count: 5 };
    const coffee1 = { name: "Tully's", price: 250, count: 7 };
    const tea1 = { name: "Green Tea", price: 150, count: 10 };
    const soda1 = { name: "Coca Cola", price: 150, count: 9 };
    const juice2 = { name: `Apple Juice`, price: 350, count: 0 };
    const coffee2 = { name: "Tully's", price: 250, count: 7 };
    const tea2 = { name: "Green Tea", price: 150, count: 0 };
    const soda2 = { name: "Coca Cola", price: 150, count: 9 };
    const juice3 = { name: `Apple Juice`, price: 350, count: 5 };
    const coffee3 = { name: "Tully's", price: 250, count: 7 };
    const tea3 = { name: "Green Tea", price: 150, count: 10 };
    const soda3 = { name: "Coca Cola", price: 150, count: 9 };

    this.inventory = [
      [juice, coffee, tea, soda],
      [juice1, coffee1, tea1, soda1],
      [juice2, coffee2, tea2, soda2],
      [juice3, coffee3, tea3, soda3],
    ];
  }

  insertCoin(money) {
    this.balance = this.balance + money;
    this.till[money] += 1;
  }
  changeReturn() {
    console.log(this.till);
    this.balance = 0;
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
  }
  pressButton(place) {
    typeof place === "string"
      ? (this.selectedRow += place)
      : (this.selectedColumn = place);
  }
  dispenseProduct() {
    console.log("column:" + this.selectedColumn);
    console.log("row:" + this.selectedRow);
    let rowNumber = 0;
    if (this.selectedRow === "A") rowNumber = 0;
    if (this.selectedRow === "B") rowNumber = 1;
    if (this.selectedRow === "C") rowNumber = 2;
    if (this.selectedRow === "D") rowNumber = 3;
    if (this.inventory[rowNumber][this.selectedColumn - 1].count === 0) {
      console.error(`This is not available!!`);
      return `This is not available!!`;
    }
    if (
      this.balance < this.inventory[rowNumber][this.selectedColumn - 1].price
    ) {
      console.error("your balance is insufficient");
      return "your balance is insufficient";
    }
    this.inventory[rowNumber][this.selectedColumn - 1].count--;

    console.log(
      "Here is your " + this.inventory[rowNumber][this.selectedColumn - 1].name
    );
    let change =
      this.balance - this.inventory[rowNumber][this.selectedColumn - 1].price;
    let number500 = 0;
    let number100 = 0;
    let number50 = 0;
    let number10 = 0;
    let change2 = change;
    if (change2 / 500 >= 1) {
      number500 += Math.floor(change2 / 500);
      change2 = change2 - 500 * Math.floor(change2 / 500);
    }
    if (change2 / 100 >= 1) {
      number100 += Math.floor(change2 / 100);
      change2 = change2 - 100 * Math.floor(change2 / 100);
    }
    if (change2 / 50 >= 1) {
      number50 += Math.floor(change2 / 50);
      change2 = change2 - 50 * Math.floor(change2 / 50);
    }
    if (change2 / 10 >= 1) {
      number10 += Math.floor(change2 / 10);
      change2 = change2 - 10 * Math.floor(change2 / 10);
    }
    console.log(
      `500:${number500}, 100:${number100}, 50:${number50}, 10:${number10}`
    );
    return change;
  }
}

module.exports = VendingMachine;
