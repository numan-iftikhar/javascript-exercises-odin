const ftoc = function (fTemp) {
  /*
   * Math.round(result * 10) places decimal towards right one place.
   * / 10 place decimal towards left one place.
   * Hence, we get number rounded to one decimal place. :)
   */
  let cTemp = Math.round(((fTemp - 32) / 1.8) * 10) / 10;

  return cTemp;
};

const ctof = function (cTemp) {
  let fTemp = Math.round((1.8 * cTemp + 32) * 10) / 10;

  return fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
