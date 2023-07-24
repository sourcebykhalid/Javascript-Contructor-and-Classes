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
console.log(newTeacher);
newTeacher.addCourse();

const hod = new User("Micheal");
hod.logMe();
console.log(newTeacher === hod);
console.log(newTeacher instanceof User);
console.log(hod instanceof User);
console.log(hod instanceof Teacher);
console.log(newTeacher instanceof Teacher);
