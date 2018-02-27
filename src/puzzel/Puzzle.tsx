import * as React from "react";
import { observable, action } from "mobx";
import { shuffle } from "../core/utils";
import { observer } from "mobx-react";
import Piece from "./Piece";
import { style } from "typestyle";
import PuzzleModel from "./PuzzelModel";
import FlipMove from "react-flip-move";

@observer
export default class Puzzle extends React.Component<{}, {}> {
  model: PuzzleModel = new PuzzleModel();
  render() {
    return (
      <div className={puzzleStyle}>
        <div className="pieces">
          <FlipMove duration={200} easing="ease-out">
            {this.model.pieces.map((number, ix) => (
              <Piece
                key={number}
                index={ix}
                number={number}
                puzzelModel={this.model}
              />
            ))}
          </FlipMove>
        </div>
        <button onClick={() => this.model.randomize()}>Randomize!</button>
      </div>
    );
  }
}

const puzzleStyle = style({
  background: "white",
  padding: 10,
  width: 300
});
