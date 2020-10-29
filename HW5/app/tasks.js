function task1() {
    let inputNum = document.getElementById('num').value;

    if (inputNum.length === 2 || inputNum.startsWith("-") && inputNum.length === 3) {
        numberInWords = " ";
        if (inputNum === 0) {
            numberInWords = "Ноль.";
        } else if (inputNum < 0) {
            numberInWords += "Минус " + spellOut(inputNum.slice(1));
        } else {
            numberInWords = spellOut(inputNum);
        }
    } else {
        alert("Я ещё не знаю настолько большие числа. Введите двухзначное.");
    }
    document.getElementById('answerNum').innerHTML = numberInWords;
}

let didits = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
let tens = ["одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать",
    "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
let dozens = ["", "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят",
    "девяносто"];
let numberInWords = "";

function spellOut(inputNum) {
    if (inputNum > 19 || inputNum == 10) {
        numberInWords += dozens[inputNum[0]];
        numberInWords += " ";
        numberInWords += didits[inputNum[1]];
    } else {
        numberInWords += tens[inputNum - 11];
    }
    return numberInWords;
}


function analyze() {
    let inputStr = document.getElementById('analyzeInput').value;
    let letters = inputStr.match(/[A-Z, a-z]/g).length;
    let digits = inputStr.match(/[0-9]/g).length;
    let symbols = inputStr.length - letters - digits;
    document.getElementById('analyze').innerHTML = `Букв: = ${letters} , цифр: ${digits} , другие символы: ${symbols}`;
}


function changeStr() {
    let inputStr = document.getElementById('changeInput').value;
    let newStr = "";
    for (let i = 0; i < inputStr.length; i++) {
        let letter = inputStr.charAt(i);
        if (letter.match(/[A-Z]/g)) letter.toLowerCase();
        else if (letter.match(/[a-z]/g)) letter.toUpperCase();
        else if (letter.match(/[0-9]/g)) letter.replace("_");
        newStr += letter;
        console.log(letter);
    }
    console.log(newStr);
    document.getElementById('change').innerHTML = newStr;
}

function task2() {
    let elem = document.getElementById("changeBtn");
    if (elem.value == "Stop") {
        elem.value = "Ready";
        document.getElementById("circleOne").style.backgroundColor = "white";
        document.getElementById("circleTwo").style.backgroundColor = "orange";
        document.getElementById("circleThree").style.backgroundColor = "white";
    } else if (elem.value == "Ready") {
        elem.value = "Go";
        document.getElementById("circleOne").style.backgroundColor = "green";
        document.getElementById("circleTwo").style.backgroundColor = "white";
        document.getElementById("circleThree").style.backgroundColor = "white";
    } else if (elem.value == "Go") {
        elem.value = "Stop";
        document.getElementById("circleOne").style.backgroundColor = "white";
        document.getElementById("circleTwo").style.backgroundColor = "white";
        document.getElementById("circleThree").style.backgroundColor = "red";
    }
}
