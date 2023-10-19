let timer;
const element = document.getElementById("timer");
let seconds = 0;

const startTimer = () => {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            element.innerHTML = pad(minutes) + ":" + pad(remainingSeconds);
        }, 1000);
    }
};

const resetTimer = () => {
    clearInterval(timer);
     timer = null;
     seconds = 0;
     element.innerHTML = '00:00';
};

const pad = val => {
    const valString = val + "";
    return valString.length < 2 ? "0" + valString : valString;
};
