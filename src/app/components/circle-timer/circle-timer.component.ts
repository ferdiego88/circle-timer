import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-circle-timer',
  templateUrl: './circle-timer.component.html',
  styleUrls: ['./circle-timer.component.scss']
})
export class CircleTimerComponent implements OnInit {

  public intervalo:any;
  public spinnerClass = 'svg-circle-quiet';
  public otpSend = true;

  labelTimer:string = '';
  constructor() { }

  ngOnInit(): void {
   this.changeElement();
  }

   iniziateCountDown(time: number) {

    const timeInterval = interval(1000);
    const countDown = timeInterval.pipe(take(time));
    //let countdownNumberEl = document.getElementById('countdown-number')!;

    this.otpSend = false;
    countDown.subscribe( (count) => {

     this.labelTimer = `${(time-count)}`;

     if(time -count ===1) {
      this.spinnerClass = 'svg-circle-quiet';
      this.labelTimer = '';
      let countdownContainer = document.getElementById('container')!;
      countdownContainer.style.pointerEvents = 'all';
      countdownContainer.style.backgroundColor = 'fff';
      this.otpSend = true;
     }

    })
  }


  changeElement() {
    this.iniziateCountDown(30);
    let countdownContainer = document.getElementById('container')!;
    this.spinnerClass = 'svg-circle-movement';
    countdownContainer.style.pointerEvents = 'none';
    countdownContainer.style.backgroundColor = 'f5f5f5';

  }

}
