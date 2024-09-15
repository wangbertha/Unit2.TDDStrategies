// --------------------------
//#region Guard
// --------------------------

/**
 * @param {number} a
 * @param {number} b
 * @returns the product of `a` and `b`
 * _unless_ either of the parameters is not a number,
 * in which case the string `"error"` is returned.
 */
function multiplyNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "error";
  }

  return a * b;
}

/**
 * Returns a message about voting based on a person's age
 * 
 * @param {number} age - age of person in question
 * @returns message about voting
 */
function vote(age) {
  if (age >= 18) {
    return 'Who would you like to vote for?';
  }
  return 'You must be 18 or older to vote.';
}

/**
 * Concatenates 2 strings
 * 
 * @param {string} strA - first string to concatenate
 * @param {string} strB - second string to concatenate
 * @returns concatenated string with strA and strB
 */
function concatenateStrings(strA, strB) {
  if (typeof strA !== 'string' || typeof strB !== 'string') {
    return 'error';
  }
  return strA + strB;
}

//#endregion Guard

// --------------------------
//#region Accumulator Variable
// --------------------------

/**
 * @param {int[]} nums
 * @returns the sum of the given array of numbers
 */
function sumArray(nums) {
  let total = 0;
  for (const number of nums) {
    total += number;
  }
  return total;
}

function sumToN(n) {
  if (n <= 0) {
    return 0;
  }
  let sum = 0;
  for (let i=1; i<=n; i++) {
    sum += i;
  }
  return sum;
}

function factorial(n) {
  if (typeof n !== 'number' || n % 1 !== 0 || n < 0) {
    return 'error';
  }
  let prod = 1;
  for (let i=1; i<=n; i++) {
    prod *= i;
  }
  return prod;
}

function buildNArray(n) {
  if (typeof n !== 'number' || n % 1 !== 0) {
    return 'error';
  }
  if (n <= 0) {
    return [];
  }
  let arr = [];
  for (let i=1; i<=n; i++) {
    arr.push(i);
  }
  return arr;
}

//#endregion Accumulator Variable

// --------------------------
//#region Conditional Accumulation
// --------------------------

/**
 * @param {int[]} nums
 * @returns the greatest number in the given array
 */
function findMax(nums) {
  let max = -Infinity;
  for (const number of nums) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

function findLongestString(strArr) {
  let ans = '';
  for (const str of strArr) {
    if (str.length > ans.length) {
      ans = str;
    }
  }
  return ans;
}

function countPresent(attendance) {
  return attendance.filter((kid) => kid).length;
}

function getDnaComplement(dna) {
  let ans = '';
  for (const ch of dna) {
    if (ch === 'A') {
      ans += 'T';
    }
    else if (ch === 'T') {
      ans += 'A';
    }
    else if (ch === 'C') {
      ans += 'G';
    }
    else if (ch === 'G') {
      ans += 'C';
    }
  }
  return ans;
}

//#endregion Conditional Accumulation

// --------------------------
//#region Return Timing
// --------------------------

/**
 * @param {string} song
 * @param {string[]} playlist
 * @returns whether the given song can be found in the playlist
 */
function isSongInPlaylist(song, playlist) {
  for (const s of playlist) {
    if (s === song) {
      return true;
    }
  }
  return false;
}

function isAllEven(nums) {
  for (const num of nums) {
    if (num % 2 !== 0) {
      return false;
    }
  }
  return true;
}

//#endregion Return Timing

// --------------------------
//#region Nested Loops and Arrays
// --------------------------

/**
 * @param {number} cols
 * @param {number} rows
 * @returns a 2D array of the given dimensions filled with "-"
 */
function makeBoard(cols, rows) {
  const board = [];
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push("-");
    }
    board.push(row);
  }
  return board;
}

function evenAndOdd(nums) {
  let evens = [];
  let odds = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      evens.push(num);
    }
    else {
      odds.push(num);
    }
  }
  return [evens, odds];
}

//#endregion Nested Loops and Arrays

// --------------------------
//#region Practice
// --------------------------

function exponentiate(b, p) {
  if (typeof b !== 'number' || typeof p !== 'number' || b % 1 !== 0 || p % 1 !== 0) {
    return 'error';
  }
  if (p < 0) {
    return 'This function does not do negative nth powers.';
  }
  let prod = 1;
  for (let i=0; i<p; i++) {
    prod *= b;
  }
  return prod;
}

function onlyOdds(n) {
  let sum = 0;
  for (let i=1; i<=n; i += 2) {
    sum += i;
  }
  return sum;
}

function bacteriaTime(current, target) {
  if (target < current) {
    return 'target must be larger than current';
  }
  let time = 0;
  let currentGrowth = current;
  while (currentGrowth < target) {
    currentGrowth *= 2;
    time += 20;
  }
  return time;
}

function getAverage(nums) {
  if (nums.length === 0) {
    return null;
  }
  return nums.reduce((total, num) => total += num, 0) / nums.length;
}

function countCoins(coins) {
  const values = {
    P: 1,
    N: 5,
    D: 10,
    Q: 25
  }
  let cents = 0;
  for (const coin of coins) {
    cents += values[coin];
  }
  return cents;
}

function getPairs(n) {
  if (n <= 0 || n % 1 !== 0 || typeof n !== 'number') {
    return 'error';
  }
  let pairs = [];
  for (let i=1; i<=n; i++) {
    for (let j=i; j<=n; j++) {
      pairs.push([i,j]);
    }
  }
  return pairs;
}

//#endregion Practice

/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  multiplyNumbers,
  vote,
  concatenateStrings,
  sumArray,
  sumToN,
  factorial,
  buildNArray,
  findMax,
  findLongestString,
  countPresent,
  getDnaComplement,
  isSongInPlaylist,
  isAllEven,
  makeBoard,
  evenAndOdd,
  exponentiate,
  onlyOdds,
  bacteriaTime,
  getAverage,
  countCoins,
  getPairs,
};
