// A year is a leap year if it is evenly divisible by 4 ;
// except if that year is also evenly divisible by 100;
// unless that year is also evenly divisible by 400.

// 1) year % 4 = 0 --> continue 2) year % 4 <> 0 NOT LEAP
// 3) year % 100 = 0 --> continue 4) year % 100 <> 0 LEAP
// 5) year % 400 = 0 LEAP 6) year % 400 <> 0 NOT LEAP

year = 2100;
if (year % 4 != 0) {
    console.log("Not leap year.");
} else if (year % 100 != 0) {
    console.log("Leap year.");
} else if (year % 400 != 0) {
    console.log("Not leap year.");
} else {
    console.log("Leap year.");
}

