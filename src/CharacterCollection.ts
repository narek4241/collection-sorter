import { Sorter } from './Sorter';

export class CharacterCollection extends Sorter {
  constructor(public collection: string) {
    super();
  }

  get length() {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.collection[leftIndex].toLowerCase() >
      this.collection[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.collection.split('');

    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.collection = characters.join('');
  }
}
