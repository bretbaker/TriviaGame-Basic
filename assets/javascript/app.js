// create timer

let timeLeft = 120;

let timeInterval;

const timer = () => {
    clearInterval(timeInterval);
    timeInterval = setInterval(countDown, 100);
}

const countDown = () => {
    timeLeft--;
    $("#game-timer").text("Time Remaining: " + timeLeft + " Seconds");
    $("#mini-timer").text(timeLeft);
    if (timeLeft === 0) {
        countAnswerTypes();
        $("#result-exclamation").text("Time's up!");
        $("#timer-questions-container").hide();
        $("#results-container").show();
        clearInterval(timeInterval);
    }
}


// create answer count mechanism

let correctCount = 0;

let incorrectCount = 0;

let unansweredCount = 0;

const countAnswerTypes = () => {

    // answer 1 check
    if ($("#correct-1").is(":checked")) {
        correctCount++;
    } else if ($("#incorrect-1").is(":checked") || $("#incorrect-2").is(":checked") || $("#incorrect-3").is(":checked")) {
        incorrectCount++;
    } else if ($("#correct-1").is(":checked") === false && $("#incorrect-1").is(":checked") === false && $("#incorrect-2").is(":checked") === false && $("#incorrect-3").is(":checked") === false) {
        unansweredCount++;
    }

    // answer 2 check
    if ($("#correct-2").is(":checked")) {
        correctCount++;
    } else if ($("#incorrect-4").is(":checked") || $("#incorrect-5").is(":checked") || $("#incorrect-6").is(":checked")) {
        incorrectCount++;
    } else if ($("#correct-2").is(":checked") === false && $("#incorrect-4").is(":checked") === false && $("#incorrect-5").is(":checked") === false && $("#incorrect-6").is(":checked") === false) {
        unansweredCount++;
    }

    // answer 3 check
    if ($("#correct-3").is(":checked")) {
        correctCount++;
    } else if ($("#incorrect-7").is(":checked") || $("#incorrect-8").is(":checked") || $("#incorrect-9").is(":checked")) {
        incorrectCount++;
    } else if ($("#correct-3").is(":checked") === false && $("#incorrect-7").is(":checked") === false && $("#incorrect-8").is(":checked") === false && $("#incorrect-9").is(":checked") === false) {
        unansweredCount++;
    }

    // answer 4 check
    if ($("#correct-4").is(":checked")) {
        correctCount++;
    } else if ($("#incorrect-10").is(":checked") || $("#incorrect-11").is(":checked") || $("#incorrect-12").is(":checked")) {
        incorrectCount++;
    } else if ($("#correct-4").is(":checked") === false && $("#incorrect-10").is(":checked") === false && $("#incorrect-11").is(":checked") === false && $("#incorrect-12").is(":checked") === false) {
        unansweredCount++;
    }

    // answer 5 check
    if ($("#correct-5").is(":checked")) {
        correctCount++;
    } else if ($("#incorrect-13").is(":checked") || $("#incorrect-14").is(":checked") || $("#incorrect-15").is(":checked")) {
        incorrectCount++;
    } else if ($("#correct-5").is(":checked") === false && $("#incorrect-13").is(":checked") === false && $("#incorrect-14").is(":checked") === false && $("#incorrect-15").is(":checked") === false) {
        unansweredCount++;
    }

    // answer 6 check
    if ($("#correct-6").is(":checked")) {
        correctCount++;
    } else if ($("#incorrect-16").is(":checked") || $("#incorrect-17").is(":checked") || $("#incorrect-18").is(":checked")) {
        incorrectCount++;
    } else if ($("#correct-6").is(":checked") === false && $("#incorrect-16").is(":checked") === false && $("#incorrect-17").is(":checked") === false && $("#incorrect-18").is(":checked") === false) {
        unansweredCount++;
    }

    // answer 7 check
    if ($("#correct-7").is(":checked")) {
        correctCount++;
    } else if ($("#incorrect-19").is(":checked") || $("#incorrect-20").is(":checked") || $("#incorrect-21").is(":checked")) {
        incorrectCount++;
    } else if ($("#correct-7").is(":checked") === false && $("#incorrect-19").is(":checked") === false && $("#incorrect-20").is(":checked") === false && $("#incorrect-21").is(":checked") === false) {
        unansweredCount++;
    }

    // answer 8 check
    if ($("#correct-8").is(":checked")) {
        correctCount++;
    } else if ($("#incorrect-22").is(":checked") || $("#incorrect-23").is(":checked") || $("#incorrect-24").is(":checked")) {
        incorrectCount++;
    } else if ($("#correct-8").is(":checked") === false && $("#incorrect-22").is(":checked") === false && $("#incorrect-23").is(":checked") === false && $("#incorrect-24").is(":checked") === false) {
        unansweredCount++;
    }

    // return total count an set new html for results container
    $("#correct-result").text("Correct Answers: " + correctCount);
    $("#incorrect-result").text("Incorrect Answers: " + incorrectCount);
    $("#unanswered-result").text("Unanswered: " + unansweredCount);

}



// hide timer and questions onload

$(window).on('load', function() {
    $("#timer-questions-container").hide();
    $("#results-container").hide();
});


// ready events
$(document).ready(function() {

    $("#start-button").on('click', function() {
        $("#start-button").hide();
        $("#timer-questions-container").show();
        timer();
    });

    $("#submit-button").on('click', function() {
        countAnswerTypes();
        $("#result-exclamation").text("All done!");
        $("#timer-questions-container").hide();
        $("#results-container").show();
        // console.log(correctCount);
        // console.log(incorrectCount);
        // console.log(unansweredCount);
    });
});