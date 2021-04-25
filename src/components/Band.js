import React, { Component } from "react";

class Band extends Component {
  render() {
    return (
      <li key={this.props.id}>
        {this.props.text}
        <button onClick={() => this.props.delete(this.props.id)}>DELETE</button>
      </li>
    );
  }
}

export default Band;
