import * as React from "react";
import { style } from "typestyle";
export default class Piece extends React.Component<{ number: number }, {}> {
  render() {
    return <div className={pieceStyle}>{this.props.number}</div>;
  }
}

const pieceStyle = style({
  height: 100,
  width: 100,
  display: "inline-block",
  $nest: {
    "&:hover": {
      background: "yellow"
    }
  }
});
