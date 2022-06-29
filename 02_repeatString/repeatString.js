const repeatString = function (str, times) {
  if (times < 0) return 'ERROR';
  
  let finalStr = "";
  for(let i=0; i<times; i++) {
    finalStr += str;
  }

  return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
