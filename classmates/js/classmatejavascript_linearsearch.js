var people = ["Rowan", "Vaida", "Maks", "Ryder", "Thomas", "Stefan", "Micheal", "Liam", "Kaidan", "Jerry", "Jean", "Jaisu", "Ethan", "Haiden", "Harry", "David", "Daniel", "Cody", "Andrew", "Aiden", "Leah", "Bob", "kyle", "Ethan", "Ethan"];
people.sort()
var number = parseInt(prompt("Input a number  between 0-25 or 0 / 25"));
if (number <= people.length && number >= 0) {
    document.write("Position " + [number + 1] + " when ordered alphabetically is " + people[number]);
}
else
    document.write("You entered a numeber that wasn't between 0-25, please try again.")

console.log(people);
for (number = 0; number < people.length; number++) {
    document.write("<br>" + [number + 1] + " position is " + people[number]);
}