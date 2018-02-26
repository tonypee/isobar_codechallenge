import * as React from "react";
import { observable, action } from "mobx";
import { shuffle } from "../core/utils";
import { observer } from "mobx-react";
import Piece from "./Piece";
import { style } from "typestyle";

@observer
export default class Puzzle extends React.Component<{}, {}> {
  model: PuzzleModel = new PuzzleModel();
  render() {
    return (
      <div className={puzzleStyle}>
        <div className="pieces">
          {this.model.pieces.map(number => (
            <Piece key={number} number={number} />
          ))}
        </div>
        <button onClick={() => this.model.randomize()}>Randomize!</button>
      </div>
    );
  }
}

class PuzzleModel {
  @observable pieces: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  @action
  randomize() {
    this.pieces = shuffle(this.pieces);
    console.log(JSON.stringify(this.pieces));
  }
}

const puzzleStyle = style({
  background: "lightgrey",
  border: "5px solid blue",
  padding: 10,
  width: 300
});
