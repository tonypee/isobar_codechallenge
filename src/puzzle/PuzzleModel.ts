import { observable, action } from "mobx";

export default class PuzzleModel {
  @observable pieces: number[] = [1, 2, 3, 4, 5, 6, 7, 8, null];
  @observable original: number[] = this.pieces.concat([]);
  @observable solved: string = this.getHash();
  @observable current: number = this.pieces.indexOf(null);
  @observable
  images: string[] = [
    require("../images/1.png"),
    require("../images/2.png"),
    require("../images/3.png")
  ];
  @observable image: string = this.images[0];
  @observable preview: boolean = false;
  @observable randomizing: boolean = false;

  constructor() {
    this.randomize();
  }

  // randomize steps forward in time, so that the puzzle is always solvable.
  @action
  randomize() {
    this.randomizing = true;
    let n = 50;
    while (n) {
      let selected;
      while (true) {
        const ix = Math.floor(Math.random() * (this.pieces.length - 1));
        const selected = this.pieces[ix];
        if (selected && this.isTouching(selected)) {
          this.select(selected);
          break;
        }
      }
      n--;
      if (n == 0) {
        this.randomizing = false;
      }
    }
  }

  @action
  select(index: number) {
    if (!this.isTouching(index)) {
      console.log("not touching", index);
      return;
    }
    this.pieces[this.current] = this.pieces[index];
    this.pieces[index] = null;
    this.current = index;

    if (this.getHash() == this.solved && !this.randomizing) {
      setTimeout(() => {
        window.alert("CONGRATULATIONS!!");
      }, 300);
    }
  }

  @action
  changeImage(image) {
    this.image = image;
    this.randomize();
  }

  @action
  startPreview() {
    this.preview = true;
  }

  @action
  endPreview() {
    this.preview = false;
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
