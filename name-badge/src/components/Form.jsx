import React, {useState} from "react"
import Badge from "./Badge"

export default function Form() {


    //form state for object input fields
    const [formData, setFormData] = useState ({

        firstName: "",
        lastName: "",
        email: "",
        birthPlace: "",
        phone: "",
        favFood: "",
        comments: ""     
    })

    //state for the badges that get rendered
    const [badges, setBadges] = useState([])
    //NOT USED: state for button toggle, but was not used
    const [toggle, setToggle] = useState(false)

    // function that logs changes for fields into state
    function handleChange(event) {
        const {name, value} = event.target
        //ended up going with "required" attribute to disable submit button
        // if statement to make the submit toggle false
        // if(event.target.value.length > 0) {
        //     setToggle(false)
        // } else {
        //     setToggle(true)
        // }

        console.log(event.target.value)
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
// submits the form and makes a badge, but will need a map to work, which I sent down through props in Badge component
    function submitForm(event) {
        event.preventDefault()
        setBadges(prevBadges => {
            return [...prevBadges, formData]
        })
        //clears the form -- is there a better way to do this that uses less lines of code? event.target.reset()?
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            comments: "" 
        })
        console.log(formData)
        console.log("this is the badge below")
        console.log(badges)
        

        //render a badge below the form
    }

    //original map before I sent it out to another component
    //map over the created badge/s AND render
    // const displayBadges = badges.map((badge, index) => (
    //     <div key={index}>
    //         <p className="badge-data">Name:  {badge.firstName} {badge.lastName}</p>
    //     </div>
    // ))


    return  <>
    <div id="form-container">
    <form id="form" onSubmit={submitForm}>

        <input 
            type="text"
            placeholder="First Name"
            className="form-input"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            minLength="3"
            required
        />

        <input 
            type="text"
            placeholder="Last Name"
            className="form-input"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            minLength="3"
            required
        />
        <br/>
        <input 
            type="email"
            placeholder="Email"
            className="form-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            minLength="3"
            required
        />
        <input 
            type="text"
            placeholder="Place of Birth"
            className="form-input"
            name="birthPlace"
            value={formData.birthPlace}
            onChange={handleChange}
            required
        />
        <input 
            type="number"
            placeholder="1234567899 without dashes"
            className="form-input"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            // pattern="(?=.*[0-9])"
            required

        />
        <input 
            type="text"
            placeholder="Favorite Food"
            className="form-input"
            name="favFood"
            value={formData.favFood}
            onChange={handleChange}
            required
        />
        <br/>
        <textarea id="form-comments"
            placeholder="Comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            required
        />
        <br/>
        <button disabled={toggle}>Submit</button>
        {/* disabled={toggle} */}
    </form>
    
    </div>
   {/* original call to render my map for badges container */}
    {/* <div id="badges-container">{displayBadges}</div> */}

    {/* bringing Badge component in to render, passed by props */}
    <div id="badges-container">
        <Badge badges={badges} /> 
    </div>
    </>
}