const menu = require("../data/menu.json");
const TAX_RATE = 1.12;
let price = 0;

class PriceCalculator {
  constructor(name, size, quantity) {
    this.name = name;
    this.size = size;
    this.quantity = quantity;
  }

  getPrice = () => {
    menu.forEach(item => {
      if (item.name === this.name) {
        this.size = this.size.toLowerCase();
        price = item.cost[this.size] * TAX_RATE * this.quantity;
        console.log(item.name, this.name);
        console.log(this.size);
      }
    });

    return Math.round(price * 100) / 100;
  };
}

module.exports = PriceCalculator;
