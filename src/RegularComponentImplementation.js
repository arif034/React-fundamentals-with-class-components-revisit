import { Component } from "react";

class RegularComponentImplementation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState((prevState) => {
        return {
          count: prevState.count
        };
      });
    }, 1000);
  };

  onChangeCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count };
    });
  };

  render() {
    console.log("logging change");
    return (
      <div>
        <button onClick={this.onChangeCount}>
          count : {this.state.count}
        </button>
      </div>
    );
  }
}

export default RegularComponentImplementation;
