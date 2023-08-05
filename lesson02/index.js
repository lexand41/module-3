'use strict';

const Goods = function(price, title, discount) {
  this.price = price;
  this.title = title;
  this.discount = discount;
}

const FoodGoods = function(price, title, discount = 0, calories = 0) {
  Goods.call(this, price, title, discount);
  this.calories = calories;
};

const СlothingGoods = function(price, title, discount, material) {
  Goods.call(this, price, title, discount);
  this.material = material;
};

const TechnicsGoods = function(price, title, discount, typeEquipment) {
  Goods.call(this, price, title, discount);
  this.typeEquipment = typeEquipment;
};

const milk = new FoodGoods(100, 'Простоквашино', 10, 300);
const jacket = new СlothingGoods(4000, 'jacket', 5, 'softshell');
const laptop = new TechnicsGoods(84000, 'hp victus 16', 15, 'laptops');

class Cart {
  constructor() {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
  }

  increaseCount() {
    this.count += 1; 
  }

  calculateItemPrice(discount) {
    const sum = this.goods.reduce((sum, e) => sum + e.price, 0);
    this.totalPrice = sum - sum * discount / 100; 
    return this.totalPrice;
  }

  addGoods({title, price, discount}) {
    this.goods.push({title, price, discount});
    this.increaseCount();
    this.calculateItemPrice(discount);
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  clear() {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
  }

  print() {
    console.log(JSON.stringify(this.goods));
    console.log(`Количество товаров в корзине: ${this.count}`);
    console.log(`Сумма к оплате: ${this.getTotalPrice()}`);
  }
};

const good = new Cart();
good.addGoods(milk)
good.addGoods(jacket)
good.addGoods(laptop)
// good.clear();
good.print();

