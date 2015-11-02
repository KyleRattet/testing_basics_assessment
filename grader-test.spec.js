
var Grades = require('./grader');

describe('grades', function() {
  var grades = new Grades();

  it('converts score to letter', function() {
    expect(grades.letterGrader(68)).toEqual('D');
    expect(grades.letterGrader(78)).toEqual('C');
    expect(grades.letterGrader(88)).toEqual('B');
    expect(grades.letterGrader(98)).toEqual('A');
    expect(grades.letterGrader(20)).toEqual('F');
  });

  it('converts array of scores to an average', function() {
    expect(grades.averageScore([90, 95, 87, 60])).toEqual(83);
    expect(grades.averageScore([90,100])).toEqual(95);
    expect(grades.averageScore([90, 60, 60])).toEqual(70);
    expect(grades.averageScore([25,50,75,100])).toEqual(62.5);
  });

  it('returns the median array of scores', function() {
    expect(grades.medianScore([52,80,80,86,94])).toEqual(80);
    expect(grades.medianScore([52,80,84,86])).toEqual(82);
  });

   it('returns the mode array of scores', function() {
    expect(grades.mode([52,80,80,86,94])).toEqual(80);
    expect(grades.mode([82, 92, 75, 91, 92, 92, 92, 89, 95, 100, 86, 95, 95, 95, 95])).toEqual(95);
  });

});

