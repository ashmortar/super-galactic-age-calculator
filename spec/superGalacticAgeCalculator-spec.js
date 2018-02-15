import { SuperGalacticAgeCalculator } from './../js/superGalacticAgeCalculator.js';


describe('SuperGalacticAgeCalculator', function() {
  let testCalc;
  const dob = "1986-03-25";
  let moment = require('moment');

  beforeEach(function () {

      testCalc = new SuperGalacticAgeCalculator(dob, 80);
  })

  it('should take age in years and convert into seconds', function() {
    let date = moment('1986-03-25');
    console.log(date.month());
    expect(testCalc.getDateOfBirth()).toEqual(date);
  })

  it('should calculate the user age in seconds', function() {
    expect(testCalc.getAgeInSeconds()).toEqual(1009152000);
  })

  it('should compare two dates and determine difference in seconds', function() {
    let testDateOne = moment('1986-03-25');
    let testDateTwo = moment('2018-02-09');
    expect(testCalc.compareDates(testDateOne, testDateTwo)).toEqual(1006041600);
  })

  it('should return the user age in mercury years', function() {
    expect(testCalc.getMercuryAge()).toEqual(133);
  })

  it('should return the use age in venus years', function() {
    expect(testCalc.getVenusAge()).toEqual(51);
  })

  it('should return the user age in mars years', function() {
    expect(testCalc.getMarsAge()).toEqual(17);
  })

  it('should return the user age in jupiter years', function() {
    expect(testCalc.getJupiterAge()).toEqual(2);
  })

  it('should return life expectancy for all planets', function() {
    expect(testCalc.getMercuryLE()).toEqual("You are DEAD!!! ~ you reached your life expectancy 53 mercury years ago.  This means you on average died when you were 12 earth years old");
    expect(testCalc.getVenusLE()).toEqual('At venus age 80 or in 29 more venus years you would have lived 17 more eath years');
    expect(testCalc.getMarsLE()).toEqual('At mars age 80 or in 63 more mars years you would have lived 118 more eath years');
    expect(testCalc.getJupiterLE()).toEqual('At jupiter age 80 or in 78 more jupiter years you would have lived 925 more eath years');
  })

})
