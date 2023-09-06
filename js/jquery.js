// window.onload = function() {
//     alert( 'The page has finished loading!' );
// }
// $(function (){
//     alert("hellow)")
// })
// $("p").css("color","blue").css("font-size","100px")
// alert($("#text").html())
// $(".codeup").css("border","1px red solid")
//     .css("font-size","50px")
// $("li").css("font-size","20px")
// $("h1").css("border","10px blue dotted")
// $("p").css("border","10px blue dotted")
// $("li").css("border","10px blue dotted")
// console.log($("p,h1,li").html());
$("h1").on("click",function (){
    $(this).css("background-color","blue")
})
$("p").on("dblclick",function (){
    $(this).css("font-size","18px")
})
$("li").hover(function (){
    $(this).css("color","red")
},function (){
    $(this).css("color","black")
})