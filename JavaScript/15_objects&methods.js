// 20. OBJECTS & METHODS
// EXPLANATION
// 1. Objects are collections of key-value pairs.
// 2. Methods are functions that are associated with objects.
// 3. Objects can have properties and methods.
// 4. Properties are variables that are associated with objects.


//Object with Method:
// let userDetails = {
//     userName : 'Santhosh',
//     userAge : 25,
//     userPlace : 'Varusanadu',
//     isWorking : true,
//     whatHelikes : function(){
//         console.log("User like to watch Movies!")
//     }
// }

// console.log(userDetails); 
/* {

  userName: 'Santhosh',
  userAge: 25,
  userPlace: 'Varusanadu',
  isWorking: true,
  whatHelikes: [Function: whatHelikes]

} */

// console.log(userDetails.userName); // Santhosh
// console.log(userDetails.userAge); // 25
// console.log(userDetails.isWorking); // true
// console.log(userDetails.whatHelikes()); 
/* 

User like to watch Movies!
undefined

*/ 
// userDetails.whatHelikes() //User like to watch Movies!



//Object with Return Method:
// let userDetails = {
//     userName : 'Santhosh',
//     userAge : 25,
//     userPlace : 'Varusanadu',
//     isWorking : true,
//     whatHelikes : function(){
//         console.log("User like to watch Movies!")
//     },
//     whatsHisPlan: function () {
//         return "User is studying JS!"
//     }
// }

// let hisPlan = userDetails.whatsHisPlan();
// console.log(hisPlan); // User is studying JS!




//Objects Property in string type:
let vehicle = {
    "vehicleType" : "Four-Wheeler",
    "price" : 2000000,
    fuelType : "Petrol",
    "Seater type" : ['two', 'three', 'four']
    //using string key name, we can give space between words
}

// console.log(vehicle.vehicleType); // Four-Wheeler
// console.log(vehicle["vehicleType"]); // Four-Wheeler
// console.log(vehicle["fuelType"]); // Petrol
// console.log(vehicle["Seater type"]); // [ 'two', 'three', 'four' ]
// console.log(vehicle["Seater type"][0]); // two




//Shorthand Assigned Property
//Dynamic Property
let uName = 'Sanz'
let uAge = 25

// Usual object assigning:
// let person = {
//     uName : uName,
//     uAge : uAge,
// }

// Shorthand Assigned Property:
let dynamicProp = 'UserId'
let person = {
    uName,
    uAge,
    dynamicProp : "SANZ1234", // will not be consider by JS
    [dynamicProp] : "12312",
    ['dynamicProp'] : "75697",
}
console.log( person ); // { uName: 'Sanz', uAge: 25, dynamicProp: '75697', UserId: '12312' }
console.log( person.uName, person.uAge, person.dynamicProp, person[dynamicProp], person['dynamicProp'] ); // Sanz 25 75697 12312 75697



