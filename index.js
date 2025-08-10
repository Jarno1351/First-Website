<<<<<<< HEAD
//console.log(`Hello World`);
//window.alert(`nigger`);
/*
document.getElementById(`Header_title`).textContent = `Nigger`;

document.getElementById(`myP`).textContent = `niger`;
*/

/*nige ninigeni
let x = 100;
let age = 30;
console.log(x);
console.log(`Your age is ${age} and the price of this item is ${x}`)
*/

//User-input

let username = document.getElementById(`username`);

document.getElementById(`submit_button`).onclick = function() {
    if(username.value.trim() == ""){
        window.alert(`Do not submit a blank!`)
    }
    else{
        username = username.value;
        window.alert(`Input Submitted!`)
    }
    
}

let count;
count = document.getElementById(`count`).textContent;
count = Number(count)

document.getElementById(`decrease`).onclick = function(){
    count--;
    document.getElementById(`count`).textContent =count;
}

document.getElementById(`reset`).onclick = function(){
    count = 0;
    document.getElementById(`count`).textContent = count;
}
document.getElementById(`increase`).onclick = function(){
    count++;
    document.getElementById(`count`).textContent = count;
}


let age = document.getElementById(`age`);
document.getElementById(`submit_age`).onclick = function(){
    if(username.value == ""){
        window.alert(`Username missing!`)
    }
    else{
        let ageEL = Number(age.value);
        if(ageEL < 11){
            window.alert(`You are too young to be on this site!`)
        }

        else if(ageEL > 59){
            window.alert(`You are too old to be on this site!`)
        }

        else{
            window.alert(`Input submitted!`);
            document.getElementById(`myP`).textContent = `Welcome to the website ${String(username).charAt(0).toUpperCase() + String(username).slice(1)}`;
            document.getElementById(`myP2`).textContent = `You are ${age.value} years old`
        }

    }
    
}


let primeSub = document.getElementById(`prime_button`);
let primeData = document.getElementById(`prime_number_gen`);
let primeOut = document.getElementById(`prime_num_text`);
const primeRange = [];

primeSub.onclick = function(){
    let endIndex = Number(primeData.value)
    console.log(endIndex)
    if(primeData.value.trim() == "" || Number.isInteger(Number(primeData.value)) == false){
        alert(`You cannot pass an empty input or not a number!`);
    } 
    
    else{
        const prime_list = []
        for(i=1;i<=endIndex;i++){
            let count = 0
            for(j=1;j<=i;j++){
                if(i%j == 0){
                    count +=1
                }
        }
        if(count === 2){
            prime_list.push(i)
        }
                
        }
        primeOut.textContent = `The range of prime numbers are: ${prime_list}`;

    }
}


/*------------------Number Guessing Game--------------------------------------*/

const textOutput = document.getElementById(`output`);
const submitButton = document.getElementById(`submitForGame`);
const userInput = document.getElementById(`numberGuess`);
const notif = document.getElementById(`notif`);
const confirmNotif = document.getElementById(`confirmNotif`);
const x = document.getElementById(`notifCase`);

let high = 10;
let low = 1;
let computer = Math.floor(Math.random()*(high - low)+1)
let guess = 5;

textOutput.textContent = guess;

console.log(computer)
submitButton.onclick = function(){
    let guessNum = Number(userInput.value);
    console.log(guessNum)
    if (Number.isNaN(guessNum)|| guessNum === 0){
        notif.textContent = `Please enter a value!`;
        showNotif(x);
    }
    else{
        console.log(guessNum)
        if(guessNum == computer){
            notif.textContent = `You Won!`;
            showNotif(x);
            guess -= 1;
            textOutput.textContent = `Winner`;
        }
        else if(guessNum > computer){
            notif.textContent = `Lower!`;
            showNotif(x);
            guess -= 1;
            textOutput.textContent = guess;
        }
        else {
            notif.textContent = `Higher!`;
            showNotif(x);
            guess -= 1;
            textOutput.textContent = guess;
        }
        if(guess == 0){
            notif.textContent = `You lose!`;
            guess = 5
            showNotif(x)
            textOutput.textContent = guess;
        }
    }

}
    
function showNotif(x){
    x.style.display = "flex";
}
function hideNotif(x){
    x.style.display = "none";
}

confirmNotif.onclick = function(){
    hideNotif(x)
}

/*=================================================*/

//username = window.prompt(`Nigger nigger?`);

//document.getElementById(`Header_title`).textContent = username;
=======
//console.log(`Hello World`);
//window.alert(`nigger`);
/*
document.getElementById(`Header_title`).textContent = `Nigger`;

document.getElementById(`myP`).textContent = `niger`;
*/

/*nige ninigeni
let x = 100;
let age = 30;
console.log(x);
console.log(`Your age is ${age} and the price of this item is ${x}`)
*/

//User-input

let username = document.getElementById(`username`);

document.getElementById(`submit_button`).onclick = function() {
    if(username.value.trim() == ""){
        window.alert(`Do not submit a blank!`)
    }
    else{
        username = username.value;
        window.alert(`Input Submitted!`)
    }
    
}

let count;
count = document.getElementById(`count`).textContent;
count = Number(count)

document.getElementById(`decrease`).onclick = function(){
    count--;
    document.getElementById(`count`).textContent =count;
}

document.getElementById(`reset`).onclick = function(){
    count = 0;
    document.getElementById(`count`).textContent = count;
}
document.getElementById(`increase`).onclick = function(){
    count++;
    document.getElementById(`count`).textContent = count;
}


let age = document.getElementById(`age`);
document.getElementById(`submit_age`).onclick = function(){
    if(username.value == ""){
        window.alert(`Username missing!`)
    }
    else{
        let ageEL = Number(age.value);
        if(ageEL < 11){
            window.alert(`You are too young to be on this site!`)
        }

        else if(ageEL > 59){
            window.alert(`You are too old to be on this site!`)
        }

        else{
            window.alert(`Input submitted!`);
            document.getElementById(`myP`).textContent = `Welcome to the website ${String(username).charAt(0).toUpperCase() + String(username).slice(1)}`;
            document.getElementById(`myP2`).textContent = `You are ${age.value} years old`
        }

    }
    
}


let primeSub = document.getElementById(`prime_button`);
let primeData = document.getElementById(`prime_number_gen`);
let primeOut = document.getElementById(`prime_num_text`);
const primeRange = [];

primeSub.onclick = function(){
    let endIndex = Number(primeData.value)
    console.log(endIndex)
    if(primeData.value.trim() == "" || Number.isInteger(Number(primeData.value)) == false){
        alert(`You cannot pass an empty input or not a number!`);
    } 
    
    else{
        const prime_list = []
        for(i=1;i<=endIndex;i++){
            let count = 0
            for(j=1;j<=i;j++){
                if(i%j == 0){
                    count +=1
                }
        }
        if(count === 2){
            prime_list.push(i)
        }
                
        }
        primeOut.textContent = `The range of prime numbers are: ${prime_list}`;

    }
}


/*------------------Number Guessing Game--------------------------------------*/

const textOutput = document.getElementById(`output`);
const submitButton = document.getElementById(`submitForGame`);
const userInput = document.getElementById(`numberGuess`);
const notif = document.getElementById(`notif`);
const confirmNotif = document.getElementById(`confirmNotif`);
const x = document.getElementById(`notifCase`);

let high = 10;
let low = 1;
let computer = Math.floor(Math.random()*(high - low)+1)
let guess = 5;

textOutput.textContent = guess;

console.log(computer)
submitButton.onclick = function(){
    let guessNum = Number(userInput.value);
    console.log(guessNum)
    if (Number.isNaN(guessNum)|| guessNum === 0){
        notif.textContent = `Please enter a value!`;
        showNotif(x);
    }
    else{
        console.log(guessNum)
        if(guessNum == computer){
            notif.textContent = `You Won!`;
            showNotif(x);
            guess -= 1;
            textOutput.textContent = `Winner`;
        }
        else if(guessNum > computer){
            notif.textContent = `Lower!`;
            showNotif(x);
            guess -= 1;
            textOutput.textContent = guess;
        }
        else {
            notif.textContent = `Higher!`;
            showNotif(x);
            guess -= 1;
            textOutput.textContent = guess;
        }
        if(guess == 0){
            notif.textContent = `You lose!`;
            guess = 5
            showNotif(x)
            textOutput.textContent = guess;
        }
    }

}
    
function showNotif(x){
    x.style.display = "flex";
}
function hideNotif(x){
    x.style.display = "none";
}

confirmNotif.onclick = function(){
    hideNotif(x)
}

/*=================================================*/

//username = window.prompt(`Nigger nigger?`);

//document.getElementById(`Header_title`).textContent = username;
>>>>>>> 417801b5ec9108e34b75ef8c023f07e74ac3d116
