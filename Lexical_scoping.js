// Lexical Scoping in Javascript
// In the below code snippet the inner func() can access the elements of outer func(), But the outer func() dont have the access of inner func(). But both functions inner() and outer() have the access of Global variables declared outside of the outer function scope
let password = 74335;
function outer() {
  let user = "Alex";
  // console.log(iD);
  function inner() {
    console.log(password);
    let iD = 8635672;
    console.log(user);
  }
  inner();
}
outer();
