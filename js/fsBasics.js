function addTwoNumer(n1, n2) {
    const result = n1 + n2;
    console.log(`${n1} + ${n2} = ${result}`);
}

function addTwoNumer2(n1, n2) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    console.log("== typeof n1", typeof n1)
    console.log("== typeof n2", typeof n2)

    const result = n1 + n2;
    console.log(`${n1} + ${n2} = ${result}`);
}


let welcomemessage = "Hallo Du"
console.log(welcomemessage)
welcomemessage = welcomemessage + " da"
console.log(welcomemessage)


const wm2 = "HALLO DU"
addTwoNumer(23,25)
console.log(wm2)
//wm2=wm2+" DA"
//console.log (wm2)
const userInput = document.getElementById("user_input").nodeValue
console.log(userInput)

const headerText = document.getElementById("header").textContent
console.log(headerText)

let a = 1
let b = 2

let c = a + b

console.log(`${a} + ${b} = ${c}`)

a = 4
b = 5
c = a + b
console.log(`${a} + ${b} = ${c}`)





addTwoNumer(12,3)
addTwoNumer(23,5)



// camelCase
// PascalCase
