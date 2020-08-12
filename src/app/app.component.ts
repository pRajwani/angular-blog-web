import { Component } from '@angular/core';
import { TimeoutService } from './services/timeout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-ang';
  constructor(private timeout:TimeoutService){
    this.timeoutF();
  }
  timeoutF(){
    this.timeout.checkTime()
  }
}


