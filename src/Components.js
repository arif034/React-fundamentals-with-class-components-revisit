import { Component } from "react";
import HOCComponent from "./HOCComponents.js";
class Components extends Component {
  render() {
    const { count, updateCount } = this.props;
    return (
      <button onClick={updateCount}>
        Clicked {count} times
      </button>
    );
  }
}
export default HOCComponent(Components);
