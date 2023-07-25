// StaticProp (Properties) in Javascript
class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createdId() {
    return "59263";
  }
}
const alien = new User("Alien");
// console.log(alien.createdId());
class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const details = new Teacher("Grime", "grime456@hotmail.com");
// details.logMe();
console.log(details.createdId());
