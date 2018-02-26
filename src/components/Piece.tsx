import * as React from "react";
export default class Piece extends React.Component<{ number: number }, {}> {
  render() {
    return <div>{this.props.number}</div>;
  }
}
