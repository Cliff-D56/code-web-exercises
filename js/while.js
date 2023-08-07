// x=1;
// while(x<65536){
//     console.log(x*=2)
// }
/*
An ice cream seller can't go home until she sells all of her cones.
First write enough code that generates a random number between 50 and 100 representing
the amount of cones to sell before you start your loop. Inside of the loop your code should
generate another random number between 1 and 5, simulating the amount of cones being bought by her
clients. Use a do-while loop to log to the console the amount of cones sold to each person.
The below code shows how to get the random numbers for this exercise.
 */
// TODO make RNG between 50 and 100 with variable amount of cones before starting loop
// TODO inside loop make another one and make an RNG between 1 and 5 with variable amount of cones being bought
// TODO in a do-while loop use console.log the variable the amount of cones to each person
// var needtosell = Math.floor(Math.random()*100)+10;
// for(i=100-needtosell;i>0;i--){
//     console.log(i)
//     console.log(needtosell)
//     var bought = Math.floor(Math.random()*5)+1;
//     do {
//         needtosell-=bought;
//     }while(needtosell>bought)
// }
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have "+allCones+" to sell")
do {
    var bought = Math.floor(Math.random() * 5) + 1;
    console.log(bought+" Cones sold")
    if (allCones<bought){
        console.log("Cannot sell you "+bought+" cones, I only have "+allCones+"...")
        break;
    }
    allCones-=bought;
    console.log(allCones + " Cones remaining");
    if (allCones===0){
        console.log("Yay! I sold them all!")
    }
}while(allCones>0)

// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones