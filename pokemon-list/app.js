// console.log("greetings");

// // XMLHttpRequest


// //create a request (xhr)
// // what parts of this object are important for our request

// // xhr.onreadystatechange
// // xhr.status

// //-------------------------------------------------
// //Step One - get the data
// //-------------------------------------------------
// // XMLHttpRequest
// const xhr = new XMLHttpRequest()
// // https://api.vschool.io/pokemon

// //-------------------------------------------------
// //Step two - display the data
// //-------------------------------------------------

// // xhr.readyState
// //4 // 200

// //Write a function that gets the JSON and parses the JSON to create an array of objects that look like this:
// // {
// //     name: 'Charmander',
// //     resource_uri: 'api/v1/pokemon/8/'
// // },
// // {(Another pokemon object)},
// // {(Another pokemon object)},
// // {(Another pokemon object)},
// // ...
const xhr = new XMLHttpRequest()
// // xhr.open has 3 arguments: method, url, async?
xhr.open("GET","https://api.vschool.io/pokemon", true)
// //Send it!!  send the request
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;  //server puts data, or error in response text
        //console.log(xhr.responseText)
        const data = JSON.parse(jsonData);
        console.log(data);
        showData(data.objects[0].pokemon)
        // const h1 = document.createElement(`h1`);
    }
}        
        
//         //showData(data)

//         //const name = data.name;
//         // document.getElementById("demo1").textContent = "JSON results: " + jsonData;
//         // document.getElementById("demo2").textContent = "Parsed JSON's 'name' property: " + data.name;
//         // spaceshipurl = data.starships[0];
//         // console.log(spaceshipurl);
//     } else if(xhr.readyState === 4 && xhr.status !==200) {
//         console.log(`Error! Check the address!`);
//     }
// };
showData = (arr) => {
    for(i = 0; i < arr.length; i ++) {
        console.log(arr[i].name)
    const h1 = document.createElement(`h1`);
    h1.textContent = arr[i].name;
    document.body.appendChild(h1)
    }
}
//-----------------------------------------------------------------
// # **Step Two**

// Make each Pokemon's name show up on a separate line in the browser.

// You will be using a for loop to iterate through each pokemon object, 
// and some DOM mamnipulation to add nodes for each Pokemon.

// - The data that comes from the url endpoint above is complex. 
// Notice that the "objects" property is an array, so you'll need to index into it's 1st item 
// in order to get any of the pokemon names (`data.objects[0]...`);


// const xhr = new XMLHttpRequest()
// //      method               url                  ansyc?
// xhr.open("GET", "https://api.vschool.io/pokemon", true)
// xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         //pass data to pokemonArray?
//        // addPokemonData(data.objects[0].pokemon)
//         console.log(data.objects[0].pokemon)
//         showData(data.objects[0].pokemon)

//         console.log(typeof data)
//         console.log(data)
//         console.log(xhr.responseText)
//     }
    
// }

// function showData(pokemon){
    
//     for (let i = 0; i < pokemon.length; i++) {

//     const h1 = document.createElement('h1')
//     h1.textContent = pokemon[i].name
//     document.body.appendChild(h1)

//     }
// }
