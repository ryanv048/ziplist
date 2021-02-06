const listE = [0, 2, 4, 6, 8, 10];
const listO = [1, 3, 5, 7, 9, 11];

function ziplist(evens, odds) {
  const result = [];

  for (let i = 0; i < listE.length; i++) {
    result.push(evens[i], odds[i]);
    // even = evens[i] % 2;
    // if (even === 0) {
    //  result[i] = evens[i];
    // } else {
    //  result[i + 1] = evens[i];
    // }
    // for (let j = 0; j < listO.length; i++) {
    //  odd = odds[j] % 2;
    //  if (odd === 1) {
    //    result[i + 1] = odds[j];
    //  } else {
    //    result[i] = odds[j];
    //  }
    // }
    // }
  }
  return result;
}

function zipListTheSimpleWay(evens, odds) {
  let results = [];
  results = _.flatten(_.zip(evens, odds));
  return results;
}
console.log(ziplist(listE, listO));
console.log(zipListTheSimpleWay(listE, listO));
