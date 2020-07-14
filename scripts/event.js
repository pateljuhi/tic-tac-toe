document.getElementById("canvas1").addEventListener("click", function () {
    module.selectSquare(1);
});
document.getElementById("canvas2").addEventListener("click", function () {
    module.selectSquare(2);
});
document.getElementById("canvas3").addEventListener("click", function () {
    module.selectSquare(3);
});
document.getElementById("canvas4").addEventListener("click", function () {
    module.selectSquare(4);
});
document.getElementById("canvas5").addEventListener("click", function () {
    module.selectSquare(5);
});
document.getElementById("canvas6").addEventListener("click", function () {
    module.selectSquare(6);
});
document.getElementById("canvas7").addEventListener("click", function () {
    module.selectSquare(7);
});
document.getElementById("canvas8").addEventListener("click", function () {
    module.selectSquare(8);
});
document.getElementById("canvas9").addEventListener("click", function () {
    module.selectSquare(9);
});
document.getElementById("reset").addEventListener("click", function () {
    module.resetGame();
});
document.getElementById("start").addEventListener("click", function () {
    module.getFirstPlayer();
    module.generateGameBoard();
});
document.getElementById("displayr").addEventListener("click", function () {
    module.displayResults();
});