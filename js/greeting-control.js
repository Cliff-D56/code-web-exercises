import hi from "./greeting-logic.js";
let papa = document.querySelector("#confirm")
let papa1 = document.querySelector("#name")
console.log(papa)
papa.addEventListener("click",function (e){
let input = document.getElementById("input").value;
    e.preventDefault()
    console.log(input)
    papa1.innerText=hi()+" "+input
    // $("#name").html(`${hi()}, ${input}`)
})
// $("#confirm").on("click",function (e){
//     e.preventDefault()
//     console.log(input)
//     $("#name").html(`${hi()}, ${input}`)
// })
