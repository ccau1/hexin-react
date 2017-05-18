export default class Countdown {
  _interval: number;
  _seconds: number;
  _startTime: number;

  constructor(seconds: number): void {
    this.setSeconds(seconds);
  }

  setSeconds(seconds: number): Object {
    this._seconds = seconds;
    return this;
  }

  stopCountdown(): void {
    clearInterval(this._interval);
  }

  startCountdown(cb: Function, onComplete = () => null): Object {
    this._startTime = new Date().getTime();

    clearInterval(this._interval);
    this._interval = setInterval(() => {
      this._timePassedMs = new Date().getTime() - this._startTime;
      let timePassedSec = this._timePassedMs / 1000;
      let remaining = Math.ceil(this._seconds - timePassedSec);
      cb(parseInt(remaining, 10));
      if (remaining <= 0) {
        clearInterval(this._interval);
        onComplete();
      }
    }, 500);

    return this;
  }
}
