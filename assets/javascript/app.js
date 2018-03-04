$(document).ready(function() {

    var trivia = {
        bubblebobble: {
            questions: {
                question1: {
                    question: "Bub and Bob's girlfriends were kidnapped by",
                    options: {
                        a: "Ludwig Von Koopa",
                        b: "King Dedede",
                        c: "Baron Von Blubba",
                        d: "Soda Popinski"
                    },
                    answer: "c"
                },
                question2: {
                    question: "What message announces Baron von Blubba's entrance on a stage?",
                    options: {
                        a: "Time's Up!",
                        b: "Hurry Up!",
                        c: "Game Over!",
                        d: "Uh Oh!"
                    },
                    answer: "b"
                },
                question3: {
                    question: "Bub and Bob defeat their enemies by",
                    options: {
                        a: "Hitting enemies with bubbles",
                        b: "Hitting enemies with their heads",
                        c: "Jumping on enemies",
                        d: "Catching enemies in bubbles and popping them"
                    },
                    answer: "d"
                },
                question4: {
                    question: "Which of the following is NOT a special bubble in Bubble Bobble?",
                    options: {
                        a: "Wind",
                        b: "Lightning",
                        c: "Water",
                        d: "Fire"
                    },
                    answer: "a"
                },
                question5: {
                    question: "Which of the following is NOT one of Bubble Bobble's endings?",
                    options: {
                        a: "Good Ending - Beat in multiplayer; unlocks Super Mode",
                        b: "True Ending - Beat Super Mode in multiplayer",
                        c: "False Ending - Beat in single or multiplayer; unlocks Dream Sequence",
                        d: "Bad Ending - Beat as single player or missed Crystal Ball as multiplayer"
                    },
                    answer: "c"
                }
            },
            summary: "THESE ARE TWO HUNGRY DINO-MIGHTS AND THEY'VE GOT BUBBLE FIGHT'N FUN DOWN TIGHT.",
            name: "Bubble Bobble",
            audio: "assets/audio/bubblebobble.mp3"
        },
        castlevania: {
            questions: {
                question1: {
                    question: "What is the name of the main protagonist in Castlevania for the NES?",
                    options: {
                        a: "Richter Belmont",
                        b: "Trevor Belmont",
                        c: "Simon Belmont",
                        d: "Jonathan Morris"
                    },
                    answer: "c"
                },
                question2: {
                    question: "What is the name of the weapon used in Castlevania?",
                    options: {
                        a: "Crissaegrim",
                        b: "Alucart Sword",
                        c: "Nunchaku",
                        d: "Vampire Killer"
                    },
                    answer: "d"
                },
                question3: {
                    question: "Who is the boss you must defeat before fighting Dracula?",
                    options: {
                        a: "Death",
                        b: "Galamoth",
                        c: "Legion",
                        d: "Slogra and Gaibon"
                    },
                    answer: "a"
                },
                question4: {
                    question: "Your subweapons include a dagger, axe, cross, holy water, and",
                    options: {
                        a: "Duplicator",
                        b: "Stopwatch",
                        c: "Library Card",
                        d: "Shuriken"
                    },
                    answer: "b"
                },
                question5: {
                    question: "In the Clock Tower, you will find plenty of",
                    options: {
                        a: "Skelerangs",
                        b: "Axe Knights",
                        c: "Medusa Heads",
                        d: "Werewolves"
                    },
                    answer: "c"
                }
            },
            summary: "If you think it's scary on the outside, wait'll you see the basement!",
            name: "Castlevania",
            audio: "assets/audio/castlevania.mp3"
        },
        mario: {
            questions: {
                question1: {
                    question: "Super Mario Bros was created by",
                    options: {
                        a: "Eiji Aonuma",
                        b: "Shigeru Miyamoto",
                        c: "Hideo Kojima",
                        d: "Satoru Iwata"
                    },
                    answer: "b"
                },
                question2: {
                    question: "The secret world hidden in World 1-2 is called the",
                    options: {
                        a: "Minus World",
                        b: "Doom Ship",
                        c: "Dark World",
                        d: "Special Zone"
                    },
                    answer: "a"
                },
                question3: {
                    question: "Mario's Brother is named",
                    options: {
                        a: "Wario",
                        b: "Lemmy",
                        c: "Luigi",
                        d: "Waluigi"
                    },
                    answer: "c"
                },
                question4: {
                    question: "Nintendo released an officially licensed modified version of Super Mario Bros. named",
                    options: {
                        a: "Super Mario Bros.: The Lost Levels",
                        b: "All Night Nippon Super Mario Bros.",
                        c: "Kaettekita Mario Brothers",
                        d: "Super Luigi Bros."
                    },
                    answer: "b"
                },
                question5: {
                    question: "Super Mario Bros. is NOT playable in",
                    options: {
                        a: "Super Mario Advance",
                        b: "Animal Crossing",
                        c: "Super Mario Bros. Deluxe",
                        d: "Super Mario All-Stars"
                    },
                    answer: "a"
                }
            },
            summary: "Do you have what it takes to save the Mushroom Princess?",
            name: "Super Mario Bros.",
            audio: "assets/audio/mario.mp3"
        },
        finalfantasy: {
            questions: {
                question1: {
                    question: "The original Final Fantasy is NOT playable on the",
                    options: {
                        a: "WonderSwan Color",
                        b: "Game Boy Advance",
                        c: "MSX2",
                        d: "Super Nintendo"
                    },
                    answer: "d"
                },
                question2: {
                    question: "Final Fantasy was originally titled as",
                    options: {
                        a: "Final Fight",
                        b: "The Last Story",
                        c: "Fighting Fantasy",
                        d: "Secret of Mana"
                    },
                    answer: "c"
                },
                question3: {
                    question: "Final Fantasy was designed by",
                    options: {
                        a: "Hironobu Kageyama",
                        b: "Hironobu Sakaguchi",
                        c: "Hideo Kojima",
                        d: "Hiro Nakamura"
                    },
                    answer: "b"
                },
                question4: {
                    question: "The final boss of Final Fantasy is named",
                    options: {
                        a: "Garland",
                        b: "Ganon",
                        c: "Galamoth",
                        d: "Kefka"
                    },
                    answer: "a"
                },
                question5: {
                    question: "The four characters in Final Fantasy are known as the",
                    options: {
                        a: "Dream Warriors",
                        b: "Light Warriors",
                        c: "Shadow Warriors",
                        d: "World Warriors"
                    },
                    answer: "b"
                }
            },
            summary: "An evil shroud covers the world in darkness. You must restore the powers of earth, wind, fire and water to the Four Orbs.",
            name: "Final Fantasy",
            audio: "assets/audio/finalfantasy.mp3"
        },
        kidicarus: {
            questions: {
                question1: {
                    question: "The producer of Kid Icarus did NOT work work on",
                    options: {
                        a: "Super Metroid",
                        b: "Wario Land",
                        c: "Dr. Mario",
                        d: "Mike Tyson's Punch-Out!!"
                    },
                    answer: "d"
                },
                question2: {
                    question: "The final boss in Kid Icarus is",
                    options: {
                        a: "Medusa",
                        b: "Eggplant Wizard",
                        c: "Pandora",
                        d: "Twinbellos"
                    },
                    answer: "a"
                },
                question3: {
                    question: "Kid Icarus is known in Japan as",
                    options: {
                        a: "New Light Mythology: Palutena's Mirror",
                        b: "Kid Icarus: Of Myths and Monsters",
                        c: "Kid Icarus: Uprising",
                        d: "Light Mythology: Palutena's Mirror"
                    },
                    answer: "d"
                },
                question4: {
                    question: "Pit's primary weapon in Kid Icarus is",
                    options: {
                        a: "A sword",
                        b: "A bow and arrow",
                        c: "A whip",
                        d: "A blaster"
                    },
                    answer: "b"
                },
                question5: {
                    question: "Kid Icarus is set in a fantasy world based on",
                    options: {
                        a: "Feudal Japan",
                        b: "Norse Mythology",
                        c: "England during the medieval period",
                        d: "Greek Mythology"
                    },
                    answer: "d"
                }
            },
            summary: "Far away in a kingdom called \"Angel Land,\" the evil goddess Medusa has stolen the Three Sacred Treasures and imprisoned the goddess of light, Palutena.",
            name: "Kid Icarus",
            audio: "assets/audio/kidicarus.mp3"
        },
        megaman2: {
            questions: {
                question1: {
                    question: "Mega Man 2 was made by",
                    options: {
                        a: "Konami",
                        b: "Sega",
                        c: "Capcom",
                        d: "Squaresoft"
                    },
                    answer: "c"
                },
                question2: {
                    question: "Mega Man's weapon is called the",
                    options: {
                        a: "Proto Buster",
                        b: "X Buster",
                        c: "Bass Buster",
                        d: "Mega Buster"
                    },
                    answer: "d"
                },
                question3: {
                    question: "Dr. Wily's final form in Mega Man 2 is",
                    options: {
                        a: "Robot",
                        b: "Alien",
                        c: "Zombie",
                        d: "Werewolf"
                    },
                    answer: "b"
                },
                question4: {
                    question: "Mega Man's brother is known as",
                    options: {
                        a: "Rush",
                        b: "Roll",
                        c: "Proto Man",
                        d: "Zero"
                    },
                    answer: "c"
                },
                question5: {
                    question: "Mega Man 2 takes place in the year",
                    options: {
                        a: "2099",
                        b: "2010",
                        c: "20XX",
                        d: "20X6"
                    },
                    answer: "c"
                }
            },
            summary: "He's Back! And this time the evil Dr. Wily (once the supreme power in the universe) has created even more sinister robots to mount his attack.",
            name: "Mega Man 2",
            audio: "assets/audio/megaman2.mp3"
        },
        metroid: {
            questions: {
                question1: {
                    question: "The protagonist of Metroid is named",
                    options: {
                        a: "Adam Malkovich",
                        b: "Ridley",
                        c: "Samus Aran",
                        d: "Kraid"
                    },
                    answer: "c"
                },
                question2: {
                    question: "The creator of Metroid did NOT make",
                    options: {
                        a: "WonderSwan",
                        b: "Virtual Boy",
                        c: "Game Gear",
                        d: "Game Boy"
                    },
                    answer: "c"
                },
                question3: {
                    question: "Metroid originally appeared on the",
                    options: {
                        a: "MSX",
                        b: "NEC PC88",
                        c: "Famicom Disk System",
                        d: "Master System"
                    },
                    answer: "c"
                },
                question4: {
                    question: "The code to unlock 55 missiles, 4 energy tanks, and all power-ups is",
                    options: {
                        a: "JUSTIN BAILEY",
                        b: "ARMSTRONG HOUSTON",
                        c: "RIDLEY SCOTT",
                        d: "NARPA SWORD0"
                    },
                    answer: "a"
                },
                question5: {
                    question: "Metroids can only be defeated by",
                    options: {
                        a: "Triangle Jump/Crystal Flash",
                        b: "Super Missiles/Power Bomb",
                        c: "Space Jump/Screw Attack",
                        d: "Ice Beam/Missiles"
                    },
                    answer: "d"
                }
            },
            summary: "It's you against the evil Mother Brain in the thrilling battle of Metroid!",
            name: "Metroid",
            audio: "assets/audio/metroid.mp3"
        },
        startropics: {
            questions: {
                question1: {
                    question: "The team that developed Star Tropics also developed",
                    options: {
                        a: "Kirby's Adventure",
                        b: "Mike Tyson's Punch-Out!!",
                        c: "Fire Emblem",
                        d: "The Legend of Zelda"
                    },
                    answer: "b"
                },
                question2: {
                    question: "Mike's primary weapon in Star Tropics is a",
                    options: {
                        a: "Sword",
                        b: "Yo-Yo",
                        c: "Whip",
                        d: "Blaster"
                    },
                    answer: "b"
                },
                question3: {
                    question: "Star Tropics produced a sequel named",
                    options: {
                        a: "Return of Ganon",
                        b: "Zoda's Revenge",
                        c: "Dracula's Curse",
                        d: "The Rosetta Stone"
                    },
                    answer: "b"
                },
                question4: {
                    question: "Star Tropics contains a hidden message on a blank piece of yellow paper included with the game where the player must",
                    options: {
                        a: "Burn the paper",
                        b: "Hold the paper to a bright light",
                        c: "Submerge the paper underwater",
                        d: "Freeze the paper"
                    },
                    answer: "c"
                },
                question5: {
                    question: "Mike's uncle is named",
                    options: {
                        a: "Dr. Mario",
                        b: "Dr. Robotnik",
                        c: "Dr. Jones",
                        d: "Dr. Light"
                    },
                    answer: "c"
                }
            },
            summary: "Find out just how resourceful you can be in this classic game, with its mixture of adventure and RPG elements.",
            name: "Star Tropics",
            audio: "assets/audio/startropics.mp3"
        },
        zelda: {
            questions: {
                question1: {
                    question: "In North America, Nintendo released the Legend of Zelda on a cartrige colored",
                    options: {
                        a: "Silver",
                        b: "Black",
                        c: "Red",
                        d: "Gold"
                    },
                    answer: "d"
                },
                question2: {
                    question: "In Japan, the Legend of Zelda is known as",
                    options: {
                        a: "The Hyrule Fantasy",
                        b: "Majora's Mask",
                        c: "Wand of Gamelon",
                        d: "Link's Awakening"
                    },
                    answer: "a"
                },
                question3: {
                    question: "The most powerful sword Link can use in the Legend of Zelda is called the",
                    options: {
                        a: "Magical Sword",
                        b: "Master Sword",
                        c: "White Sword",
                        d: "Alucard Sword"
                    },
                    answer: "a"
                },
                question4: {
                    question: "The game's manual states that Pols Voices hate loud noises. In Japan, they can be defeated by",
                    options: {
                        a: "The Nintendo Zapper",
                        b: "The Power Pad",
                        c: "The second controller's microphone",
                        d: "The Power Glove"
                    },
                    answer: "c"
                },
                question5: {
                    question: "The most powerful weapon to use against Ganon is",
                    options: {
                        a: "Candles",
                        b: "Silver Arrow",
                        c: "Bombs",
                        d: "Boomerang"
                    },
                    answer: "b"
                }
            },
            summary: "Welcome to the Legend of Zelda. Where the only sound you'll hear is your own heart pounding as you race through forests, lakes, mountains and dungeonous mazes in an attempt to restore peace to the land of Hyrule.",
            name: "The Legend of Zelda",
            audio: "assets/audio/zelda.mp3"
        },
        punchout: {
            questions: {
                question1: {
                    question: "Little Mac can regain health between rounds by",
                    options: {
                        a: "Eating one of Doc Louis' chocolate bars",
                        b: "Pressing the Select button",
                        c: "By joining the Nintendo fun club today!",
                        d: "Drinking with Soda Popinski"
                    },
                    answer: "b"
                },
                question2: {
                    question: "A clue appears in the game to show the player when to attack Bald Bull and Piston Honda from",
                    options: {
                        a: "A bearded man in the crowd",
                        b: "An exposed bandage",
                        c: "Mario dressed as a referee",
                        d: "A flashing jewel"
                    },
                    answer: "a"
                },
                question3: {
                    question: "Soda Popinski's laugh from Mike Tyson's Punch-Out!! is the same laugh from",
                    options: {
                        a: "Sagat's laugh in Street Fighter II",
                        b: "Ganon's laugh in Zelda II: Adventure of Link",
                        c: "Duck Hunt Dog's laugh in Duck Hunt",
                        d: "The boss laugh in Kung Fu"
                    },
                    answer: "b"
                },
                question4: {
                    question: "Mike Tyson's Punch-Out!! was re-released in North America with a new final boss named",
                    options: {
                        a: "Gabby Jay",
                        b: "Bear Hugger",
                        c: "Nick Bruiser",
                        d: "Mr. Dream"
                    },
                    answer: "d"
                },
                question5: {
                    question: "Soda Popinski in Japan is known as",
                    options: {
                        a: "Dragon Chan",
                        b: "Piston Hondo",
                        c: "Vodka Drunkinski",
                        d: "Piston Hurricane"
                    },
                    answer: "c"
                }
            },
            summary: "It's a right jab, a left hook, an uppercut - it's Mike Tyson's Punch-Out!!",
            name: "Mike Tyson's Punch-Out!!",
            audio: "assets/audio/punchout.mp3"
        }
    }
    
// Initialize global variables for keeping track of win/loss
    var roundCorrect = 0;
    var roundIncorrect = 0;
    var globalCorrect = 0;
    var globalIncorrect = 0;
    var globalGames = 0;
    var globalCorrectPercent = 0;
    var globalIncorrectPercent = 0;
// Initialize game/round content
    var questionKeys = Object.keys(trivia.bubblebobble.questions);
    var questionIndex = 0;
    var displayQuestion = trivia.bubblebobble.questions[questionKeys[questionIndex]];
    var answer = trivia.bubblebobble.questions.question1.answer;
    var audio = new Audio(trivia.bubblebobble.audio);
    var defaultAudio = new Audio("assets/audio/nesclassic.mp3");
    var gameSelection = "bubblebobble";
// Timer per question
    var timer = 5;
    var intervalId;
    var hasGuessed = false; // Only one choice per question
// Add games to carosel
    var gameImages = ["bubblebobble", "megaman2", "metroid", "castlevania", "mario", "startropics", "zelda", "punchout", "finalfantasy", "kidicarus"];
    $.each(gameImages, function(i) {
        $(".container-inner").append(`<img class="img-style" game-name="${gameImages[i]}" src="assets/images/${gameImages[i]}.png">`);
    })
    var canChooseGame = true; // Can't select a different game mid-round

    $("#timer").html(timer);
    $(".globalGames").html(`Total Games (${globalGames})`);
    $(".globalCorrect").html(`Correct: ${globalCorrect}`);
    $(".globalIncorrect").html(`Incorrect: ${globalIncorrect}`);
    $(".roundCorrect").html(`Correct: ${roundCorrect}`);
    $(".roundIncorrect").html(`Incorrect: ${roundIncorrect}`);
    defaultAudio.play();

// Click event to queue selected game's summary to prompt click to start
    $(".container-inner").on("click", ".img-style", function() {
        if (canChooseGame) {
        gameSelection = ($(this).attr("game-name"));
        var summary = trivia[gameSelection].summary;
        var name = trivia[gameSelection].name;
        $(".reset").html(`
            <h2 class="font8Bit">${name}</h2>
            <p><h4 class="instructions">${summary}</h4></p><br>
            <button class="btn btn-lg btn-danger btn-fill start" game-name="${gameSelection}">START</button>
        `)
        }
    })  

// Click event to reset question index, counters, timer, and question content for new round
    $(".reset").on("click", ".start", function() {
        defaultAudio.pause();
        canChooseGame = false;
        roundCorrect = 0;
        $(".roundCorrect").html(`Correct: ${roundCorrect}`);
        roundIncorrect = 0;
        $(".roundIncorrect").html(`Incorrect: ${roundIncorrect}`);
        questionIndex = 0;
        hasGuessed = false;
        globalGames++;
        $(".globalGames").html(`Total Games (${globalGames})`);
        questionKeys = Object.keys(trivia[gameSelection].questions);
        questionIndex = 0;
        displayQuestion = trivia[gameSelection].questions[questionKeys[questionIndex]];
        audio = new Audio(trivia[gameSelection].audio);
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
        audio.play();
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
                $(".roundCorrect").html(`Correct: ${roundCorrect}`);
                globalCorrect++;
                calculateRates();
                $(".selected").attr("class", "answer");
                $(".reset").html('<div class="emoji">✅</div><div class="emojiText"> Correct!</div>');
            } else {
                roundIncorrect++;
                $(".roundIncorrect").html(`Incorrect: ${roundIncorrect}`);
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
                setTimeout (function gameOver() {
                    audio.pause();
                    $(".reset").empty();
                    $("#question").empty();
                    $("#options").empty();
                    canChooseGame = true;
                    $(".reset").html(`<h2 class="font8Bit">Choose Another Game</h2>`);
                    defaultAudio.play();
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
        displayQuestion = trivia[gameSelection].questions[questionKeys[questionIndex]];
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
            $(".roundIncorrect").html(`Incorrect: ${roundIncorrect}`);
            globalIncorrect++;
            calculateRates();
            // Reset question and options for next round after 2 second delay
            if (questionIndex < questionKeys.length-1) {
                $(".guess[value='" + displayQuestion.answer + "']").attr("class", "answer");
                $(".reset").html('<div class="emoji">⏰</div><div class="emojiText"> Time\'s Up!</div>');
                setTimeout (nextRound, 1000 * 2);
            } else {
                $(".guess[value='" + displayQuestion.answer + "']").attr("class", "answer");
                $(".reset").html('<div class="emoji">⏰</div><div class="emojiText"> Time\'s Up!</div>');
                setTimeout (function gameOver() {
                    audio.pause();
                    $(".reset").empty();
                    $("#question").empty();
                    $("#options").empty();
                    canChooseGame = true;
                    $(".reset").html(`<h2 class="font8Bit">Choose Another Game</h2>`);
                    defaultAudio.play();
                } , 1000 * 4);
            }
        }
    }

// Calculate win/loss rates and update in scoreboard
    function calculateRates() {
        globalCorrectPercent = parseFloat((globalCorrect*100.0/(globalCorrect + globalIncorrect)).toFixed(1));
        globalIncorrectPercent = parseFloat((globalIncorrect*100.0/(globalCorrect + globalIncorrect)).toFixed(1));
        $(".globalCorrect").html('Correct: ' + globalCorrect + ' (' + globalCorrectPercent + '%)');
        $(".globalIncorrect").html('Incorrect: ' + globalIncorrect + ' (' + globalIncorrectPercent + '%)');
    }

});