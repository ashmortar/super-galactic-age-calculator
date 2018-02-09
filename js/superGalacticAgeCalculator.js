export class SuperGalacticAgeCalculator {
  constructor(dateOfBirth) {
    this.userDateOfBirth = dateOfBirth;
    //take age in years and convert into seconds
    this.userAgeInSeconds = (2018 - parseInt(dateOfBirth.split('-')[0])) * 365 * 24 * 60 * 60;
    //take two dates and determine difference in seconds (ie. compare dob w/ current time to get accurate age)

  }

  getUserDOB() {
    return this.userDateOfBirth;
  }

  getUserAgeInSeconds() {
    return this.userAgeInSeconds;
  }
  // 1 mercuryYear = 0.24 earthYear
  mercuryAge() {

  }

  // 1 venusYear = 0.62 earthYear
  venusAge() {

  }

  // 1 marsYear = 1.88 earthYear
  marsAge() {

  }

  // 1 jupiterYear = 11.86 earthYear
  jupiterAge() {

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
