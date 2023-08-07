let num = parseInt(prompt("Pick an odd number between 1 and 50"))
while(num>50||isNaN(num)||num%2===0){
    num = parseInt(prompt("Invalid choice, Pick an odd number between 1 and 50"))
}
console.log("Skipping number is: "+num)
console.log("")
for (let i=1;i<50;i++){
    if(i===num) {
        console.log("Yikes! Skipping number: "+num)
    }
    else if(i%2!==0){
    console.log("here is an odd number: "+i);
    }
}