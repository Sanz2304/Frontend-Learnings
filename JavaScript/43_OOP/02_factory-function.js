// Creating Reusable Functions - Normal Function

function createPerson(userName, userage) {
    let obj = {};
 
    obj.userName = userName;
    obj.userage = userage;
 
    obj.bio = function () {
     return `${this.userName} is learning JS`;
    }
 
    obj.userInterest = function () {
     return `${this.userName} love to see youtube`;
    }
 
    return obj;
 }
 
 let person1 = createPerson('Santhosh', 25);
 let person2 = createPerson('Sheetal', 24);
 
 // console.log(person1);
 // console.log(person2);
 // console.log(person2.userInterest());



 // Creating Reusable Functions - Factory Function : Factory Function is a function that returns an object

 function createFacFunc(userName, userAge){
    return {
        userName : userName,
        useAge : userAge,
        // userName, // if key and value are same, we can write like this
        // userAge,
        theirHobbies(){
            return `${this.userName} is love to play GTA Games`
        }
    }
 }

 let res = createFacFunc('Santhosh', 25)
 let res1 = createFacFunc('Sheetal', 25)

 console.log(res);
 console.log(res1);
 console.log(res1.theirHobbies());
 
