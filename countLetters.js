/* -
Write a function countLetters that can return to us
all the unique characters that exist in a string that
is passed into the function.

function should also report back how many instances of
each letter were found in the string.

Functions can only return one thing. Can be a primitive data type:
number, a boolean, null or a string.

needs to return an object that can represent the stats for the sentence
it is given: all the characters found in the input string, and their
respective counts.

What should the object returned back by countLetters look like?

*Note that we are skipping and not counting spaces*

-----------------------------------------------------*/

const countLetters = function (string) {

  // taken from https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
  // regexp \s finds whitespace - g is global flag (match all \s instances);
  var stringNoSpace = string.replace(/\s/g, '').toLowerCase();

  var letterCount= {};

  // index through string
  for (let item of stringNoSpace) {

    // check if key already exists
    if (letterCount[item] === undefined) {
      letterCount[item] = 0;
    }

    // create key-value pairs for each letter
    letterCount[item] += 1;
  }


  // return instances of chars in passed string in object
  return letterCount;
};


console.log(countLetters("Lighthouse in the house"));
console.log({
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});