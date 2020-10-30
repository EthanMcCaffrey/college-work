//* Ethan McCaffrey 19009692 min max task *//
var numberlist = [6, 2, 9, 8, 3, 7, 5];
var min = 0;
var max = 100;

for ( var i=0; i < numberlist.length; i++)
{
    if (numberlist[i] > max)
    {
        max = numberlist[i];
    }
    if (numberlist[i] < min)
    {
        min = numberlist[i];
    }
}
min = Math.min (6, 2, 9, 8, 3, 7, 5);
max = Math.max (6, 2, 9, 8, 3, 7, 5);
alert (" the max value is: "+max+" and the min value is: "+min);