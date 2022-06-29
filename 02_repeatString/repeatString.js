const repeatString = function (str, times) {
  let n = 0;
  let finalStr = "";
  while (n < times) {
    finalStr += str;
  }

  return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
