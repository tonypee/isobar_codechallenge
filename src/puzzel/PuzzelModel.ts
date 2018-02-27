import { observable, action } from "mobx";
import { shuffle } from "../core/utils";

export default class PuzzleModel {
  @observable pieces: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", null];
  @observable current: number = this.pieces.indexOf(null);

  @action
  randomize() {
    this.pieces = shuffle(this.pieces);
  }

  @action
  select(index: number) {
    if (!this.isTouching(index)) {
      return;
    }
    this.pieces[this.current] = this.pieces[index];
    this.pieces[index] = null;
    this.current = index;
  }

  isActive(index: number) {
    return index == this.current;
  }

  // find if the square is a distance of 1 from the currently active index
  isTouching(index: number) {
    const dx = Math.abs(Math.abs(this.current % 3) - Math.abs(index % 3));
    const dy = Math.abs(Math.floor(this.current / 3) - Math.floor(index / 3));
    return dx + dy == 1;
  }
}
