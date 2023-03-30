const readline = require('readline-sync');
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? '));
const alphKey = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//function takes in the user input and shift number
function decode(input, shift) {
    let encrypted = []
    for(let i = 0; i < input.length; i++) {
        if(input[i] === " ") {
            encrypted.push(input[i])
        } else {
            let currentIndex = alphKey.findIndex(element => element === input[i])
            console.log(i, currentIndex)
                if(currentIndex + shift > alphKey.length) {

                    encrypted.push(alphKey[currentIndex + shift - alphKey.length])
                    console.log('over z', currentIndex + shift)


                   //encrypted.push() fix it
                } else {
                    encrypted.push(alphKey[currentIndex + shift])
                }
        }
    }
    console.log(encrypted)

    return console.log(encrypted.join(""))
    

}

// console.log(decode(input, shift))
decode(input, shift)

//[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

