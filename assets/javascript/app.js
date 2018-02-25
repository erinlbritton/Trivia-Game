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

    var roundCorrect = 0;
    var roundIncorrect = 0;
    var globalWins = 0;
    var globalLosses = 0;
    var questionKeys = Object.keys(trivia);
    var questionIndex = 0;
    var displayQuestion = trivia[questionKeys[questionIndex]];
    var timer = 5;
    var intervalId;

    $("#question").text(displayQuestion.question);
    $("#timer").html(timer);

    $.each(displayQuestion.options, function(i) {
        var options = $("<div>");
        options.attr({"class": "guess", "value": i});
        options.html(displayQuestion.options[i] + "<br>");
        $("#options").append(options);
    });
    
    $("#options").on("click", ".guess", function() {
    // Grab value from HTML
        var clickValue = ($(this).attr("value"));
        stop();
    // Check if the value matches the answer
        if (clickValue === displayQuestion.answer) {
            roundCorrect++;
            console.log("You win!");
        } else {
            roundIncorrect++;
            console.log("You lose!");
        };
    // Reset question and options for next round after 2 second delay
        if (questionIndex < questionKeys.length-1) {
            setTimeout (nextRound, 1000 * 2);
        } else {
            console.log("Game Over!");
            console.log("Correct: " + roundCorrect);
            console.log("Incorrect: " + roundIncorrect);
            var resetBtn = $("<button>");
            resetBtn.attr("class", "btn btn-default btn-lg");
            resetBtn.text("Play Again");
            $(".reset").html(resetBtn);
        }
    });

    function nextRound() {
        questionIndex++;
        timer = 5;
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
            console.log("Time's up!");
            // Reset question and options for next round after 2 second delay
            if (questionIndex < questionKeys.length-1) {
                setTimeout (nextRound, 1000 * 2);
            } else {
                console.log("Game Over!");
                console.log("Correct: " + roundCorrect);
                console.log("Incorrect: " + roundIncorrect);
                var resetBtn = $("<button>");
                resetBtn.attr("class", "btn btn-default btn-lg");
                resetBtn.text("Play Again");
                $(".reset").html(resetBtn);
            }
        }
    }

    run();

    $(".reset").on("click", function() {
        roundCorrect = 0;
        roundIncorrect = 0;
        questionIndex = 0;
        displayQuestion = trivia[questionKeys[questionIndex]];
        $(".reset").html('<span class="glyphicon glyphicon-time timer" aria-hidden="true"></span><div class="timer" id="timer"></div>');
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

});