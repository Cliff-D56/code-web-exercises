import {Card} from "./Card.js"

class Deck{
    constructor() {
        this.deck = []
        this.createcards()

    }
    createcards(){
        //Creates Suits and Values of cards
        const suits = ["Hearts","Clubs","Spades","Diamonds"]
        const values = [2,3,4,5,6,7,8,9,10,"Jack","Queen","King","Ace"]
        //Runs through each Suit
    for(let i=0;i<suits.length;i++){
        for(let j=0;j<values.length;j++){
            this.deck.push(new Card(suits[i],values[j]))
            // if (suits ==="Hearts"&&values ==="2"){
            //     continue;
            if(this.suits==="Hearts" && this.values===2){
                this.deck.pop();
            }
            }

        //const remove2H=this.deck.find(this.deck,suits==="Hearts",values==="2")
        //console.log(remove2H)
        }
    }
    //Replaces 2 of Hearts and Diamonds with Big Joker and Little Joker
}

export {Deck}