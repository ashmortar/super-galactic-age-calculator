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

    $('#mercury-stuff').text("<p>Your age in Mercury years is " + doerOfTasks.getMercuryAge() + "</p>");
    $('#mercury-stuff').text("<p>" + doerOfTasks.getMercuryLE() + "</p>");

    $('#venus-stuff').text("<p>Your age in Venus years is " + doerOfTasks.getVenusAge() + "</p>");
    $('#venus-stuff').text("<p>" + doerOfTasks.getVenusLE() + "</p>");

    $('#mars-stuff').text("<p>Your age in Mars years is " + doerOfTasks.getMarsAge() + "</p>");
    $('#mars-stuff').text("<p>" + doerOfTasks.getMarsLE() + "</p>");

    $('#jupiter-stuff').text("<p>Your age in Jupiter years is " + doerOfTasks.getJupiterAge() + "</p>");
    $('#jupiter-stuff').text("<p>" + doerOfTasks.getJupiterLE() + "</p>");

    $('#other-stuff').text("<p>You are " + doerOfTasks.compareDates(dobMomentFormat, moment()) + " seconds old (refresh if you dare)");

  })
})
