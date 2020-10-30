//* Ethan McCaffrey 19009692 Lottery task *//
var numberGen = 0;
var numbersCollection = new Array();

while (numbersCollection.length < 6) {
    numberGen = Math.floor(Math.random() * (9));
    numbersCollection.push(numberGen);
}

numbersCollection.sort();
document.write(numbersCollection.join(', '));