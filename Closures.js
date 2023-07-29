// Javascript Closures
// function funcOne() {
//   const name = "Jessy";
//   function funcTwo() {
//     console.log(name);
//   }
//   return funcTwo;
// }
// const myFunc = funcOne();
// myFunc();

function click(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}
document.querySelector("#Green").onclick = click("green");
document.querySelector("#Orange").onclick = click("orange");
document.querySelector("#Black").onclick = click("black");
