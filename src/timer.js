//timer visually shakes very subtlely i have no fucking idea why

function Stopwatch(elem) {
  let time = 0;
  let interval;
  let offset;

  function update() {
    if (this.isOn) {
      time += delta();
    }

    let formattedTime = timeFormatter(time);
    elem.textContent = formattedTime;
    // console.log(formattedTime);
  }

  function delta() {
    let now = Date.now();
    let timePassed = now - offset;
    offset = now;

    return timePassed;
  }

  function timeFormatter(timeInMilliseconds) {
    let time = new Date(timeInMilliseconds);
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let milliseconds = time.getMilliseconds().toString();

    if(minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if(seconds.length < 2) {
      seconds = '0' + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }

    return minutes + ':' + seconds + milliseconds.slice(0, -4);
  }


  this.isOn = false;

  this.start = function() {
    if (!this.isOn) {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.stop = function() {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
  };

  this.reset = function() {
    if (!this.isOn) {
      time = 0;
      update();
    }
  };

}
