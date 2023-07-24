// Constructor Function
function User(username, loginId, isLoggedIn) {
  this.username = username;
  this.loginId = loginId;
  this.isLoggedIn = isLoggedIn;
  // return this; < implicitly defined >
}
const userOne = new User("Alex", 349856, true);
const userTwo = new User("Mike", 783465, false);
const userThree = new User("Ross", 7836535, true);
console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log(userOne.constructor);

const person = {
  name: "John",
  age: 23,
  role: "Frontend",
  changeRole: function () {
    console.log("Role is changed");
  },
};
console.log(Object.getOwnPropertyDescriptor(person, "role"));

Object.defineProperty(person, "role", {
  // writable: false,
  enumerable: true,
});
console.log(Object.getOwnPropertyDescriptor(person, "role"));
for (let [key, value] of Object.entries(person)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
