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
    const juice2 = { name: `Apple Juice`, price: 350, count: 5 };
    const coffee2 = { name: "Tully's", price: 250, count: 7 };
    const tea2 = { name: "Green Tea", price: 150, count: 10 };
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
}

module.exports = VendingMachine;
