/**
 * TODO: Target the div with the id of deep-in-the-heart. When the div is clicked, spawn an alert that says "CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~".
 * */
let hi =()=>{alert("hi")}
let problem1 = document.querySelector("#deep-in-the-heart");
// problem1.addEventListener("click",function (){
//   alert("CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~")
// })
// $("#deep-in-the-heart").on("dblclick",hi).css("background-color","blue");
// $("#deep-in-the-heart").on("dblclick",function(){$("body").css("background-color","blue")});
//TODO: Target the div with the id of what-color - when the div is clicked, the value of the color from that div should be populated as a string into the div#answer-color.
let problem2=document.querySelector("#what-color");
$("#what-color").hover(function (){
    $(this).css("background-color","green")
},function (){
    $(".state-list-item").css("background-color","yellow")
})
// $("#what-color").on("mouseover",hi)
// TODO: When the user clicks the button#tacoButton, the value typed into the input#tacoBoutIt will be populated into the span#favorite-taco. Our goal is for our user to be able to type what kind of tacos they like to get and see that value where "*replaceMe" is.

// TODO: When a list item from the ul#list-states is hovered over, populate the span#insert-state with the value of the specific state-list-item hovered over to complete the sentence.

//TODO: Five seconds after the page loads, insert a string with the message "Oh, hey, didn't see you there" into the div#five-seconds.
