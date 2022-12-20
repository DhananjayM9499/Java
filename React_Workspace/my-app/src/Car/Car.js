import { Component } from "react";

class Car extends Component {
  constructor() {
    super();
    this.state = {
      brand: "M&M",
      model: "XUV800",
      color: "Pink",
    };
    console.log("Car Constructor()...");
  }

  changeColor = () => {
    console.log("color change karo re baba");
    this.setState({ color: "Red" });
  };

  render() {
    console.log("Car render()...");
    return (
      <div>
        <h2>
          This is my Car: {this.state.brand} {this.state.model}
        </h2>
        <h3>Color: {this.state.color}</h3>

        <button onClick={this.changeColor}>Click to Change Color</button>
      </div>
    );
  }
}

export default Car;
