function replaceName() {
    let name = prompt("Hi~~, what's your name?", "");
    document.getElementById("name").innerHTML = name
}

replaceName();

function validationForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (  name == "" || birthDate == "" || gender == "" || messages == "" ) {
        alert("There must not be anything unfilled");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);
    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-date-birth").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

var slideIndex = 1
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n> imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

/*
setInterval(() => {
    plusDivs(1);
}, 2000);
1000 ms = 1 s
*/




const today = new Date();
const days = today.toLocaleDateString('default', { weekday: 'long'} );
document.getElementById("daysOnly").innerHTML = days + ", ";
document.getElementById("datesOnly").innerHTML = today.getDate() ;
const month = today.toLocaleString('default', { month: 'long' });
document.getElementById("monthOnly").innerHTML = month;
document.getElementById("yearsOnly").innerHTML = today.getFullYear();


function displayTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("timeNow").innerHTML = timeString;
  }
  setInterval(displayTime, 1000); // update every second