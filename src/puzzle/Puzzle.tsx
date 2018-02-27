import * as React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Piece from "./Piece";
import { style } from "typestyle";
import PuzzleModel from "./PuzzleModel";
import FlipMove from "react-flip-move";

@observer
export default class Puzzle extends React.Component<{}, {}> {
  model: PuzzleModel = new PuzzleModel();
  render() {
    const pieces = this.model.preview ? this.model.original : this.model.pieces;
    return (
      <div className={puzzleStyle}>
        <div className="pieces">
          <FlipMove
            duration={this.model.randomizing ? 100 : 200}
            easing="ease-out"
          >
            {pieces.map((number, ix) => (
              <Piece
                key={`n${number}`}
                index={ix}
                number={number}
                puzzelModel={this.model}
              />
            ))}
          </FlipMove>
        </div>
        <button onClick={() => this.model.randomize()}>Randomize!</button>
        <button
          onMouseDown={() => this.model.startPreview()}
          onMouseUp={() => this.model.endPreview()}
          onTouchStart={() => this.model.startPreview()}
          onTouchEnd={() => this.model.endPreview()}
        >
          Preview
        </button>
        <div>
          {this.model.images.map(image => (
            <img
              key={image}
              src={image}
              className="thumb"
              onClick={() => this.model.changeImage(image)}
            />
          ))}
        </div>
      </div>
    );
  }
}

const puzzleStyle = style({
  background: "white",
  padding: 10,
  width: 300,
  lineHeight: 0,
  $nest: {
    ".thumb": {
      width: 50,
      height: 50,
      margin: "10px 10px 0 0"
    },
    button: {
      margin: "10px 5px 0 0"
    }
  }
});
