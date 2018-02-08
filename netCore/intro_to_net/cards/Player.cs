using System;
using System.Collections.Generic;

namespace cards
{
    public class Player
    {
        //// player name
        public string name;

        //// a list of cards 
        public List<Card> hand;

        public Player(string person)
        {
            name = person;
            hand = new List<Card>();
        }        

        //// draws a card from a deck, adds it to the player's hand and returns the Card
        public Card draw(Deck decky)
        {
            Card noob = decky.deal();
            hand.Add(noob);
            return noob;
        }

        //// discards the Card at the specified index from the player's hand and returns this Card or null if the index does not exist.
        public Card discard(int idx)
        {
            if(idx < 0 || idx > hand.Count){
                System.Console.WriteLine("learn to count, yo!");
                return null;
            } else {
                //remove
                Card res = hand[idx];
                hand.RemoveAt(idx);
                return res;
            }
        }
    }
}