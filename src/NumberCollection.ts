import { Sorter } from './Sorter';

export class NumberCollection extends Sorter {
  collectionLength: number = this.collection.length;
  constructor(public collection: number[]) {
    super();
  }

  get length() {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.collection[leftIndex] > this.collection[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.collection[leftIndex];
    this.collection[leftIndex] = this.collection[rightIndex];
    this.collection[rightIndex] = leftHand;
  }
}
