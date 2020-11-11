
var people = new Array();
people[0] = "Vaida";
people[1] = "Maks";
people[2] = "Ryder";
people[3] = "Thomas";
people[4] = "Stefan";
people[5] = "Rowan";
people[6] = "Micheal";
people[7] = "Laim";
people[8] = "Kaidyn";
people[9] = "Jerry";
people[10] = "Jean";
people[11] = "Jasiu";
people[12] = "Ethan";
people[13] = "Haiden";
people[14] = "Harry";
people[15] = "David";
people[16] = "Daniel";
people[17] = "Cody";
people[18] = "Andrew";
people[19] = "Aiden";
people[20] = "leah";

var namecount = 0;

people.sort();
for (i = 0; i < 21; i++) {
    numberList = i;
    document.write(`${ numberList } ${ people[i]} <br>`);
}
console.log(people);
let userchoice = parseInt(prompt(`Choose a classmate by picking a random number between 0 and 21`))
if (userchoice > 0 && userchoice < 21) {
    document.write(`The number you chose was ${ userchoice } which is the number for ${ people[userchoice]}<br>`);
} else {
    alert('Pick a number between 0-21!');
    location.reload();

}
let usernamechoice = prompt(`choose a classmate name`)
for (i = 0; i <21; i++) {
    if (people[i] == usernamechoice) {
        document.write(`${usernamechoice}, was chosen.`);
    } 
}
