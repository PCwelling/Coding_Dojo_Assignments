using System;
using System.Collections.Generic;

namespace cards
{
    public class Card
    {
        //// holds the value of the card
        public string stringVal;

        //// holds the suit of the card
        public string suit;

        ////holds the integer value of the card
        public int val;

        public Card(string n, string sn, int v)
        {
            stringVal = n;
            suit = sn;
            val = v;
        }
        
    }
}