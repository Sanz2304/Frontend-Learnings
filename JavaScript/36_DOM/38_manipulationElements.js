function manipulateElements(){
    let newListElement = document.createElement("li")

    // console.log( newListElement );

    // newListElement.innerText = "<a>Link</a>Item-5" // This will create a new list element with the text "Item-5"
    // newListElement.innerHTML = "<a>Link</a>Item-5" // This will create a new list element with the text "Item-5" and the link "Link". Difference between innerText and innerHTML is that innerText will not render the HTML tags, but innerHTML will render the HTML tags.
    // newListElement.textContent = "<a>Link</a>Item-5" // This will create a new list element with the text "Item-5" and the link "Link"

    
    let input = document.querySelector("input")
    // console.log(input.value );

    // I added this conditioN. Because I see a empty string was there before adding the value to the newListElement. 
    // So if the input is not empty, then add the value to the newListElement.
    if (input && input.value.trim() !== "") {
        newListElement.innerText = input.value;
        let OrderList = document.querySelector('ol');
        // OrderList.append(newListElement) // This will add the newListElement to the end of the OrderList
        // OrderList.append('text', newListElement) // This will add the text "text" to the newListElement
        // OrderList.appendChild('text', newListElement) // Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node' //this error is because the newListElement is not a node.
        // OrderList.appendChild(newListElement) // this will add the newListElement to the end of the OrderList


        // Inserting the newListElement before the second child of the OrderList. It accepts two parameters, the first one is the new element to be inserted and the second one is the reference element before which the new element will be inserted.
        // OrderList.insertBefore( newListElement, OrderList.children[2] )


        // Replacing the second child of the OrderList with the newListElement. It accepts two parameters, the first one is the new element to be inserted and the second one is the reference element to be replaced.
        // orderList.replaceChild( newListElement, orderList.children[2] )


        // Removing the first child of the OrderList. It accepts one parameter, the element to be removed.
        // orderList.removeChild( orderList.children[0]  )


        // Removing the OrderList. It accepts one parameter, the element to be removed.
        // orderList.remove()
        

        //Dynamic Cascading - This is the process of changing the style of the element through the DOM and JavaScript.
        newListElement.style.color = "green"
        newListElement.style.boxShadow = "10px 10px 1px white"
        

        OrderList.appendChild(newListElement)
        // Prepending the newListElement to the OrderList. It accepts two parameters, the first one is the text node to be inserted and the second one is the element to be inserted before.
        // orderList.prepend("Text Node", newListElement )
    }
    
}   

manipulateElements()
