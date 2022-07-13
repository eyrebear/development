console.log("created by Ford Eyre");



// showData(todoData)
//----------------------------------------------------
//display the whole list
// axios.get("https://api.vschool.io/fordie/todo")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))


//access form and save in variable
// const div = document.getElementById("div");
// div.style.margin = "20px"
const todoForm = document.todoform;
//event listener to submit desired entries into the database
todoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // let title = form.title.value;
    // console.log(title);
        //access form and database values, BOTH NEED to be accurate
         const newTodo = {
                title: todoForm.title.value,
                description: todoForm.description.value,
                imgUrl: todoForm.imgUrl.value
                }
                //post to database
                axios.post("https://api.vschool.io/fordie/todo", newTodo)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        })
//---------------------------------------------------------
//appear in the browser
axios.get("https://api.vschool.io/fordie/todo")
    .then(response => {
    console.log(response.data);
    for(let i = 0; i < response.data.length; i++) {
        const checkBox = document.createElement("input")
        checkBox.setAttribute("type", "checkbox")
        const h1 = document.createElement("h1")
        const par = document.createElement("p")
        h1.textContent = response.data[i].title
        // h1.style.marginLeft = "30px"
        if(response.data[i].completed === true) {
            h1.style.textDecoration = "line-through"
        }

        document.body.appendChild(h1)
        h1.append(checkBox)
        checkBox.style.margin = "10px"
        lineBreak = document.createElement("br")
        // h1.append(lineBreak)
        const descriptionText = document.createElement("p")
        descriptionText.style.fontSize = "20px"
        descriptionText.style.color = "DarkSlateGrey"
        h1.append(descriptionText)
        descriptionText.textContent = response.data[i].description
        // checkBox.style.width = "10px"
        // checkBox.style.height = "10px"
        //make delete button
        const xButton = document.createElement("button")
        xButton.textContent = "DELETE"
        xButton.style.margin = "10px";
        //append the delete button
        h1.append(xButton)
        // non global variable, I think the delete button needs to be here, also because of the forloop
        xButton.addEventListener("click", () => {
            axios.delete(`https://api.vschool.io/fordie/todo/${response.data[i]._id}`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
            document.body.removeChild(h1)
            h1.removeChild(xButton)

    })
        checkBox.addEventListener("click", () => {
            const updates = {
                completed: true
            }
            h1.style.textDecoration = "line-through"
            axios.put(`https://api.vschool.io/fordie/todo/${response.data[i]._id}`, updates)
        })
    // if(`https://api.vschool.io/fordie/todo/${response.data[i]._id}`) {
    //     h1.style.textDecoration = "line-through"
    // }
    }
    
    //non-global variables, I think the delete button needs to be here

})
//------------------------------------------------------------    
//delete data in database
// axios.delete("https://api.vschool.io/fordie/todo/62cc7a8318d1a05bceae5d59")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

//test one single id, get one specific id
// axios.get("https://api.vschool.io/fordie/todo/62cc7a8318d1a05bceae5d59")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))




//Pasted directly from scrimba, same html code

// const todoForm = document.todoform




        

//add event listeners I THINK that when a button or box is checked or pressed (post for new todo, put to edit, and delete options)
//each Id will need to be accessed for this, for edit and delete and to save a new get with id
// if checked will make font style strikethrough and completed will equal true
//delete will remove child and associated div and buttons and delete with axios
    

