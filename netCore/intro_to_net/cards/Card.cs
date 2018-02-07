using System;
using System.Collections.Generic;

namespace card
{
    public class Card
    {
        //// holds the value of the card
        public string stringVal;

        //// holds the suit of the card
        public string suit;

        ////holds the integer value of the card
        public int val;

        public void Card(string name, int suitname, int value)
        {
            stringVal = name;
            suit = suitname;
            val = value;
        }
        
    }
}