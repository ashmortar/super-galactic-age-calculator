let moment = require('moment');

export class SuperGalacticAgeCalculator {
  constructor(dateOfBirth, lifeExpectancy) {
    this.lifeExpectancy = lifeExpectancy;
    this.dateOfBirth = moment(dateOfBirth);
    //take age in years and convert into seconds
    this.ageInSeconds = (moment().year() - this.dateOfBirth.year()) * 365 * 24 * 60 * 60;
    this.mercuryAge = Math.floor(this.ageInSeconds / 7568640);
    this.mercuryLE = "";
    this.venusAge = Math.floor(this.ageInSeconds / 19552320);
    this.venusLE = "";
    this.marsAge = Math.floor(this.ageInSeconds / 59287680);
    this.marsLE = "";
    this.jupiterAge = Math.floor(this.ageInSeconds / 374016960);
    this.jupiterLE = "";
  }

  getDateOfBirth() {
    return this.dateOfBirth;
  }

  getAgeInSeconds() {
    return this.ageInSeconds;
  }

  getUserLifeExpectancy() {
    return this.lifeExpectancy;
  }

  //take two dates and determine difference in seconds (for ease it is returned as the absolute value of the difference)
  compareDates(dateOne, dateTwo) {
    return  Math.abs(dateOne.format("X") - dateTwo.format("X"));
  }

  //get ages on various planets
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

  getMercuryLE() {
    if (this.lifeExpectancy - this.mercuryAge < 0) {
      this.mercuryLE = "You are DEAD!!! ~ you reached your life expectancy " + (this.mercuryAge - this.lifeExpectancy) + " mercury years ago.  This means you on average died when you were " + Math.floor(((this.mercuryAge - this.lifeExpectancy) * 7568640)/31536000) + " earth years old";
    } else {
      this.mercuryLE = "At mercury age " + this.lifeExpectancy + " or in " + (this.lifeExpectancy - this.mercuryAge) + " more mercury years you would have lived " + Math.floor(((this.lifeExpectancy - this.mercuryAge) * 7568640)/31536000) + " more eath years";
    }
    return this.mercuryLE;
  }

  getVenusLE() {
    if (this.lifeExpectancy - this.venusAge < 0) {
      this.venusLE = "You are DEAD!!! ~ you reached your life expectancy " + (this.venusAge - this.lifeExpectancy) + " venus years ago.  This means you on average died when you were " + Math.floor(((this.venusAge - this.lifeExpectancy) * 19552320)/31536000) + " earth years old";
    } else {
      this.venusLE = "At venus age " + this.lifeExpectancy + " or in " + (this.lifeExpectancy - this.venusAge) + " more venus years you would have lived " + Math.floor(((this.lifeExpectancy - this.venusAge) * 19552320)/31536000) + " more eath years";
    }
    return this.venusLE;
  }

  getMarsLE() {
    if (this.lifeExpectancy - this.marsAge < 0) {
      this.marsLE = "You are DEAD!!! ~ you reached your life expectancy " + (this.marsAge - this.lifeExpectancy) + " mars years ago.  This means you on average died when you were " + Math.floor(((this.marsAge - this.lifeExpectancy) * 59287680)/31536000) + " earth years old";
    } else {
      this.marsLE = "At mars age " + this.lifeExpectancy + " or in " + (this.lifeExpectancy - this.marsAge) + " more mars years you would have lived " + Math.floor(((this.lifeExpectancy - this.marsAge) * 59287680)/31536000) + " more eath years";
    }
    return this.marsLE;
  }

  getJupiterLE() {
    if (this.lifeExpectancy - this.jupiterAge < 0) {
      this.jupiterLE = "You are DEAD!!! ~ you reached your life expectancy " + (this.jupiterAge - this.lifeExpectancy) + " jupiter years ago.  This means you on average died when you were " + Math.floor(((this.jupiterAge - this.lifeExpectancy) * 374016960)/31536000) + " earth years old";
    } else {
      this.jupiterLE = "At jupiter age " + this.lifeExpectancy + " or in " + (this.lifeExpectancy - this.jupiterAge) + " more jupiter years you would have lived " + Math.floor(((this.lifeExpectancy - this.jupiterAge) * 374016960)/31536000) + " more eath years";
    }
    return this.jupiterLE;
  }

  //BONUS

  // get the date of their next birthday on each planet

  // return the age of keith richards in dog years on jupiter in 2073

  //  if mayfly lifespan = 5 minutes how many mayfly lives has the user lived
  //      -compare that to user current age in years to age of sun

  //  make it solar themed


}
