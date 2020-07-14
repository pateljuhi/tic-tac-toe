var getUserInfo = function () {
    xplayer = prompt("Give name to X-player:", "");
    oplayer = prompt("Give name to O-player:", "");
    if (xplayer == "" || oplayer == "") {
        alert("please enter players name");
    }
    if (xplayer == oplayer) {
        alert("Player O’s name cannot be the same as player X’s name");
        oplayer = prompt("Give name to O-player:");
    }
    else {
        console.log("" + xplayer);
        console.log("" + oplayer);
    }
};
var initGame = function () {
    getUserInfo();
    /*document.write(xplayer);
document.write(oplayer);*/
};
$(document).ready(function () {
    initGame();
});

function nextRound() {
    y = confirm("PLAY AGAIN?");
    if (y == true) {
        /*alert("OKAY! ^^/>");*/
        /*  location.reload(true);*/
        var can = document.getElementsByClassName("canvas");
        cx = can.getContext("2d");
        $("#reset").on("click", function () {
            cx.clearRect(0, 0, canvasWidth, canvasHeight);
        });
        generateGameBoard();
        getFirstPlayer();
        /*selectSquare(); */
    }
    else {
        alert("SO LONG,SUCKER!");
    }
}