//******************Objects*****************************
const mySym = Symbol("Noman King"); //Declaring a symbol
const JsUser = {
  name: "muhammad Noman",
  age: 24,
  location: "goheer town",
  email: "nomanchaudhary1618@gmail.com",
  [mySym]: "Noman King", //This is the way to implement symbols in objects
  isLoggedIn: false,
};
console.log(JsUser.name); //common way to call data from objects
console.log(JsUser["email"]); //Another way to call data from objects
// We can add function also in Objects Like this
JsUser.greeting = function () {
  console.log(`Hello Brother, ${this.name}`); //we can use (this) to access values inside the object
};
console.log(JsUser.greeting());
// How to merge 2 objects.................... But we can use spread operator too which is mostly used
// const hero3 = {...hero,...hero2};********************
//For example
const hero = {
  1: "a",
  2: "b",
};
const hero2 = {
  3: "c",
  4: "d",
};
const hero3 = Object.assign({}, hero, hero2); // *********To merge 2 objects we use object.assign********
console.log(hero3);
