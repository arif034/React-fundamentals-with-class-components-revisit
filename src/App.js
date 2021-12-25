import { Component } from "react";
import "./styles.css";
import PureComponentImplementation from "./PureComponentImplementation.js";
import RegularComponentImplementation from "./RegularComponentImplementation.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <PureComponentImplementation />
        <br />
        <br />
        <RegularComponentImplementation />
      </div>
    );
  }
}
export default App;
