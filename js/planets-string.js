//

let Mybrother = {color : "black",
    height : 5,attitude : "bad"
}
let Mysister = {
    color: "black",
    attitude: "Nice",
    height: "short",
}

Mybrother.calls = () => alert("Hello");
console.log(Mybrother);
let family =  {Mybrother,Mysister};
console.log(family);

Mybrother.infolog= function(){console.log(`${this.attitude} and ${this.color} and ${this.height}`)}


for (let info of family){
    info.infolog();
}