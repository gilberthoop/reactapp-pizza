const menu = require("../data/menu.json");
const TAX_RATE = 1.12;
let price = 0;
let orders = [];

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
      }
    });
    return Math.round(price * 100) / 100;
  };

  static getTotalPrice(orders) {
    let total = 0;
    orders.forEach(item => {
      total += item.price;
    });
    return Math.round(total * 100) / 100;
  };
}

module.exports = PriceCalculator;
