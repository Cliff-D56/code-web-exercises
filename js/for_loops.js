//Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)
let showMultiplacationTable=(x)=>{
    for(i=0;i<11;i++){
        console.log(x+" x "+i+" = "+x*i)
    }
}
//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
// and output to the console whether each number is odd or even. For example:
let randomNumbers=() =>{
    for (i=0;i<10;i++) {
        let number = Math.floor(Math.random() * 180) + 20;
        if (number%2===0){
            console.log(number+" is an even number.")
        }
        else {
            console.log(number+" is an odd number.")
        }
    }
}
randomNumbers()
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// let pyramid =()=>{
//     for (i=1;i<10;i++){
//         line ="";
//         line+=i;
//         line = line.repeat(i);
//         console.log(line)
//     }
// }

// let pyramid = (size) => {
//     let result="";//sets the returning variable to blank string
//     for (i=1;i<=size; i++) {//since size is prompted however many lines the user wants is how many it loops
//         let line = "";
//         for (let j = 1; j <= i; j++) //will repeat as many times as i AS LONG as j is reinitialized
//         {
//             line += i;
//         }
//         result += line + "\n";
//     }
//         return result;
//     }
//         let myPyramid = pyramid( 9);
//         console.log (myPyramid);
        let pyramid =(x)=>{
            for (let i = 1; i <10 ; i++) {
                let str ="";
                for (let j = 0; j < i; j++) {
                    str += i;
                }
                console.log(str)
            }
        }
        pyramid(9);
// let countdown=()=>{for (x=100;x>0;x-=5){
//     console.log(x)
// }}
// countdown()