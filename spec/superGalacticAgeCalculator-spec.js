import { SuperGalacticAgeCalculator } from './../js/superGalacticAgeCalculator.js';


describe('SuperGalacticAgeCalculator', function() {
  let testCalc;
  const dob = "1986-03-25";
  let moment = require('moment');

  beforeEach(function () {

      testCalc = new SuperGalacticAgeCalculator(dob);
  })

  it('should take age in years and convert into seconds', function() {
    let date = moment('1986-03-25');
    console.log(date.month());
    expect(testCalc.getUserDOB()).toEqual(date);
  })

  it('should calculate the user age in seconds', function() {
    expect(testCalc.getUserAgeInSeconds()).toEqual(1009152000);
  })

  it('should compare two dates and determine difference in seconds', function() {
    let testDateOne = moment('1986-03-25');
    let testDateTwo = moment('2018-02-09');
    expect(testCalc.compareDates(testDateOne, testDateTwo)).toEqual(1006045200);
  })

  it('should return the user age in mercury years', function() {
    expect(testCalc.mercuryAge()).toEqual(133);
  })

  it('should return the use age in venus years', function() {
    expect(testCalc.venusAge()).toEqual(51);
  })

  it('should return the user age in mars years', function() {
    expect(testCalc.marsAge()).toEqual(17);
  })

  it('should return the user age in jupieter years', function() {
    expect(testCalc.jupiterAge()).toEqual(2);
  })

})
