import { Component } from "react";

const HOCComopnent = (OldComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    updateCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <OldComponent
          count={this.state.count}
          updateCount={this.updateCount}
        />
      );
    }
  }
  return NewComponent;
};

export default HOCComopnent;
