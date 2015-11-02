
(function () {

  'use strict';

var grades = function () {
};

grades.prototype.letterGrader = function (score) {

  if (score > 90 && score < 100) {
    return 'A';
  } else if (score > 80 && score < 89) {
    return 'B';
  } else if (score > 70 && score < 79) {
    return 'C';
  } else if (score > 60 && score < 69) {
    return 'D';
  } else {
    return 'F';
  }
};

grades.prototype.averageScore = function (arr) {

  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum/(arr.length);
};

grades.prototype.medianScore = function (arr) {
  var arrSorted = arr.sort(function(a,b){return a - b;});

  if(arrSorted.length % 2 !== 0) {
    return arrSorted[Math.floor(arrSorted.length/2)];
  } else {
    var middleIndex = Math.floor(arrSorted.length/2);
    return (arrSorted[middleIndex] + arrSorted[middleIndex - 1])/2;
  }
};

grades.prototype.mode = function (arr) {
  var mode = {};
  var max = 0;
  var count = 0;

  arr.forEach(function(element) {
      if (mode[element]) {
        mode[element]++;
      } else {
        mode[element] = 1;
      }
      if (count<mode[element]) {

          max = element;
          console.log(max, "max");
          count = mode[element];
          console.log(count, "count");
      }
  });

  return max;

};


module.exports = grades;

}());



