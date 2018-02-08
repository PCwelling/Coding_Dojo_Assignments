using System;
using System.Collections.Generic;

namespace cards
{
    public class Deck
    {
        //// a list of the card objects
        public List<Card> Cards;

        //// selects the "top-most" card, removes it from the list of cards, and returns the Card 
        public Card deal()
        {
            if(Cards.Count > 0){
            
            //grab top card
            Card res = Cards[0];
            //remove said card
            Cards.RemoveAt(0);
            //return said card.
            return res;
            } else {
                reset();
                return deal();
            }
        }
        //// creates and resets the cards property to the contain the original 52 cards
        public Deck reset()
        {
            Cards = new List<Card>();
            string[] suits = {"hearts","diamonds","spades","clubs"};
            string[] strVals = {"Ace","two","three","four","five","six","seven","eight","nine","ten","Jack","Queen","King"};
            //for each suit, assemble set of cards.
            foreach(string suit in suits)
            {
                //build out individual cards
                for(int i = 0; i < strVals.Length; i++){
                    Card noob = new Card(strVals[i], suit, i+1);
                    Cards.Add(noob);
                }
            }
            return this;
        }
        //// randomly reorders the deck's cards
        public Deck shuffle()
        {
            //iterate backwards through our deck
            Random rand = new Random();
            for(int end = Cards.Count-1; end > 0; end--){
                //grab a random card
                int randx = rand.Next(end);
                Card temp = Cards[randx];
                // swap it with out end value
                Cards[randx] = Cards[end];
                Cards[end] = temp;
            }
            return this;
        }
    }
}