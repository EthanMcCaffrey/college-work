var people = ["Rowan", "Vaida", "Maks", "Ryder", "Thomas", "Stefan", "Micheal", "Liam", "Kaidan", "Jerry", "Jean", "Jaisu", "Ethan", "Haiden", "Harry", "David", "Daniel", "Cody", "Andrew", "Aidren", "Leah", "Bob", "kyle","Ethan","Ethan"];
people.sort()
var Counter = 0;
var namedsearch = prompt('Choose a name');
var nameinarray =false;

for (i = 0; i < people.length; i++) {
    if (people[i] == namedsearch) {
        Counter++
        nameinarray = true;
    }
}
if (nameinarray == false) {
    document.write("Please choose a name that is in the list");
}
if (nameinarray == true) {
    document.write("This name " +namedsearch+ " appears " +Counter+ " times in the array ");
}


