$(document).ready(function() {

    var trivia = {
        question1: {
            question: "This is a test question",
            options: {
                a: "Guess A",
                b: "Guess B",
                c: "Guess C",
                d: "Guess D"
            },
            answer: "c"
        },
        question2: {
            question: "This is the second question",
            options: {
                a: "Guess 1",
                b: "Guess 2",
                c: "Guess 3",
                d: "Guess 4"
            },
            answer: "b"
        },
        question3: {
            question: "This is the third question",
            options: {
                a: "Option 1",
                b: "Option 2",
                c: "Option 3",
                d: "Option 4"
            },
            answer: "d"
        },
        question4: {
            question: "This is the fourth question",
            options: {
                a: "Choice 1",
                b: "Choice 2",
                c: "Choice 3",
                d: "Choice 4"
            },
            answer: "a"
        },
        question5: {
            question: "This is the fifth question",
            options: {
                a: "Value 1",
                b: "Value 2",
                c: "Value 3",
                d: "Value 4"
            },
            answer: "c"
        }
    }

// Initialize global variables and set question content
    var roundCorrect = 0;
    var roundIncorrect = 0;
    var globalCorrect = 0;
    var globalIncorrect = 0;
    var globalGames = 1;
    var globalCorrectPercent = 0;
    var globalIncorrectPercent = 0;
    var questionKeys = Object.keys(trivia);
    var questionIndex = 0;
    var displayQuestion = trivia[questionKeys[questionIndex]];
    var timer = 5;
    var intervalId;
    var hasGuessed = false;

    $("#question").text(displayQuestion.question);
    $("#timer").html(timer);
    $(".globalGames").html('Total Games (' + globalGames + ')');
    $(".globalCorrect").html('Correct: ' + globalCorrect);
    $(".globalIncorrect").html('Incorrect: ' + globalIncorrect);
    $(".roundCorrect").html('Correct: ' + roundCorrect);
    $(".roundIncorrect").html('Incorrect: ' + roundIncorrect);

    $.each(displayQuestion.options, function(i) {
        var options = $("<div>");
        options.attr({"class": "guess", "value": i});
        options.html(displayQuestion.options[i] + "<br>");
        $("#options").append(options);
    });
    
// Click event on guess    
    $("#options").on("click", ".guess", function() {

    if (!hasGuessed && timer > 0) {
        // Only allow one guess per question
            hasGuessed = true;
        // Grab value from HTML
            var clickValue = ($(this).attr("value"));
        // Stop timer
            stop();
        // Add class to keep selected choice highlighted
            $(this).attr("class", "selected");
        // Wait two seconds and then reveal if the selection was correct
            setTimeout (function winLose() {
        // Check if the value matches the answer
            if (clickValue === displayQuestion.answer) {
                roundCorrect++;
                $(".roundCorrect").html('Correct: ' + roundCorrect);
                globalCorrect++;
                calculateRates();
                $(".selected").attr("class", "answer");
                $(".reset").html('<div class="emoji">✅</div><div class="emojiText"> Correct!</div>');
            } else {
                roundIncorrect++;
                $(".roundIncorrect").html('Incorrect: ' + roundIncorrect);
                globalIncorrect++;
                calculateRates();
                $(".selected").attr("class", "wrong");
                $(".guess[value='" + displayQuestion.answer + "']").attr("class", "answer");
                $(".reset").html('<div class="emoji">⛔️</div><div class="emojiText"> Try Again!</div>');
            };
        }, 1000 * 2);
        // Reset question and options for next round after 2 second delay
            if (questionIndex < questionKeys.length-1) {
                setTimeout (nextRound, 1000 * 4);
            } else {
                setTimeout (function addResetBtn() {
                    var resetBtn = $("<button>");
                    resetBtn.attr("class", "btn btn-default btn-lg");
                    resetBtn.text("Play Again");
                    $(".reset").html(resetBtn);
                } , 1000 * 4);
            }
    }
    });

// Increment question index, reset timer, question, and options    
    function nextRound() {
        questionIndex++;
        timer = 5;
        $(".reset").html('<div class="emoji clockSize">🕐</div><div class="timer" id="timer"></div>');
        $("#timer").html(timer);
        run();
        console.log(questionIndex);
        displayQuestion = trivia[questionKeys[questionIndex]];
       
        $("#question").text(displayQuestion.question);
        $("#options").text("");

        $.each(displayQuestion.options, function(i) {
        var options = $("<div>");
        options.attr({"class": "guess", "value": i});
        options.html(displayQuestion.options[i] + "<br>");
        $("#options").append(options);
        });

        hasGuessed = false;
    }

// Timer functions
    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    function stop() {
        clearInterval(intervalId);
    }
  
    function decrement() {
        timer--;
        $("#timer").html(timer);
        if (timer === 0) {
            stop();
            roundIncorrect++;
            $(".roundIncorrect").html('Incorrect: ' + roundIncorrect);
            globalIncorrect++;
            calculateRates();
            console.log("Time's up!");
            // Reset question and options for next round after 2 second delay
            if (questionIndex < questionKeys.length-1) {
                $(".guess[value='" + displayQuestion.answer + "']").attr("class", "answer");
                $(".reset").html('<div class="emoji">⏰</div><div class="emojiText"> Time\'s Up!</div>');
                setTimeout (nextRound, 1000 * 2);
            } else {
                $(".guess[value='" + displayQuestion.answer + "']").attr("class", "answer");
                $(".reset").html('<div class="emoji">⏰</div><div class="emojiText"> Time\'s Up!</div>');
                setTimeout (function addResetBtn() {
                    var resetBtn = $("<button>");
                    resetBtn.attr("class", "btn btn-default btn-lg");
                    resetBtn.text("Play Again");
                    $(".reset").html(resetBtn);
                } , 1000 * 4);
            }
        }
    }

    run();

// Click event to reset question index, counters, timer, and question content for new round
    $(".reset").on("click", function() {
        roundCorrect = 0;
        $(".roundCorrect").html('Correct: ' + roundCorrect);
        roundIncorrect = 0;
        $(".roundIncorrect").html('Incorrect: ' + roundIncorrect);
        questionIndex = 0;
        hasGuessed = false;
        globalGames++;
        $(".globalGames").html('Total Games (' + globalGames + ')');
        displayQuestion = trivia[questionKeys[questionIndex]];
        $(".reset").html('<div class="emoji clockSize">🕐</div><div class="timer" id="timer"></div>');
        $("#question").text(displayQuestion.question);
        $("#options").text("");

        $.each(displayQuestion.options, function(i) {
        var options = $("<div>");
        options.attr({"class": "guess", "value": i});
        options.html(displayQuestion.options[i] + "<br>");
        $("#options").append(options);
        });
        
        timer = 5;
        $("#timer").html(timer);
        run();
    });

    function calculateRates() {
        globalCorrectPercent = parseFloat((globalCorrect*100.0/(globalCorrect + globalIncorrect)).toFixed(1));
        globalIncorrectPercent = parseFloat((globalIncorrect*100.0/(globalCorrect + globalIncorrect)).toFixed(1));
        $(".globalCorrect").html('Correct: ' + globalCorrect + ' (' + globalCorrectPercent + '%)');
        $(".globalIncorrect").html('Incorrect: ' + globalIncorrect + ' (' + globalIncorrectPercent + '%)');
    }

});