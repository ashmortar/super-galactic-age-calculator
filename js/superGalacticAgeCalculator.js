let moment = require('moment');

export class SuperGalacticAgeCalculator {
  constructor(dateOfBirth) {

    this.userDateOfBirth = moment(dateOfBirth);
    //take age in years and convert into seconds
    this.userAgeInSeconds = (moment().year() - this.userDateOfBirth.year()) * 365 * 24 * 60 * 60;

  }

  getUserDOB() {
    return this.userDateOfBirth;
  }

  getUserAgeInSeconds() {
    return this.userAgeInSeconds;
  }

  //take two dates and determine difference in seconds (for ease it is returned as the absolute value of the difference)
  compareDates(dateOne, dateTwo) {
    return  Math.abs(dateOne.format("X") - dateTwo.format("X"));
  }


  // 31536000 seconds per earthYear

  // 1 mercuryYear = 0.24 earthYear or 7568640 seconds

  mercuryAge() {
    return Math.floor(this.userAgeInSeconds / 7568640); // age in earthSeconds/ mercuryYear in seconds rounded down to int value
  }

  // 1 venusYear = 0.62 earthYear or 19552320 seconds
  venusAge() {
    return Math.floor(this.userAgeInSeconds / 19552320);
  }

  // 1 marsYear = 1.88 earthYear or 59287680 seconds
  marsAge() {
    return Math.floor(this.userAgeInSeconds / 59287680);
  }

  // 1 jupiterYear = 11.86 earthYear or 374016960 seconds
  jupiterAge() {
    return Math.floor(this.userAgeInSeconds / 374016960);
  }

  // how many years left to live on each planet
  //    -how to determine avg. life expectancy?
  //    -- account for age ranges outside of expected values

  //BONUS

  // get the date of their next birthday on each planey

  // return the age of keith richards in dog years on jupiter in 2073

  //  if mayfly lifespan = 5 minutes how many mayfly lives has the user lived
  //      -compare that to user current age in years to age of sun

  //  make it solar themed


}
