import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  length!: number;
  includesLetters = false;
  includesNumbers = false;
  includesSymbols = false;
  password = '';

  chooseTheLength() {
    const parsedValue = this.length;

    if (!isNaN) {
      this.length = parsedValue;
    }
  }

  onChangeLetters() {
    this.includesLetters = !this.includesLetters;
  }

  onChangeNumbers() {
    this.includesNumbers = !this.includesNumbers;
  }

  onChangeSymbols() {
    this.includesSymbols = !this.includesSymbols;
  }
  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChar = '';
    if (this.includesLetters) {
      validChar += letters;
    }
    if (this.includesNumbers) {
      validChar += numbers;
    }

    if (this.includesSymbols) {
      validChar += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
    }
    this.password = generatedPassword;
  }
}
