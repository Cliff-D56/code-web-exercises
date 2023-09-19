import hi from "./greeting-logic.js";
let input = document.getElementById("input").value;

$("#confirm").on("click",function (e){
    e.preventDefault()
    console.log(input)
    $("#name").text(`${hi()}, ${input}`)
})
