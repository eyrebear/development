/*
#1---------
1. Pass in a new color of your choosing in place of the old one. 
Hint: we don’t care what the previous color was.
const [color, setColor] = useState("pink")
Answer: setColor("yellow")

#2----------
Toggle between the colors pink and blue. 
If the current color is pink, we want to set it to blue. 
If it’s currently blue, set it back to pink.

const [color, setColor] = useState("pink")
answer:
function changeColor() {
    setColor(prevColor => !prevColor)
}

<div onClick={changeColor}>
<h1>{color ? "pink" : "blue"}</h1>
</div> Instead of strings I would actually refer to the color for css stored in variables I think,
and it can't be initized to "pink" using my way, it would need to be true instead.

ANSWER from course:
const [color, setColor] = useState("pink")

setColor(prevColor => prevColor === "pink" ? "blue" : "pink")
This works better with it being initialized as "pink" instead of true


#3-------------------
Add a new person object to the following people array in state. 
You can hard-code a new object but it must be a person object 
with firstName and lastName properties.

const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

function addPerson {
    setPeople(prevPeople => ([...prevPeople, {
        firstName: "Eddie",
        lastName: "Murphy"
    }
    ]))
}


#4-----------------------------
Change the following state-setting functions to use 
an implicit return

a.........
const [colors, setColors] = setState(["pink", "blue"])

function impReturn {
    setColors(prevColors => [...prevColors, "green"])
}

------   ------   -------    -----   -----   -------

b.........
const [countObject, setCountObject] = setState({
	count: 0
})

setCountObject(prevState => ({prevState.count + 1})

#5----------------------------------------------------
Update the following state to add an additional property 
age and set the value to 30, ensuring that the other 
properties are not overwritten.

const [person, setPerson] = useState({
		firstName: "John",
		lastName: "Smith"
})

setPerson(prevPerson => ({
    ...prevPerson,
    age: 30
}))

#6-----------------------------------------
What’s wrong with the following state update?

const [colors, setColors] = useState(["pink", "blue"])

setColors("green")

It needs to have a callback function to add into the array, otherwise
the array is now replaced with "green" 









*/