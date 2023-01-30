'use strict';

const alphaBlocks = require('./alphaBlocks');

const findSuitableBlocks = (letter) => 
  // look at all of the blocks
  alphaBlocks.filter((block) =>
    // one of the letters on this block must be the one that we need
    block.letters.includes(letter));

function answer(word) {  
    // any of these blocks would fit the bill...
  const matchingBlocks = word.split('').map((letter) => {
    // these are the matching blocks (coming from our filter function)...
    const blocksContaining = findSuitableBlocks(letter);
    // ... and this is the index of those suitable blocks
    const suitableBlocks = blocksContaining.map((matchedBlock) => 
      alphaBlocks.findIndex((block) => 
        block.letters === matchedBlock.letters));
    // return an array of each letter in the word and any of the blocks that we could have used
    return ({letter, suitableBlocks});
  });  
  
  console.log("matchingBlocks:", matchingBlocks);
  
  // TODO: actually figure out if we can make this word without using a given block more than once...
  return true;
}

module.exports = answer;
