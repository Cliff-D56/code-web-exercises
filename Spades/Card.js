class Card {
    constructor(suit, value) {
    this.suit = suit
        this.value = value
    }
    get title(){
        return `${this.value} of ${this.suit}`
    }
}

export {Card}