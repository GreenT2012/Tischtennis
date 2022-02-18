
document.querySelector('#los').onclick = function () {
    document.querySelector('.ausgabe1').innerHTML = document.querySelector("#name1").value;
    document.querySelector('.ausgabe2').innerHTML = document.querySelector("#name2").value;
}

var counterVal1 = 0;

function incrementClick1() {
    updateDisplay1(++counterVal1);
}

function resetCounter1() {
    counterVal1 = 0;
    updateDisplay1(counterVal1);
    counterVal2 = 0;
    updateDisplay2(counterVal2);
    counterVal3 = 0;
    updateDisplay3(counterVal3);
    classChange1();
}

function updateDisplay1(val1) {
    document.getElementById("counter-label1").innerHTML = val1;
}
var counterVal2 = 0;

function incrementClick2() {
    updateDisplay2(++counterVal2);
}


function updateDisplay2(val2) {
    document.getElementById("counter-label2").innerHTML = val2;
}
var counterVal3 = 0;

function sideclick() {
    updateDisplay3(++counterVal3);
    classChange1();

}

function updateDisplay3(val3) {
    document.getElementById("seitenwechsel").innerHTML = val3;
}

function classChange1() {
    if (counterVal3 % 2 == 0)
        document.getElementById("arrow").classList.toggle('arrow-left');
}
function classChange2() {
    document.getElementById("arrow").classList.add('arrow-left');
}

