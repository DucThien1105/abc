enum Player {
    None,
    X,
    O
}

class TicTacToe {
    private board: Player[] = Array(9).fill(Player.None);
    private currentPlayer: Player = Player.X;
    private gameEnded: boolean = false;

private cells: HTMLDivElement[] = [];

constructor() {
        this.createBoard();
        this.render();
    }

private createBoard(): void {
        const boardElement = document.getElementById('board');
        if (boardElement) {
            for (let i = 0; i < 9; i++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.index = i.toString();
                cell.addEventListener('click', () => this.handleCellClick(i));
                this.cells.push(cell);
                boardElement.appendChild(cell);
            }
        }
    }

private handleCellClick(index: number): void {
        if (this.gameEnded || this.board[index] !== Player.None) return;

this.board[index] = this.currentPlayer;
        this.render();
        this.checkWinner();

this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
    }

private checkWinner(): void {
        const winPatterns: number[][] = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];

for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (this.board[a] !== Player.None &&
                this.board[a] === this.board[b] &&
                this.board[a] === this.board[c]) {
                alert('Player ${this.board[a]} wins!');
                this.gameEnded = true;
                break;
            }
        }
    }

private render(): void {
        this.cells.forEach((cell, index) => {
            cell.textContent = this.board[index] === Player.X ? 'X' : this.board[index] === Player.O ? 'O' : '';
        });
    }
}

window.onload = () => {
    new TicTacToe();
};