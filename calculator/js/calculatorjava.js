//* Ethan McCaffrey 19009692 Calculator *//
var userinput_One = 0;
var userinput_Two = 0;
var addedNumbers = 0;
var minusNumbers = 0;
var multiplyNumbers = 0;
var divideNumbers = 0;

while (userinput_One <= 0 && userinput_Two <= 0) {

    userinput_One = parseInt(prompt('Enter a number'));
    userinput_Two = parseInt(prompt('Enter a second number'));
}

function sumAdd() {
    addedNumbers = (userinput_One + userinput_Two);
    document.write(`By adding ${userinput_One} + ${userinput_Two}, you get ${addedNumbers}`);
}

function sumDifference() {
    minusNumbers = (userinput_One - userinput_Two);
    document.write(`From ${userinput_One} & ${userinput_Two}, you get a difference of ${minusNumbers}`);
}

function sumMultiply() {
    multiplyNumbers = (userinput_One * userinput_Two);
    document.write(`By multiplying ${userinput_One} x ${userinput_Two}, you get ${multiplyNumbers}`);
}

function sumDivide() {
    divideNumbers = (userinput_One / userinput_Two);
    document.write(`By dividing ${userinput_One} / ${userinput_Two}, you get ${divideNumbers}`);
}

function sumMinus() {
    minusNumbers = (userinput_One - userinput_Two);
    document.write(`Taking away ${userinput_One} - ${userinput_Two}, you get ${minusNumbers}`);
}

var userChoice = prompt('What would you like to find? add, difference, multiply, divide or subtract');

switch (userChoice) {
    case 'add':
        sumAdd();
        break;
    case 'difference':
        sumDifference();
        break;
    case 'multiply':
        sumMultiply();
        break;
    case 'divide':
        sumDivide();
        break;
    case 'subtract':
        sumMinus();
        break;
}