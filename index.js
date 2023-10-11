// Iteration 1: Names and Input
let hacker1 = "Rafael";
let hacker2 = "Jair";
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)



// Iteration 2: Conditionals
console.log(`${hacker1} it has ${hacker1.length} characters`)
console.log(`${hacker2} it has ${hacker2.length} characters`)

// Iteration 3: Loops

const hacker1ToUpperCase = hacker1.toUpperCase()
console.log(hacker1ToUpperCase)
for(let i = hacker1ToUpperCase.length-1; i >= 0; i--){
   console.log(hacker1ToUpperCase[i])
}

const arrayHackers = ["Rafael", "Jair"];
arrayHackers.sort()
console.log(arrayHackers)


//Bonus 1
let count = 0;
const longText = `Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Cras vulputate augue orci, sit amet hendrerit libero maximus et. Sed venenatis metus vel libero sollicitudin, non porta ipsum condimentum. Curabitur faucibus hendrerit dapibus. Pellentesque ac faucibus nibh. Integer sit amet aliquet neque. Morbi vehicula dui sed ante maximus eleifend. Donec ornare eu magna sed fringilla. Etiam ut felis vehicula, fringilla sapien non, scelerisque ante. Nulla dictum erat nec imperdiet rhoncus.`;
const countWord = longText.split(' ');
console.log(countWord.length)

console.log(countWord)

for(let i = 0; i < countWord.length; i++){
    const latinWord = countWord[i];
    if( latinWord === "et"){
        count++;
    }
}
console.log(count)
