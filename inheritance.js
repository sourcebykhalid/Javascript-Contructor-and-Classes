// Inheritance of Javascript
class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Hello I am a user with the Username -${this.username}-`);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`${this.username} has logged in`);
  }
}
const newTeacher = new Teacher("Rick", "rick67@hushmail.com", "Qwerr234#");
// console.log(newTeacher);
newTeacher.addCourse();

const hod = new User("Micheal");
hod.logMe();
// console.log(newTeacher === hod);
// console.log(newTeacher instanceof User);
// console.log(hod instanceof User);
// console.log(hod instanceof Teacher);
// console.log(newTeacher instanceof Teacher);

// 2
class Person {
  constructor(name, age, rank) {
    this.name = name;
    this.age = age;
    this.rank = rank;
  }
  getUserDetails = function () {
    return `The name of Partcipant is ${this.name}, age is ${this.age} and the rank achieved is ${this.rank}`;
  };
}
const person1 = new Person("Alex", 23, 45);
console.log(person1.getUserDetails());
// const person2 = new Person("Xerxes", 24, 48);
// console.log(person2.getUserDetails());

class Total extends Person {
  constructor(rank, runner) {
    super("", 0, rank);
    this.runner = runner;
  }
  getRunner = function () {
    return `The name of the Runner Participant is ${this.runner} and rank is ${this.rank}`;
  };
}
const runner1 = new Total(56, "Mike");
console.log(runner1.getRunner());
