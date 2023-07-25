// Bind in Javascript
class React {
  constructor() {
    this.library = "React";
    this.server = "https://localhost.2000";

    document
      .querySelector("button")
      .addEventListener("click", this.getServerUrl.bind(this.server));
  }
  getServerUrl() {
    console.log("Button Clicked");
    console.log(this);
  }
}
const app = new React();
