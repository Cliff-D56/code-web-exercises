// let returntwo = ()=>2;
// console.log(returntwo())
// let sayHowdy =()=>"Howdy";
// console.log(sayHowdy());
// let identity =(input)=>input;
// console.log(identity("Purple"));
// let random = (x,y)=>Math.floor(Math.random()*(x-y))+y
// let i =0;
// let times = 0;
// do{
//     num =random(1000,0)
//     console.log(num)
//     i++
//     if(i===10000){
//         console.log("Didn't hit num")
//         break;
//     }
//     else if (num === 262){
//         times +=1;
//         console.log("You hit num at loop #: "+i)
//     }
//     if (times ===5){
//         console.log(`You've hit num 5 times by loop #:${i}`);
//         break;
//     }
// } while (random !== 50)\





let isPositive=(x)=>(x>0);

let totalPets=([
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
])
    let total=0;
totalPets.forEach(function (totalPet){
    total += totalPet.pets;
})
    console.log(total);
