function Deck(){
    this.cards = [];

    this.reset = function(){
        var suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
        var numbers = [2,3,4,5,6,7,8,9,10,"Jack", "Queen", "King", "Ace"];
        for(suit of suits){
            for(number of numbers){
                this.cards.push({name: number + " of " + suit})
            }
        }
    }
    this.swap = function(x,y){
        var temp = this.cards[x];
        this.cards[x] = this.cards[y];
        this.cards[y] = temp;

    }

    this.shuffle = function(){
        for(let i = 0; i < this.cards.length; i++){
            var rand = Math.floor(Math.random() * this.cards.length);
            this.swap(i, rand);
        }
    }

    this.deal = function(){
        return this.cards.pop();
    }
}

var myDeck = new Deck()