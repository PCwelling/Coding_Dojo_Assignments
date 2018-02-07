using System;
using System.Collections.Generic;

namespace deck
{
    public class Deck
    {
        //// a list of the card objects
        public List<card> cards;

        //// selects the "top-most" card, removes it from the list of cards, and returns the Card 
        public card deal()
        {
            if(cards.Count > 0){
            
            //grab top card
            Card res = cards[0];
            //remove said card
            cards.RemoveAt(0);
            //return said card.
            return res;
            } else {
                reset();
                return deal();
        }
        //// creates and resets the cards property to the contain the original 52 cards
        public void reset()
        {
            cards = new List<Card>();
            string[] suits = {"hearts","diamonds","spades","clubs"};
            string[] strVals = {"Ace","two","three","four","five","six","seven","eight","nine","ten","Jack","Queen","King"};
            //for each suit, assemble set of cards.
            foreach(string suit in suits)
            {
                //build out individual cards
                for(int i = 0; i < strVals.Length; i++){
                    Card noob = new Card(strVals[i], suit, i+1);
                    cards.Add(noob);
                }
            }
            return this;
        }
        //// randomly reorders the deck's cards
        public void shuffle()
        {
            //iterate backwards through our deck
            Random rand = new Random();
            for(int end = cards.Count-1; end > 0; end--){
                //grab a random card
                int randx = rand.Next(end);
                Card temp = cards[randx];
                // swap it with out end value
                cards[randx] = cards[end];
                cards[end] = temp;
            }
            return this;
        }
    }
}