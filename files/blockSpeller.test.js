'use strict';

const answer = require('./blockSpeller');

const scenarios = [
  {word: "A", shouldPass: true},
  {word: "BARK", shouldPass: true},
  {word: "BOOK", shouldPass: false},
  {word: "TREAT", shouldPass: true},
  {word: "COMMON", shouldPass: false},
  {word: "SQUAD", shouldPass: true},
  {word: "CONFUSE", shouldPass: true},
];

describe('answer', () => {
  scenarios.forEach((scenario) => {
    it(`${scenario.shouldPass ? "Should" : "Should not"} be able to spell ${scenario.word}`, () => {
      expect(answer(scenario.word)).toEqual(scenario.shouldPass);
    });
  });
});
