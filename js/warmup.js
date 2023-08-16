// let loguser =(x,y)=>{
//     while (typeof x!=="string"||!isNaN(parseInt(x))){
//         alert(`Incorrect username`)
//         x = prompt(`Reenter Username`);
//     }
//     return(`${x} with ${y} has longed in for the day`)
// }
let loguser =(object)=>{
    while (typeof object.username!=="string"||!isNaN(parseInt(object.username))){
        alert(`Incorrect username`)
        object.username = prompt(`Reenter Username`);
    }
    return(`${object.username} with ${object.email} has longed in for the day`)
}
let userObject ={
    email:"cliffordgardner9@gmail.com",
    username:"cliffordgardner9",
    userRights:["admin","moderator","buyer","seller"],
    userProfile:{
        userProfileURL:"www.youtube.com",
        userLocation:"San Antonio Texas",
        numLikes:0
    }
}
