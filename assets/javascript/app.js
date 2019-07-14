// hide timer and questions onload
$(window).on('load', function() {
    $("#timer-questions-container").hide();
});

// ready events
$(document).ready(function() {
    $("#start-button").on('click', function() {
        $("#start-button").hide();
        $("#timer-questions-container").show();
    });
});