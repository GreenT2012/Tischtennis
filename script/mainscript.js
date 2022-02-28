let player1 = document.getElementsByName('spieler1').innerHTML
let player2 = document.getElementById('spieler2').innerHTML

document.getElementById("name1").addEventListener("keydown", (evt) => {
    if (evt.key === "Enter") {
        insertName();
    }
})
document.getElementById("name2").addEventListener("keydown", (evt) => {
    if (evt.key === "Enter") {
        insertName();
    }
})



function insertName() {
    document.querySelector('.ausgabe1').innerHTML = document.querySelector("#name1").value;
    document.querySelector('.ausgabe2').innerHTML = document.querySelector("#name2").value;
}

var counterVal1 = 0;
// zählt die punkte von Spieler 1
function incrementClick1() {
    updateDisplay1(++counterVal1);
    winthegame();


}// zählt die punkte runter von Spieler 1
function incrementClick11() {
    updateDisplay1(--counterVal1);
}
// resettet alles, fängt also das spiel von vorne an
function resetCounter1() {
    counterVal1 = 0;
    updateDisplay1(counterVal1);
    counterVal2 = 0;
    updateDisplay2(counterVal2);
    counterVal3 = 0;
    updateDisplay3(counterVal3);
    classChange1();
    document.querySelector('.ausgabe1').innerHTML = player1;
    document.querySelector('.ausgabe2').innerHTML = player2;
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
}

function updateDisplay1(val1) {
    document.getElementById("counter-label1").innerHTML = val1;
}
var counterVal2 = 0;
// zählt die punkte von Spieler 2
function incrementClick2() {
    updateDisplay2(++counterVal2);
    winthegame();
}// zählt die punkte runter von Spieler 2
function incrementClick22() {
    updateDisplay2(--counterVal2);
}


function updateDisplay2(val2) {
    document.getElementById("counter-label2").innerHTML = val2;
}
var counterVal3 = 0;
//sorgt dafür dass angezeigt wird wer aufschlag hat
function sideclick() {
    updateDisplay3(++counterVal3);
    classChange1();

}

function updateDisplay3(val3) {
    document.getElementById("seitenwechsel").innerHTML = val3;
}

function classChange1() {
    if (counterVal3 >= 20) {
        document.getElementById("arrow").classList.toggle('arrow-left');
        console.log('2 x seitenwechsel')
    }
    else {
        if (counterVal3 % 2 == 0) {
            document.getElementById("arrow").classList.toggle('arrow-left');
            console.log('1 x seitenwechsel')
        }
    }

}


//steuert das konfetti
function winthegame() {
    if ((counterVal1 == 11 && counterVal2 <= 9) || (counterVal2 == 11 && counterVal1 <= 9)) {
        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
        console.log('11 : 9 or 9 : 11')

    }
    else {
        if ((counterVal1 > 11) && (counterVal1 - counterVal2 >= 2) || (counterVal2 > 11) && (counterVal2 - counterVal1 >= 2)) {
            fire(0.25, {
                spread: 26,
                startVelocity: 55,
            });
            fire(0.2, {
                spread: 60,
            });
            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 45,
            });
            console.log('eine seite 2 größer')
        }

    }



}
var count = 200;
var defaults = {
    origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
    }));
}