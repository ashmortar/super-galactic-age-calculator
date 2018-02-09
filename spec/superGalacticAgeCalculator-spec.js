import { SuperGalacticAgeCalculator } from './../js/superGalacticAgeCalculator.js';


describe('SuperGalacticAgeCalculator', function() {
  let testCalc;
  let moment = require('moment');

  beforeEach(function () {

      testCalc = new SuperGalacticAgeCalculator("1986-03-25");
  })

  it('should take age in years and convert into seconds', function() {
    console.log(moment().format('MMMM Do YYY, h:mm:ss a'));
    expect(testCalc.getUserDOB()).toEqual('1986-03-25')
  })

  it('should calculate the user age in seconds', function() {
    expect(testCalc.getUserAgeInSeconds()).toEqual(1009152000)
  })

})
