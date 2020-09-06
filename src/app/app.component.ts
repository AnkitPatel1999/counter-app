import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';

  count = 0;

  handleIncrease = () => {
    if (this.count < 10) {
      this.count = this.count + 1;
    } else {
      console.log('greter thsn 10 not allowed');
    }

  }

  handleDecrease() {
    if (this.count > 0) {
      this.count = this.count - 1;
    } else {
      console.log('less thsn 0 not allowed');
    }
  }

  handleReset() {
    this.count = 0;
  }

}
