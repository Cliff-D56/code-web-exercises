let max = 10;
let count = 0;
let interval = 100;//Amount of time each loop takes before executing
let intervalID= setInterval(function (){
    if (count >= max){
        clearInterval(intervalID);
        console.log("All Done")
    }
    else{
        count++
        console.log(`Repeating this line ${count}`)
    }
},1000)



// let intervalID2= setInterval(function (){
//     console.log("Hi")
// },interval)

let delay = 5000;
let timeoutID = setTimeout(function(){
    alert("Here is a delayed hello!")
}, delay);
clearTimeout(timeoutID) //Will run clear timeout