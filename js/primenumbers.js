function isPrime(num) {
    //console.log("input number: ", num)
    let result=document.getElementById("result")
    result.textContent=""

    for (let i = 2; i < num; i++) {
        //console.log("Wir sind in Schritt", i)
        //console.log("mit der Zahl", num)
        console.log(`Betrachte Rest von ${num}:${i} = ${num % i}`)
       

        if (num % i == 0) {
            result.textContent="Es ist KEINE Primzahl"
        }

    }
}

function updateName() {
    const name = prompt(`Enter a new name`);
    para.textContent = `Player1: ${name}`;
    p1.textContent=`Player1: ${name}`
}

function updateName2() {
    const name = prompt(`Enter a new name`);
    player2.textContent = `Player2: ${name}`;
    p2.textContent=`Player2: ${name}`
}

let para= document.querySelector(`c`)
console.log(para)

para.addEventListener(`click`,updateName)



 let player2= document.querySelector(`d`)

player2.addEventListener(`click`,updateName2)

const p1=document.getElementById("1")
const p2=document.getElementById("2")
p1.addEventListener("click",updateName)
p2.addEventListener("click",updateName2)

