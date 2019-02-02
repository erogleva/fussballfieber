import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit, OnDestroy {

  @Input() start;
  @Input() end;
  @Output() zeroTrigger;
  @Input() timeOnly;
  timer: any;
  displayTime: any;

  public countDownPart: string;

  constructor(public breakpointObserver: BreakpointObserver,
              @Inject(PLATFORM_ID) private platform: any) {
    this.zeroTrigger = new EventEmitter(true);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platform)) {
      this.timer = setInterval(() => {
        if (this.start) {
          this.displayTime = this.getTimeDiff(this.start, true);
        } else {
          this.displayTime = this.getTimeDiff(this.end);
        }
      }, 1000);
    }

    this.breakpointObserver
      .observe(['(max-width: 478px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.countDownPart = 'countdown_part_small';
        } else {
          this.countDownPart = 'countdown_part';
        }
      });
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  private getTimeDiff(datetime, useAsTimer = false) {
    datetime = new Date(datetime).getTime();
    const now = new Date().getTime();

    if (isNaN(datetime)) {
      return '';
    }

    let milisecDiff = datetime - now;
    if (useAsTimer) {
      milisecDiff = now - datetime;
    }

    // Zero Time Trigger
    if (milisecDiff <= 0) {
      this.zeroTrigger.emit('reached zero');
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(milisecDiff / 1000 / 60 / (60 * 24));
    const dateDiff = new Date(milisecDiff);
    const dayString = (days) ? this.twoDigit(days) + ':' : '';
    const dayHours = days * 24;

    if (this.timeOnly) {
      const hours = dateDiff.getUTCHours() + dayHours;
      return this.twoDigit(hours) +
        ':' + this.twoDigit(dateDiff.getMinutes()) + ':'
        + this.twoDigit(dateDiff.getSeconds());
    } else {

      // Date() takes a UTC timestamp – getHours() gets hours in local time not in UTC. therefore we have to use getUTCHours()
      return {
        days: this.twoDigit(days),
        hours: this.twoDigit(dateDiff.getUTCHours()),
        minutes: this.twoDigit(dateDiff.getMinutes()),
        seconds: this.twoDigit(dateDiff.getSeconds())
      };
    }
  }

  private twoDigit(num: number) {
    return num > 9 ? '' + num : '0' + num;
  }

  private stopTimer() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

}
