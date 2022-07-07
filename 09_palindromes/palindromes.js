const palindromes = function (str) {
  let processedStr = str.toLowerCase().replace(/[^a-z]/g, "");

  return processedStr.split("").reverse().join("") === processedStr;

  

  /*
    ! ALTERNATE: Using two pointer approach

    let processedStr = str.toLowerCase().replace(/[^a-z]/g, "");

    let s = 0;
    let e = processedStr.length - 1;

    while (s < e) {
        if (processedStr[s] !== processedStr[e]) return false;
        s++;
        e--;
    }
    return true;
  */
};

// Do not edit below this line
module.exports = palindromes;
