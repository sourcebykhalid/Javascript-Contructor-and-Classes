// Getters and Setters in JAvascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get firstName() {
    return this._firstName.toUpperCase();
  }
  set firstName(newName) {
    this._firstName = newName;
  }
}
const newStudent = new Student("Alex", "Morgan");
console.log(newStudent.firstName);
Student.firstName = "John";
console.log(Student.firstName);
