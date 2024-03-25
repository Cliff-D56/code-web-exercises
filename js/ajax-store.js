import {getTools,loop} from "./ajax-store-utils.js";

//////// MAIN METHOD
(async () => {
    /////

    const tools = await getTools();
    let html="";
    let options="";
    loop(tools,html)
    $("#refresh").on("click",function (){
        $("#insertProducts").html("")
        let intervalID= setTimeout(
            function (){
                getTools()
                loop(tools,html)
            },2000)
    })
    $("#delete").on("click",function (e){
        e.preventDefault()
        $("#insertProducts").html("")
        let delnum = document.getElementById("delnum").value
        getTools()
        tools.splice(delnum,1)
        loop(tools,html)
    })
    /////
})();


//TODO: CREATE SERVER FOR POST REQUESTS
// let add =(title,quantity,categories,price)=>{
//     $.post("./data/inventory.json",{
//         title:title,
//         quantity:quantity,
//         categories:categories,
//         price:price
//     }).done(function (data){
//         console.log("done")
//     })
// }
// $("#add1").on("click",function (){
//     let title=document.getElementById("Title").value;
//     let category=document.getElementById("Category").value;
//     let quantity=document.getElementById("Quantity").value;
//     let price=document.getElementById("Price").value;
//     add(title,quantity,category,price);
// })