import * as React from "react";
import { style } from "typestyle";
import PuzzelModel from "./PuzzelModel";
import { observer } from "mobx-react";

interface Props {
  index: number;
  number: number;
  puzzelModel: PuzzelModel;
}

@observer
export default class Piece extends React.Component<Props, {}> {
  render() {
    return (
      <div
        className={pieceStyle(
          this.props.puzzelModel.isActive(this.props.index),
          this.props.number
        )}
        onClick={() => this.props.puzzelModel.select(this.props.index)}
      >
        {this.props.number != null ? (
          <img src={this.props.puzzelModel.image} />
        ) : (
          <span />
        )}
      </div>
    );
  }
}

const pieceStyle = (active, index) => {
  return style({
    height: 100,
    width: 100,
    display: "inline-block",
    background: !active ? "inherit" : "grey",
    overflow: "hidden",
    position: "relative",
    transform: "translate3d(0, 0, 0)",
    $nest: {
      "&:hover": {
        opacity: 0.5
      },
      img: {
        marginTop: -Math.floor(index / 3) * 100,
        marginLeft: -Math.abs(index % 3) * 100
      }
    }
  });
};
