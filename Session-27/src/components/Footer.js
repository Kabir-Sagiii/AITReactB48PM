import { Component } from "react";

export class Footer extends Component {
  componentDidMount() {}

  componentDidUpdate() {}
  constructor() {
    super();
    this.state = {
      name: "Footer State",
    };
  }
  render() {
    return (
      <div>
        <h2>Footer Class Component : {this.state.name}</h2>
        <button
          onClick={() => {
            this.setState({
              name: "Footer Updated",
            });
          }}
        >
          Update State
        </button>
      </div>
    );
  }
}
