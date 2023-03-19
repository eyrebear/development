import React from "react"


export default function Form() {

    const [formName, setFormName] = React.useState (
        {name: ""}
    )

    const [names, setNames] = React.useState([])

    function handleChange(event) {
        console.log(event)
       const {name, value} = event.target
        setFormName(prev => ( {
            ...prev,
            [name]:value
            // [event.target.name] : event.target.value
        }))
   }
   

   function submitName(event) {
    event.preventDefault()
    names.push(formName.name)
    setNames(prevName => {
        return[...prevName]
    })
    // setFormName(prevFormName => {
    //     return [...prevFormName, formName.name]
    // })
     console.log(names)
     
   }

   const namesArray = names.map(name => <li key={name}>{name}</li>)


  // const namesArray = formName.map(thing => <p>{thing}</p>)



    return (
        <>
        <form onSubmit={submitName}>
            <input
            type="text"
            placeholder="Enter a Name"
            onChange={handleChange}
            name="name"
            value={formName.name}
            />


            <button>Submit</button>
        </form>
        <h1>{formName.name}</h1>
        <ol>
        
        {namesArray}
        </ol>
        
        </>
    )
}