import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  fontColor: string;
  fontSize: string;

  border: string;
  margin: string;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  tiles: Tile[] = [
    { text: 'C', cols: 2, color: '#4E505F', rows: 1, fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '÷', cols: 2, rows: 1, color: '#4B5EFC', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '7', cols: 1, rows: 1, color: '#2E2F38', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '8', cols: 1, rows: 1, color: '#2E2F38', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '9', cols: 1, rows: 1, color: '#2E2F38', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: 'x', cols: 1, rows: 1, color: '#4B5EFC', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '4', cols: 1, rows: 1, color: '#2E2F38', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '5', cols: 1, rows: 1, color: '#2E2F38', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '6', cols: 1, rows: 1, color: '#2E2F38', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '-', cols: 1, rows: 1, color: '#4B5EFC', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '1', cols: 1, rows: 1, color: '#2E2F38', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '2', cols: 1, rows: 1, color: '#2E2F38', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '3', cols: 1, rows: 1, color: '#2E2F38', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '+', cols: 1, rows: 1, color: '#4B5EFC', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '.', cols: 1, rows: 1, color: '#2E2F38', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '0', cols: 1, rows: 1, color: '#2E2F38', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '<-', cols: 1, rows: 1, color: '#2E2F38', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
    { text: '=', cols: 1, rows: 1, color: '#4B5EFC', fontColor: 'white', fontSize: '20px', border: '15px', margin: '10px' },
  ]
}
