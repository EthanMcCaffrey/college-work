//* Ethan McCaffrey Planets array *//
var planet = new Array();
planet[0] = "mercury";
planet[1] = "venus";
planet[2] = "earth";
planet[3] = "mars";
planet[4] = "jupiter";
planet[5] = "saturn";
planet[6] = "uranus";
planet[7] = "neptune";

var distance = new Array();
distance[0] = '57.91 million km';
distance[1] = '108.2 million km';
distance[2] = '149.6 million km';
distance[3] = '227.9 million km';
distance[4] = '778.5 million km';
distance[5] = '1.434 billion km';
distance[6] = '2.871 billion km';
distance[7] = '4.495 billion km';
console.log(distance);
for (i = 0; i < 8; i++) {
    numberList = i;
    numberList = (numberList + 1);
    document.write(`${numberList}. The Planet ${planet[i]} is ${distance[i]} away from the sun. <br>`);
}