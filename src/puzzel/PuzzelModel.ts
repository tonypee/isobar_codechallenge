import { observable, action } from "mobx";
import { shuffle } from "../core/utils";

export default class PuzzleModel {
  @observable pieces: number[] = [1, 2, 3, 4, 5, 6, 7, 8, null];
  @observable solved: string = this.getHash();
  @observable current: number = this.pieces.indexOf(null);
  @observable
  images: string[] = [
    require("../images/1.png"),
    require("../images/2.png"),
    require("../images/3.png")
  ];
  @observable image: string = this.images[0];

  constructor() {
    this.randomize();
  }

  @action
  randomize() {
    this.pieces = shuffle(this.pieces);
    this.current = this.pieces.indexOf(null);
  }

  @action
  select(index: number) {
    if (!this.isTouching(index)) {
      return;
    }
    this.pieces[this.current] = this.pieces[index];
    this.pieces[index] = null;
    this.current = index;

    if (this.getHash() == this.solved) {
      window.alert("CONGRATULATIONS!!");
    }
  }

  @action
  changeImage(image) {
    this.image = image;
    this.randomize();
  }

  getHash() {
    return JSON.stringify(this.pieces);
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
