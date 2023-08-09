import {Deck} from "./Deck.js";
import {Card} from "./Card.js";
(function(){
    const mydeck = new Deck();
    let resultsArr = mydeck.deck.filter(function(card){
        return (card.suit === "Hearts" && card.value === 2) || (card.suit === "Diamonds" && card.value === 2)
    });
    for(let card of resultsArr) {
        mydeck.removeCard(card);
    }
    mydeck.addCard(new Card("Joker","Little"))
    mydeck.addCard(new Card("Joker","Big"))
    console.log(mydeck.deck)
})();

