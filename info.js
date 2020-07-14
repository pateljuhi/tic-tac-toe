var module = function () {
    var xplayer;
    var oplayer;
    var drew;
    var content;
    var winningCombinations;
    var turn = 0;
    var theCanvas;
    var c;
    var cxt;
    var squareFilled = 0;
    var w;
    var y;
    drew = new Array();
    content = new Array();
    var countx = 0;
    var county = 0;
    var tie = 0;
    winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var l = 0; l <= 8; l++) {
        drew[l] = false;
        content[l] = '';
    }
    /* --------- Function For Getting Girst Player ----------*/
    var getFirstPlayer = function () {
        if (turn == 0) {
            $("#turn").text(xplayer);
            console.log("" + xplayer + " " + "go first");
        }
    };
    /*$(document).ready(function () {});*/
    /*-------------- Function for ResetGame -------------------*/
    function resetGame() {
        //stupid way to do it
        /* var html_doc = '<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <title>Welcom To The Game</title> <link rel="stylesheet" href="css/welcome.css"> </head><body> <div class="welcome"> <h1>WELCOME </h1> <h2>TO</h2> <img src="images/TicTacToe.jpg" alt="Tic-Tac-Toe" width="500" height="100"> <div class="ask"> <p> <i>Would you like to play a game?</i></p><button id="btn"><a href="index.html">I want to Play</a></button> </div></div></body></html>'*/
        countx = 0;
        county = 0;
        tie = 0;
        turn = 0;
        squareFilled = 0;
        xplayer = "";
        oplayer = "";
        for (var l = 0; l <= 8; l++) {
            drew[l] = false;
            content[l] = '';
        }
        //$('#box').replaceWith(html_doc);
        $("#box").load("welcome.html"); //AJAX- not work on localhost
    }
    /*-------------- Function for Display Result ---------------*/
    var displayResults = function () {
        $('#winCount').html('Wins-x : ' + countx);
        $('#lossCount').html('Wins-o : ' + county);
        $('#tieCount').html('Ties : ' + tie);
    };
    /* ------------- Function for Checking Game Status -------------*/
    var checkGameState = function (symbol) {
        for (var a = 0; a < winningCombinations.length; a++) {
            if (content[winningCombinations[a][0]] == symbol && content[winningCombinations[a][1]] == symbol && content[winningCombinations[a][2]] == symbol) {
                alert(symbol + " WON!");
                if (symbol == 'X') {
                    countx++;
                }
                if (symbol == 'O') {
                    county++;
                }
                nextRound();
            }
        }
        if (squareFilled > 8) {
            alert("THE GAME IS OVER!");
            /*location.reload(true);*/
            tie++;
            nextRound();
        }
    };
    /*--------------- Function for Next Round  -----------------*/
    var nextRound = function () {
        /* location.reload(true);*/
        /*theCanvas = "canvas" + canvasNumber;*/
        c = document.getElementById("canvas1");
        cxt = c.getContext("2d");
        cxt.setTransform(1, 0, 0, 1, 0, 0);
        cxt.clearRect(0, 0, c.width, c.height);
        cxt.restore();
        cxt.beginPath();
        c = document.getElementById("canvas2");
        cxt = c.getContext("2d");
        cxt.setTransform(1, 0, 0, 1, 0, 0);
        cxt.clearRect(0, 0, c.width, c.height);
        cxt.restore();
        cxt.beginPath();
        c = document.getElementById("canvas3");
        cxt = c.getContext("2d");
        cxt.setTransform(1, 0, 0, 1, 0, 0);
        cxt.clearRect(0, 0, c.width, c.height);
        cxt.restore();
        cxt.beginPath();
        c = document.getElementById("canvas4");
        cxt = c.getContext("2d");
        cxt.setTransform(1, 0, 0, 1, 0, 0);
        cxt.clearRect(0, 0, c.width, c.height);
        cxt.restore();
        cxt.beginPath();
        c = document.getElementById("canvas5");
        cxt = c.getContext("2d");
        cxt.setTransform(1, 0, 0, 1, 0, 0);
        cxt.clearRect(0, 0, c.width, c.height);
        cxt.restore();
        cxt.beginPath();
        c = document.getElementById("canvas6");
        cxt = c.getContext("2d");
        cxt.setTransform(1, 0, 0, 1, 0, 0);
        cxt.clearRect(0, 0, c.width, c.height);
        cxt.restore();
        cxt.beginPath();
        c = document.getElementById("canvas7");
        cxt = c.getContext("2d");
        cxt.setTransform(1, 0, 0, 1, 0, 0);
        cxt.clearRect(0, 0, c.width, c.height);
        cxt.restore();
        cxt.beginPath();
        c = document.getElementById("canvas8");
        cxt = c.getContext("2d");
        cxt.setTransform(1, 0, 0, 1, 0, 0);
        cxt.clearRect(0, 0, c.width, c.height);
        cxt.restore();
        cxt.beginPath();
        c = document.getElementById("canvas9");
        cxt = c.getContext("2d");
        cxt.setTransform(1, 0, 0, 1, 0, 0);
        cxt.clearRect(0, 0, c.width, c.height);
        cxt.restore();
        cxt.beginPath();
        for (var l = 0; l <= 8; l++) {
            drew[l] = false;
            content[l] = '';
            /*turn == 0;
            squareFilled = 0;
            */
        }
        squareFilled = 0;
        /*cxt.reload(true);*/
    };
    /* ------- Function for playing Game and selecting square ------ */
    var selectSquare = function (canvasNumber) {
        theCanvas = "canvas" + canvasNumber;
        c = document.getElementById(theCanvas);
        cxt = c.getContext("2d");
        if (drew[canvasNumber - 1] == false) {
            if (turn % 2 == 0) {
                cxt.beginPath();
                cxt.moveTo(10, 10);
                cxt.lineTo(40, 40);
                cxt.moveTo(40, 10);
                cxt.lineTo(10, 40);
                cxt.stroke();
                cxt.closePath();
                $("#turn").text(oplayer);
                content[canvasNumber - 1] = 'X';
            }
            else {
                cxt.beginPath();
                cxt.arc(25, 25, 20, 0, Math.PI * 2, true);
                cxt.stroke();
                cxt.closePath();
                $("#turn").text(xplayer);
                content[canvasNumber - 1] = 'O';
            }
            turn++;
            drew[canvasNumber - 1] = true;
            squareFilled++;
            checkGameState(content[canvasNumber - 1]);
        }
    };
    /* --------- Function for Generating Gameborad ---------*/
    var generateGameBoard = function () {
        $(document).ready(function () {
            $(".hide").addClass("game-board");
        });
    };
    /* ------------ Function for Getting User Information -------------*/
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
    /* ---------- Main funtion ----------*/
    var initGame = function () {
        getUserInfo();
    };
    $(document).ready(function () {
        initGame();
    });
    return {
        selectSquare: selectSquare,
        resetGame: resetGame,
        generateGameBoard: generateGameBoard,
        getFirstPlayer: getFirstPlayer,
        displayResults: displayResults
    }
}();
