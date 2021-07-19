import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  username = '';
  bool = true;
  counter = 0;
  clicks = [];

  resetUsername() {
    this.username = '';
  }

  btnClick() {
    this.bool = !this.bool;
    this.counter++;
    this.clicks.push(this.counter);
  }

  applyBg(idx) {
    console.log(idx);
    return idx >= 4 ? 'blue' : 'white';
  }
}
