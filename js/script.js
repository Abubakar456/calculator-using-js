let screen = document.querySelector("#screen");
console.log(screen);

function on() {
    screen.value = "0";
}

function off() {
    screen.value = "";
}

function isOn() {
    if (screen.value != "" || screen.value == "0") {
        return true;
    }
    else {
        return false;
    }
}

function clearScreen() {
    if (screen.value == "0") {
        screen.value = "";
    }
}

function areOperandsPresent() {
    let screenText = screen.value;
    if (screenText == "" || screenText == "0") {
        return false;
    }
    else {
        return true;
    }
}

function typeZero() {
    if (screen.value != "0" && isOn()) {
        screen.value = screen.value + "0";
    }
}

function typeDoubleZero() {
    if (screen.value != "0" && isOn()) {
        screen.value = screen.value + "00";
    }
}

function typeOne() {
    if (isOn()) {
        clearScreen();
        screen.value = screen.value + "1";
    }
}

function typeTwo() {
    if (isOn()) {
        clearScreen();
        screen.value = screen.value + "2";
    }
}

function typeThree() {
    if (isOn()) {
        clearScreen();
        screen.value = screen.value + "3";
    }
}

function typeFour() {
    if (isOn()) {
        clearScreen();
        screen.value = screen.value + "4";
    }
}

function typeFive() {
    if (isOn()) {
        clearScreen();
        screen.value = screen.value + "5";
    }
}

function typeSix() {
    if (isOn()) {
        clearScreen();
        screen.value = screen.value + "6";
    }
}

function typeSeven() {
    if (isOn()) {
        clearScreen();
        screen.value = screen.value + "7";
    }
}

function typeEight() {
    if (isOn()) {
        clearScreen();
        screen.value = screen.value + "8";
    }
}

function typeNine() {
    if (isOn()) {
        clearScreen();
        screen.value = screen.value + "9";
    }
}

function typePoint() {
    if (isOn() && areOperandsPresent()) {
        screen.value = screen.value + ".";
    }
}

function typePercentage() {
    if (isOn() && areOperandsPresent()) {
        screen.value = screen.value + "%";
    }
}

function typePlus() {
    if (isOn() && areOperandsPresent()) {
        screen.value = screen.value + "+";
    }
}

function typeMinus() {
    if (isOn() && areOperandsPresent()) {
        screen.value = screen.value + "-";
    }
}

function typeDivision() {
    if (isOn() && areOperandsPresent()) {
        screen.value = screen.value + "/";
    }
}

function typeMultiplication() {
    if (isOn() && areOperandsPresent()) {
        screen.value = screen.value + "*";
    }
}

function getAnswer(){
    screen.value = eval(screen.value);
}