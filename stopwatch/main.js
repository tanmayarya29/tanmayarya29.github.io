const a = document.getElementById('min');
const b = document.getElementById('sec');
const c = document.getElementById('ms');

var min = 0;
var sec = 0;
var ms = 0;
var stoptime = true;

const sta=()=> {
  if (stoptime) {
        stoptime = false;
        timerCycle();
    }
}
const sto=()=> {
  if (!stoptime) {
    stoptime = true;
  }
}

const timerCycle=()=> {
    if (!stoptime) {
    ms = parseInt(ms);
    sec = parseInt(sec);
    min = parseInt(min);
    ms++;
    if (ms == 99) {
      sec ++;
      ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
      ms = 0;
    }

    if (ms < 10 || ms == 0) {
      ms = '0' + ms;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    a.innerHTML = min;
    b.innerHTML = sec;
    c.innerHTML = ms;
    document.title = min + ":" + sec + " Stopwatch";


    setTimeout(timerCycle,1);
  }
}

const res=()=> {
    a.innerHTML = "00";
    b.innerHTML = "00";
    c.innerHTML = "00";
    document.title = "Stopwatch";
    stoptime = true;
    min = 0;
    sec = 0;
    ms = 0;

}