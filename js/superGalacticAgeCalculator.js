let moment = require('moment');

export class SuperGalacticAgeCalculator {
  constructor(dateOfBirth, lifeExpectancy) {
    this.lifeExpectancy = lifeExpectancy;
    this.dateOfBirth = moment(dateOfBirth);
    //take age in years and convert into seconds
    this.ageInSeconds = (moment().year() - this.dateOfBirth.year()) * 365 * 24 * 60 * 60;
    this.mercuryAge = Math.floor(this.ageInSeconds / 7568640);
    this.venusAge = Math.floor(this.ageInSeconds / 19552320);
    this.marsAge = Math.floor(this.ageInSeconds / 59287680);
    this.jupiterAge = Math.floor(this.ageInSeconds / 374016960);
  }

  getUserDOB() {
    return this.dateOfBirth;
  }

  getAgeInSeconds() {
    return this.ageInSeconds;
  }

  getUserLifeExpectancy() {
    return this.lifeExpectancy
  }

  //take two dates and determine difference in seconds (for ease it is returned as the absolute value of the difference)
  compareDates(dateOne, dateTwo) {
    return  Math.abs(dateOne.format("X") - dateTwo.format("X"));
  }

  getMercuryAge() {
    return this.mercuryAge;
  }

  getVenusAge() {
    return this.venusAge;
  }

  getMarsAge() {
    return this.marsAge;
  }

  getJupiterAge() {
    return this.jupiterAge;
  }

  // how many years left to live on each planet
  //    -how to determine avg. life expectancy?
  //    -- account for age ranges outside of expected values

  //BONUS

  // get the date of their next birthday on each planet

  // return the age of keith richards in dog years on jupiter in 2073

  //  if mayfly lifespan = 5 minutes how many mayfly lives has the user lived
  //      -compare that to user current age in years to age of sun

  //  make it solar themed


}
