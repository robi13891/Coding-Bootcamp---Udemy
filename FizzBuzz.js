// Numbers between 1 to 100.
// If it's divisible by 3 --> Fizz
// If it's divisible by 5 --> Buzz
// If it's divisible by 3 and 5 --> FizzBuzz
// Else print the number

// // no array version
// var i = 0;
// var answer = " ";
// var number =  1;
// for (i = 0; i < 100; i++ ) {
//     if (number % 3 == 0 && number % 5 == 0) {
//         answer = "FizzBuzz";
//     } else if (number % 3 == 0) {
//         answer = "Fizz";
//     } else if (number % 5 == 0) {
//         answer = "Buzz";
//     } else answer = number;
//     console.log(i+1 + ": " + answer);
//     number++;
// }

// array version
var array = [];
for (i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        array[i] = "FizzBuzz";
    } else if (i % 3 == 0) {
        array[i] = "Fizz";
    } else if (i % 5 == 0) {
        array[i] = "Buzz";
    } else {array[i] = i+1}
    console.log(array[i]);
}

