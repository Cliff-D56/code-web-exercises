//TODO: When the h1#double-click is double clicked, change the inner text of the H1 from "Prepare for trouble. . ." to ". . . and make it double!"
$("#double-click").on("dblclick",function (){
    $("h1").text("...and make it double!")
})
//TODO: As the user types into the input#input,  the div#printHere should display each individual character typed as it was typed into the input.
$("#input").on("keyup",function (){
    $("#printHere").text(document.getElementById("input").value)
})
//TODO: When a paragraph.loremPara is clicked, that particular paragraph element's background color and font color should change to colors of your choice - note that only the ONE paragraph that was clicked should have that happen, not all paragraphs in the class.

$(".loremPara").on("click",function (){
    $(this).css({"background-color":"blue","color":"green"});
})
//TODO: When the div#carSales is clicked, change the location of the user from the worksheet to https://www.lingscars.com/

$("#carSales").on("click",function (){
    window.location.href="https://www.lingscars.com/";
})
//TODO: When the paragraph#question-request is hovered over, write a question in a string to appear in the paragraph#question-delivered - this question should disappear when the mouse leaves the area of paragraph#question-request
$("#question-request").hover(function (){
    $("#question-delivered").text("How are you")
},function (){
    $("#question-delivered").text("")
})