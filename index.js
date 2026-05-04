//let userPasword = window.prompt(`Esti gay!`);
//if(userPasword != "Gay esti tu!") return;

const username = window.prompt("What is your name?");
document.getElementById("Title").textContent = `Welcome ${username}`;
if(username == "Alex") console.log("username is correct")
else if(username == "") console.log(`username not written`);
else console.log(`username is incorrect`);

// temperature conversion js
function convert()
{
    const tempBtn = document.getElementById("tempBtn");
    const toFahrenheit = document.getElementById("toFahrenheit");
    const toCelsius = document.getElementById("toCelsius");
    const tempResult = document.getElementById("tempResult");
    const tempNr = document.getElementById("tempNr");

    let temp, newtemp;
    if(toFahrenheit.checked){
        temp = Number(tempNr.value);
        newtemp = Math.round((9 * temp / 5 + 32)*10)/10;
        tempResult.textContent = newtemp + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(tempNr.value);
        newtemp = Math.round(((temp-32)*5/9)*10)/10;
        tempResult.textContent = newtemp + "°C";
    }
    else{
        tempResult.textContent = "Select a unit";
    }
}

// pswd gen js
function genPswd()
{
    const pswdGenBtn = document.getElementById("pswdGenBtn");
    const pswdLeng = document.getElementById("pswdLeng");
    const uppercase = document.getElementById("uppercase");
    const lowercase = document.getElementById("lowercase");
    const numbers = document.getElementById("numbers");
    const punctMark = document.getElementById("punctMark");
    const pswdResult = document.getElementById("pswdResult");

    const allUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const allLowercase = "abcdefghijklmnopqrstuvwxyz";
    const allDigits = "1234567890";
    const allPunctMark = ".,;:<>!@#$%^&*()";

    let allowedChar = "";
    let pswd = "";

    if(uppercase.checked) allowedChar += allUppercase;
    if(lowercase.checked) allowedChar += allLowercase;
    if(numbers.checked) allowedChar += allDigits;
    if(punctMark.checked) allowedChar += allPunctMark;

    if(!punctMark.checked && !lowercase.checked && !uppercase.checked && !numbers.checked)
        pswdResult.textContent = "No specifications added. Please try again!"
    else if(pswdLeng.value>30 || pswdLeng.value<1) 
        pswdResult.textContent = "Length of password lower than 1 or higher than 30. Please try again!";
    else
    {
        for(let i=0; i<pswdLeng.value; i++)
        {
            pswd += allowedChar[Math.floor(Math.random() * allowedChar.length)];
        }

        pswdResult.textContent = `Your new password is: ${pswd}`;
    }

}

// cuurent time js
function updateClock()
{
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, 0);
    const minute = now.getMinutes().toString().padStart(2, 0);
    const second = now.getSeconds().toString().padStart(2, 0);

    document.getElementById("currentTime").textContent = `${hour}:${minute}:${second}`;
}
updateClock();
setInterval(updateClock, 1000);

// stopwatch js
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let elapsedTimeString;
let timerOn = false;
function updateTimer()
{
    let hours, minutes, seconds, cseconds;
    elapsedTime =  Date.now() - startTime;
    cseconds = Math.floor((elapsedTime % 1000) / 10).toString().padStart(2, 0);
    seconds = Math.floor((elapsedTime/1000) % 60).toString().padStart(2, 0);
    minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
    hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    elapsedTimeString = `${hours}:${minutes}:${seconds}:${cseconds}`;
    //console.log(elapsedTimeString);
    document.getElementById("timer").textContent = elapsedTimeString;
}
function startTimr()
{
    if(timerOn) return;
    if(elapsedTime==0)
    {
        timerOn = true;
        startTime = Date.now();
        timer = setInterval(updateTimer, 10);
    }
    else{
        timerOn = true;
        timer = setInterval(updateTimer, 10);
    }
}
function stopTimr(){
    if(timerOn){
        clearInterval(timer);
        timerOn = false;
        updateTimer();
    }
}
function resetTimr()
{
    elapsedTime = 0;
    clearInterval(timer);
    timerOn = false;
    startTime = Date.now(); 
    document.getElementById("timer").textContent = "00:00:00:00";
}

