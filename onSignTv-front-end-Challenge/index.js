
// Getting the Number
const num = document.getElementById('num');

// Setting the Number
function setNum(){
    var currentNum = parseInt(num.textContent);
    currentNum == 99 ? currentNum = 1 : currentNum += 1;
    num.textContent = currentNum;
};

// Setting the Timer
setInterval(setNum, 1000);


