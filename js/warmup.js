let loguser =(x)=>{
    while (typeof x!=="string"||!isNaN(parseInt(x))){
        alert(`Incorrect username`)
        x = prompt(`Reenter Username`);
    }
    alert(`${x} has longed in for the day`)
}