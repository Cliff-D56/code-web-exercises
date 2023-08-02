    //Creates Hearts Deck
    let ha = "AH";
    let h3 = "3H";
    let h4 = "4H";
    let h5 = "5H";
    let h6 = "6H";
    let h7 = "7H";
    let h8 = "8H";
    let h9 = "9H";
    let h10 = "10H";
    let hj = "JH";
    let hq = "QH";
    let hk = "KH";
    let Hearts = [ha, h3, h4, h5, h6, h7, h8, h9, h10, hj, hq, hk];


//Creates Clubs Deck
    let ca = "AC";
    let c2 = "2C";
    let c3 = "3C";
    let c4 = "4C";
    let c5 = "5C";
    let c6 = "6C";
    let c7 = "7C";
    let c8 = "8C";
    let c9 = "9C";
    let c10 = "10C";
    let cj = "JC";
    let cq = "QC";
    let ck = "KC";
    let Clubs = [ca, c2, c3, c4, c5, c6, c7, c8, c9, c10, cj, cq, ck];

//Creates Diamond Deck
    let da = "AD";
    let d3 = "3D";
    let d4 = "4D";
    let d5 = "5D"
    let d6 = "6D";
    let d7 = "7D";
    let d8 = "8D";
    let d9 = "9D";
    let d10 = "10D";
    let dj = "JD";
    let dq = "QD";
    let dk = "KD";
    let Diamonds = [da, d3, d4, d5, d6, d7, d8, d9, d10, dj, dq, dk];

//Creates Spades Deck
    let sa = "AS";
    let s2 = "2S";
    let s3 = "3S";
    let s4 = "4S";
    let s5 = "5S";
    let s6 = "6S";
    let s7 = "7S";
    let s8 = "8S";
    let s9 = "9S";
    let s10 = "10S";
    let sj = "JS";
    let sq = "QS";
    let sk = "KS";
    let Spades = [sa, s2, s3, s4, s5, s6, s7, s8, s9, s10, sj, sq, sk];

//Creates Jokers
    let bj = "B*";
    let lj = "L*";
    const Jokers = [bj, lj];
//Creates Deck
    const deck = Hearts.concat(Diamonds, Spades, Clubs, Jokers);

//Creates Hands
    let player1hand;
    let player2hand;
    let player3hand;
    let player4hand;

    function shuffler() {
        let cards = [];//Empty hand
        for (let i = 0; i < 13; i++) {
            let random = Math.floor(Math.random() * (deck.length));
            let card = deck.splice(random, 1);//Picks random index then slices it for card
            //card.toString();
            cards.push(card);
        }
        //console.log(deck);
        cards.sort();
        //x = cards;
        return cards;
    }
    // Assign ids to cards
    // const circleHolder = document.getElementById('circleHolder');
    // for (let i=1; i<=11; i++) {
    //     const circle = document.createElement( 'div' );
    //     circle.id = `circle1_${i}`;
    //     circle.classList.add('1');
    //     circleHolder.appendChild(circle);
    // }
    const cardHolder = document.getElementById('cardHolder')
    let cardDict={};
    for (let i=0;i<52;i++){
        cardDict[i]=deck[i];
        //console.log(cardDict);
        let card = document.createElement('div');
        card.classList.add("card")
        card.id = cardDict[i];
        card.name= cardDict[i];
        let imgsrc= "img/"+i+".jpeg";
        card.innerHTML=`
            <img src="${imgsrc}">
        `;
        console.log(card);
        cardHolder.appendChild(card)
    }
    //assign string literal as id for div
    let html = `<div></div>`
    //console.log(cardDict);
    // Assigns Hands
//     player1hand = shuffler();
//     player2hand = shuffler();
//     player3hand = shuffler();
//     player4hand = shuffler();