import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  currentPlayer: string = 'O';
  winner: string = '';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]

  processPlay(line: number, column: number) {
    //console.log(`jogada na linha ${line}, coluna ${column} do jogador ${this.currentPlayer}`);
    if (this.board[line][column] == '' && this.winner == '') {
      this.board[line][column] = this.currentPlayer;
      //verifica se há um vencedor

      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }

      if (this.currentPlayer == 'O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
  }

  reset() {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]
  }

  checkWinner(player: string): boolean {
    //verifica linhas
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true;
      }
    }
    //verifica as colunas
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
        return true;
      }
    }
    //verifica diagonal
    if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player) {
      return true;
    }
    //verifica diagonal
    if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player) {
      return true;
    }
    return false;
  }
}



