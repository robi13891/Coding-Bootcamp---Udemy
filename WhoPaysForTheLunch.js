// Given a list of names write a function that randomely choose one name from the list,
// that person will pay for the lunch!

var array = ["Ada", "Rachel", "James", "John", "Mary", "Lucas", "Jason", "Rose", "Bill", "Emma"];
var number = array.length;
index = RandomNumber(number);
console.log(index);
SelectAName(array, index);

function SelectAName(array, index){
    return console.log(array[index] + " will pay!");
}

function RandomNumber(number) {
    var output = Math.floor(Math.random() * number)
    return output;
}

