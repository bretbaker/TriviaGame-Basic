// hide timer and questions onload

$(window).on('load', function() {
    $("#timer-questions-container").hide();
});


// create timer

let timeLeft = 120;

let timeInterval;

const timer = () => {
    clearInterval(timeInterval);
    timeInterval = setInterval(countDown, 1000);
}

const countDown = () => {
    timeLeft--;
    $("#game-timer").text("Time Remaining: " + timeLeft + " Seconds");
}


// ready events
$(document).ready(function() {
    $("#start-button").on('click', function() {
        $("#start-button").hide();
        $("#timer-questions-container").show();
        timer();
    });
});