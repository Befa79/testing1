
function myFunctionb1() {
    var a = 12;
    var element = document.getElementById("button1");
    element.classList.toggle("hbutton");
    var x = document.getElementById("myprogram1");
    if (x.innerHTML === " ") {
        x.innerHTML = "5 Meditation meetings for "+ a +"&euro; per session";
    } else {
        x.innerHTML = " ";
    }
}


function myFunctionb2() {
    var b = 30;
    var element = document.getElementById("button2");
    element.classList.toggle("hbutton");
    var x = document.getElementById("myprogram2");
    if (x.innerHTML === " ") {
        x.innerHTML = "3 Mentoring meetings for "+ b +"&euro; per session";
    } else {
        x.innerHTML = " ";
    }
}


function myFunctionb3() {  
    var c = 60;
    var element = document.getElementById("button3");
    element.classList.toggle("hbutton");
    var x = document.getElementById("myprogram3");
    if (x.innerHTML === " ") {
        x.innerHTML = "2 Psychology meetings for "+ c +"&euro; per session";
    } else {
        x.innerHTML = " ";
    }
}