import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';

const numberCollection = new NumberCollection([3, 1, -7, 10]);
numberCollection.sort();
console.log(numberCollection.collection);

// #task bug detected (not working depending on string's length)
// const characterCollection = new CharacterCollection('Xaaayb');
// characterCollection.sort();
// console.log(characterCollection.collection);

// #task add linked list implementation
// ...
