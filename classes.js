// Classes in Javascript
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}
const client = new User("Jake", "jake34@gmail.com", "456787");
// console.log(client);
console.log(client.encryptPassword());
console.log(client.changeUsername());
