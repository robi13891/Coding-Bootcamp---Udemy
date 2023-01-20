// Write the lyrics https://www.99-bottles-of-beer.net/lyrics.html with a while loop.

// 99 bottles of beer on the wall, 99 bottles of beer. ---> 1 <= i <= 99
// Take one down and pass it around, 98 bottles of beer on the wall. --> i-1

// 1 bottle of beer on the wall, 1 bottle of beer. ---> if i==1 write no more instead of i-1
// Take one down and pass it around, no more bottles of beer on the wall.

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

var i = 99;
while (i != 0) {    
    if (i == 1) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        console.log(" ");
    } else {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
        console.log("Take one down and pass it around, " + i-1 + " bottles of beer on the wall.");
        console.log(" ");
    }
    i--;
}
console.log("No more bottles of beer on the wall, no more bottles of beer.");
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
console.log("");