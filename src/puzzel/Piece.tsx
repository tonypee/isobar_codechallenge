import * as React from "react";
import { style } from "typestyle";
import PuzzelModel from "./PuzzelModel";
import { observer } from "mobx-react";

interface Props {
  index: number;
  value: string;
  puzzelModel: PuzzelModel;
}

@observer
export default class Piece extends React.Component<Props, {}> {
  render() {
    return (
      <div
        className={pieceStyle(
          this.props.puzzelModel.isActive(this.props.index)
        )}
        onClick={() => this.props.puzzelModel.select(this.props.index)}
      >
        {this.props.value == null ? "x" : this.props.value}
        {this.props.puzzelModel.isTouching(this.props.index) ? "y" : "n"}
      </div>
    );
  }
}

const pieceStyle = active =>
  style({
    height: 100,
    width: 100,
    display: "inline-block",
    background: !active ? "inherit" : "grey",
    $nest: {
      "&:hover": {
        background: "yellow"
      }
    }
  });
