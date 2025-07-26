// Event Listener:
let button1 = document.getElementById('listener');

// addEventListener is used to add an event listener to the button. It accepts two parameters, the first one is the event to be listened for and the second one is the function to be executed when the event is triggered.
button1.addEventListener('click', () => {
    console.log('first button clicked');
})

// We can call multiple event listeners to the same button.
button1.addEventListener('click', () => {
    console.log('Second button clicked');
})

button1.addEventListener('click', () => {
    console.log('Third button clicked');
})



// Event Handler:

function firstHandler() {
    console.log('first button clicked');
}

function secondHandler() {
    console.log('second button clicked');
}


// Handling the onClick event inside the JavaScript:

let button2 = document.getElementById('handler');

button2.onclick = function() {
    console.log("First Handler");
}
button2.onclick = function() {
    console.log("Second Handler");
}



let image = document.querySelector( "img" )
let para = document.querySelector( "p" )

image.addEventListener(  "mouseover", function(){
    image.src = "img2.jpeg"
    para.innerText = "Im a Leaf"
} )
image.addEventListener(  "mouseout", function(){
    image.src = "img3.jpeg"
    para.innerText = "Im a Flower"
} )