import { Component } from "react";
import "./styles.css";
// import PureComponentImplementation from "./PureComponentImplementation.js";
// import RegularComponentImplementation from "./RegularComponentImplementation.js";
import Components from "./Components.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <PureComponentImplementation />
        <br />
        <br />
        <RegularComponentImplementation /> */}
        <Components />
      </div>
    );
  }
}
export default App;
