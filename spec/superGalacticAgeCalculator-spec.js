import { SuperGalacticAgeCalculator } from './../js/superGalacticAgeCalculator.js';


describe('SuperGalacticAgeCalculator', function() {
  let testCalc;

  beforeEach(function () {
      testCalc = new SuperGalacticAgeCalculator("1986-03-25");
  })

  it('should take age in years and convert into seconds', function() {
      expect(testCalc.getUserDOB()).toEqual('1986-03-25')
  })

})
