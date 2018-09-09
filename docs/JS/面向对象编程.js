var Animal = function(name, price, action) {
  // 私有方法
  let animalName = name;
  // 对象公有属性
  this.name = name;
  this.price = price;
  // 对象共有方法
  this.action = function() {
    console.log(action);
    return 1;
  }
}
// 类的静态公有属性
Animal.prototype.eatAnimal = true;
// 类的静态公有方法
Animal.prototype.animalJump = function() {
  return false;
};
let cat = new Animal('cat', 100, 'run');
console.log(cat.name + '=' + cat.animalName);
console.log(cat.action() + '=' + cat.eatAnimal);