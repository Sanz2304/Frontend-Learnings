// console.log(document) // It will show the complete DOM tree of the page
// console.log(document.head) // It will show the head element of the page
// console.log(document.body) // It will show the body element of the page



// getElementsByTagName - It will return a live HTMLCollection of elements with the given tag name.
let heading = document.getElementsByTagName('h1')
// console.log(heading)
/* 
output:

HTMLCollection(2) [h1, h1] // It will store the elements in the form of an array
0: h1
1: h1
length: 2
*/


// getElementsByClassName - It will return a live HTMLCollection of elements with the given class name.
let para = document.getElementsByClassName('para1')
// console.log(para)
/* 
output:

HTMLCollection(2) [p, p]
0: p
1: p
length: 2
*/



// getElementById - It will return the element with the given id. It will return the first element that matches the given id.
let uniquePara = document.getElementById('uniq-para')
// console.log(uniquePara)
/*
output:

<p id="uniq-para"> Content - 3  </p>
*/



// getElementsByName - It will return a live HTMLCollection of elements with the given name.
let input = document.getElementsByName('input-1')
// console.log(input)
/*
output:


NodeList [input]
0: input
length: 1
*/



// querySelector - It will return the first element that matches the given selector.
// let selectOne = document.querySelector("h1") // It will return the first h1 element
// let selectOne = document.querySelector(".para1") // It will return the first p element with the class para1
let selectOne = document.querySelector("#uniq-para") // It will return the first p element with the id uniq-para

// console.log( selectOne ); // It will return the first element that matches the given selector.
// console.log( selectOne.innerHTML  ); // It will return the innerHTML of the first element that matches the given selector.


// querySelectorAll - It will return all the elements that match the given selector.
// let multiElements = document.querySelectorAll( "h1" ) // It will return all the h1 elements
// let multiElements = document.querySelectorAll( ".para1" ) // It will return all the p elements with the class para1
let multiElements = document.querySelectorAll( "#uniq-para" ) // It will return all the p elements with the id uniq-para

// console.log( multiElements );



// createElement - It will create a new element.
let newElement = document.createElement( "h2" )
newElement.innerText = "Manipulating Phase" // It will set the innerText of the new element.
// console.log( newElement );
document.body.append( newElement ) // It will append the new element to the body of the page.