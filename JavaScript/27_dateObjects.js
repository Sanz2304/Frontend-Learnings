// 27. DATE OBJECTS : Date Objects are used to work with dates and times.

/*  

A. Date.getFullYear()
B. Date.getMonth()
C. Date.getDate()
D. Date.getDay()
E. Date.getHours()
F. Date.getMinutes()
G. Date.getSeconds()
H. Date.getMilliseconds()


*/


let date = new Date();
console.log(date); // e.g., Sat Jul 19 2025 12:25:17 GMT+0530 (India Standard Time) // It will give the current date and time

console.log(date.getFullYear()); // 2025
console.log(date.getMonth()); // 6 (Note: Months are zero-indexed, so July is 6)
date.getMonth()+1 // 7 We have to add 1 to get the correct month
date.getDate() // 19
date.getDay() // 6 // 0 is Sunday, 1 is Monday, 2 is Tuesday, 3 is Wednesday, 4 is Thursday, 5 is Friday, 6 is Saturday
date.getHours() // 12 // 24 hour format
date.getMinutes() // 25
date.getSeconds() // 17
date.getMilliseconds() // 170 // 1000 milliseconds = 1 second
date.setFullYear(2026, 7, 19) // 2026-08-19
date.setMonth(7, 19) // 2025-08-19
date.setDate(19, 7, 2025) // 2025-07-19
date.setHours(12, 25, 17, 170) // 2025-07-19 12:25:17.170
date.setMinutes(25, 17, 170) // 2025-07-19 12:25:17.170
date.setSeconds(17, 170) // 2025-07-19 12:25:17.170
date.setMilliseconds(170) // 2025-07-19 12:25:17.170

date.toLocaleDateString() // 7/19/2025
date.toLocaleTimeString() // 12:25:17 PM
date.toLocaleString() // 7/19/2025, 12:25:17 PM
date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) // 7/19/2025, 12:25:17 PM





