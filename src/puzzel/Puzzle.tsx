import * as React from "react";
import { observable, action } from "mobx";
import { shuffle } from "../core/utils";
import { observer } from "mobx-react";
import Piece from "./Piece";
import { style } from "typestyle";
import PuzzleModel from "./PuzzelModel";

@observer
export default class Puzzle extends React.Component<{}, {}> {
  model: PuzzleModel = new PuzzleModel();
  render() {
    return (
      <div className={puzzleStyle}>
        <div className="pieces">
          {this.model.pieces.map((value, ix) => (
            <Piece
              key={value}
              index={ix}
              value={value}
              puzzelModel={this.model}
            />
          ))}
        </div>
        <button onClick={() => this.model.randomize()}>Randomize!</button>
      </div>
    );
  }
}

const puzzleStyle = style({
  background: "lightgrey",
  border: "5px solid blue",
  padding: 10,
  width: 300
});
