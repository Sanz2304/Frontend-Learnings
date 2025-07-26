let inputVal = document.querySelector('input'); // document.querySelector is used to select the input field.

function addValue(element){
    // inputVal.value += element // += is used to add the value of the element to the input field. It is a shorthand for inputVal.value = inputVal.value + element. 
    inputVal.value = inputVal.value.concat(element)
}
function clearVal(){
    inputVal.value = "" // = is used to set the value of the input field to an empty string.
}
function deleteCharacter(){
    inputVal.value = inputVal.value.slice(0, inputVal.value.length-1) // slice is used to delete the last character of the input field.
}
function evaluateVal(){
    inputVal.value = eval( inputVal.value ) // eval is used to evaluate the expression in the input field.
}