"use strict";
var Player;
(function (Player) {
    Player["None"] = "";
    Player["X"] = "X";
    Player["O"] = "O";
})(Player || (Player = {}));
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.board = Array.from({ length: 3 }, function () { return Array(3).fill(Player.None); });
        this.currentPlayer = Player.X;
    }
    TicTacToe.prototype.makeMove = function (row, col) {
        if (this.board[row][col] === Player.None) {
            this.board[row][col] = this.currentPlayer;
            this.togglePlayer();
        }
    };
    TicTacToe.prototype.togglePlayer = function () {
        this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
    };
    TicTacToe.prototype.getBoard = function () {
        return this.board;
    };
    TicTacToe.prototype.getCurrentPlayer = function () {
        return this.currentPlayer;
    };
    return TicTacToe;
}());
var App = /** @class */ (function () {
    function App() {
        this.ticTacToe = new TicTacToe();
        this.boardElement = document.getElementById('app');
        this.renderBoard();
    }
    App.prototype.renderBoard = function () {
        var _this = this;
        this.boardElement.innerHTML = '';
        this.ticTacToe.getBoard().forEach(function (row, rowIndex) {
            row.forEach(function (cell, colIndex) {
                var button = document.createElement('button');
                button.innerText = cell;
                button.addEventListener('click', function () { return _this.handleMove(rowIndex, colIndex); });
                _this.boardElement.appendChild(button);
            });
        });
    };
    App.prototype.handleMove = function (row, col) {
        this.ticTacToe.makeMove(row, col);
        this.renderBoard();
    };
    return App;
}());
var app = new App();
