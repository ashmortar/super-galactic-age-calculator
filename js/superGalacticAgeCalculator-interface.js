import { SuperGalacticAgeCalculator } from './../js/superGalacticAgeCalculator.js';
let moment = require('moment');

$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    let dob = $('#date-of-birth').val();
    let lifeExpectancy = parseInt($('#life-expectancy').val());
    console.log(dob);
    console.log(lifeExpectancy);
    let dobMomentFormat = moment(dob);
    let doerOfTasks = new SuperGalacticAgeCalculator(dob, lifeExpectancy);

    $('#mercury-stuff').text("Your age in Mercury years is " + doerOfTasks.getMercuryAge() + " and " + doerOfTasks.getMercuryLE());
    // $('#mercury-stuff').append("<p>" + doerOfTasks.getMercuryLE() + "</p>");

    $('#venus-stuff').text("Your age in Venus years is " + doerOfTasks.getVenusAge() + " and " + doerOfTasks.getVenusLE());
    // $('#venus-stuff').append("<p>" + doerOfTasks.getVenusLE() + "</p>");

    $('#mars-stuff').text("Your age in Mars years is " + doerOfTasks.getMarsAge() + " and " + doerOfTasks.getMarsLE());
    // $('#mars-stuff').append("<p>" + doerOfTasks.getMarsLE() + "</p>");

    $('#jupiter-stuff').text("Your age in Jupiter years is " + doerOfTasks.getJupiterAge() + " and " + doerOfTasks.getJupiterLE());
    // $('#jupiter-stuff').append("<p>" + doerOfTasks.getJupiterLE() + "</p>");

    $('#other-stuff').append("<p>You are " + doerOfTasks.compareDates(dobMomentFormat, moment()) + " seconds old (refresh if you dare)");

  })
})
