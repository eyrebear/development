const form = document["addItem"]


form.addEventListener("submit", function(e){
   // it takes the data and doesn't do a refresh
    e.preventDefault()
    //navigating to the form element to take in the submitted value
    const newItem = form.title.value
    //value = "" so the text clears after submitting,
    form.title.value = ""
    //testing that the value was taken
    console.log(newItem)
    //appending the shopping list with new items.  Seems I have to include the buttons
    //creating a variable for the parent ul 
    const listParent = document.getElementById("list")
    const listedItem = document.createElement("li")
    const divItem = document.createElement("div")
    //don't forget to add text content, or it won't show up!
    divItem.textContent = newItem
    listedItem.append(divItem)
    //append and appendChild both seem to work here
    listParent.append(listedItem)
    //create delete "x" button and "edit" button
    const editButton = document.createElement("button")
    editButton.textContent = "edit"
    editButton.style.margin = "4px"
    listedItem.append(editButton)
    listedItem.style.textAlign = "center"
    const xButton = document.createElement("button")
    xButton.textContent = "X"
    listedItem.append(xButton)
    //append the buttons

    //I think the second eventlistener needs to go here because the elements were created here, they are not global or in the html
    xButton.addEventListener("click", function(){
        //I think I target the new list item or the button, and I don't think I need a preventDefault
        listedItem.removeChild(divItem)
        listedItem.removeChild(xButton)
        listedItem.removeChild(editButton)
        listParent.removeChild(listedItem)  // I had to add this to kill dead space that was accumulating. 
    })
})

//eventually when I delete enough items, the empty space in the div gets bigger, not sure what that is, but it went away, so maybe I forgot to refresh the page before testing it
//I had to port the page to get it to break again, just refreshing wasn't picking up the error. good to know in the future
