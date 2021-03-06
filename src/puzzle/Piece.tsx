import * as React from "react";
import { style } from "typestyle";
import PuzzelModel from "./PuzzleModel";
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
        className={pieceStyle(this.props.number)}
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

const pieceStyle = index => {
  return style({
    height: 96,
    width: 96,
    margin: 2,
    display: "inline-block",
    background: "grey",
    overflow: "hidden",
    position: "relative",
    transform: "translate3d(0, 0, 0)",
    $nest: {
      img: {
        marginTop: -Math.floor((index - 1) / 3) * 100,
        marginLeft: -Math.abs((index - 1) % 3) * 100
      }
    }
  });
};
