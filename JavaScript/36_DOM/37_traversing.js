
// PARENT

// let parentNode = document.querySelector('.child1');
// console.log(parentNode.parentElement);
// console.log(parentNode.parentNode);
/* 
output:
    <div class="parent">
        <div class="child1">content-1</div>
        <div class="child2">content-1</div>
        <div class="child3">content-1</div>
    </div>

    <div class="parent">
        <div class="child1">content-1</div>
        <div class="child2">content-1</div>
        <div class="child3">content-1</div>
    </div>
*/


// let getParentElement = document.querySelector('html');
// console.log(getParentElement.parentElement); // null - because html is the root element and does not have a parent
// console.log(getParentElement.parentNode); // it will return the document object

// NODE TYPES:

// 1. Element Node - This is the root element of the document.
// 2. Attribute Node - This is the attribute of the element.
// 3. Text Node - This is the text content of the element.
// 4. Comment Node - This is the comment of the element.
// 5. Document Node - This is the document object.
// 6. Document Type Node - This is the document type of the document.


// Moving all above elements in a function:

function traverseElements() {
let parentNode = document.querySelector('.child1');
console.log(parentNode.parentElement);
console.log(parentNode.parentNode);

let getParentElement = document.querySelector('html');
console.log(getParentElement.parentElement);
console.log(getParentElement.parentNode);

}

// traverseElements()



// CHILD ELEMENTS:

// childNodes: This is the child elements of the current element.


function selectChild(){

    let getElementByClass = document.querySelector(".parent")

    console.log( getElementByClass.childElementCount ); // returns the number of child elements
    console.log( getElementByClass.childNodes ); // returns the child nodes
    console.log( getElementByClass.children ); // returns the child elements
    console.log( getElementByClass.firstElementChild ); // returns the first child element
    console.log( getElementByClass.lastChild ); // returns the last child node
    console.log( getElementByClass.lastElementChild ); // returns the last child element
    
}

// selectChild()

/* 
4


NodeList(9)
{
    "0": {},
    "1": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {},
    "6": {},
    "7": {},
    "8": {},
    "9": {},
}

    
HTMLCollection(4)
{
    "0": {},
    "1": {},
    "2": {},
    "3": {}
} 
    

<div class="child1">content-1</div>


kumar


<div class="child3">content-1</div>
    

*/




// SIBLING ELEMENTS:

// nextSibling: This is the next sibling element of the current element.
// previousSibling: This is the previous sibling element of the current element.
// nextElementSibling: This is the next sibling element of the current element.
// previousElementSibling: This is the previous sibling element of the current element.


function selectSiblings(){
    let child1 = document.querySelector( ".child1" )
    console.log( child1.nextSibling );
    console.log( child1.nextElementSibling );
    console.log( child1.previousSibling );
    console.log( child1.previousElementSibling );

}  

// selectSiblings()