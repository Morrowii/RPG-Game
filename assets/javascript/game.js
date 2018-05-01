// To-Do List: 1. Adjust character stats. 2. Annotate code. 3. Fancy animations and music?

var firstChoice = false;
var secondChoice = false;
var baseAttack = 0;
var attack = 0;
var counterAttack = 0;
var playerHP = 0;
var challengerHP = 0;
var wins = 0;

$(".container-fluid").on("click", ".character", function() {
    if (firstChoice === false) {
        $(this).addClass("m-auto player");
        $(this).removeClass("mt-auto character");
        $(".character").addClass("npc");
        playerHP = parseInt($(this).attr("data-health"));
        $("#player-health").text(playerHP.toString());
        baseAttack = parseInt($(this).attr("data-attack"));
        firstChoice = true;
    }
    else if (firstChoice === true && secondChoice === false) {
        $(this).addClass("m-auto challenger");
        $(this).removeClass("mt-auto");
        challengerHP = parseInt($(this).attr("data-health"));
        $("#challenger-health").text(challengerHP.toString());
        counterAttack = parseInt($(this).attr("data-attack"));
        secondChoice = true;
    }
})

$(".container-fluid").on("click", "button", function() {
    if (firstChoice === true && secondChoice === true && playerHP > 0) {
        attack += baseAttack;
        challengerHP -= attack;
        $("#challenger-health").text(challengerHP.toString());
        playerHP -= counterAttack;
        $("#player-health").text(playerHP.toString());
        if (challengerHP <= 0) {
            $("#challenger-health").text("0");
            wins += 1;
            $(".challenger").addClass("invisible");
            $(".challenger").removeClass("challenger");
            secondChoice = false;
        }
        if (playerHP <= 0) {
            $("#player-health").text("0");
            $(".player").addClass("invisible");
            $("h2").text("Defeat!");
        }
        if (wins === 3) {
            $("h2").text("Victory!");
        }
    }
})