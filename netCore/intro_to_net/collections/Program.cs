using System;
using System.Collections.Generic;

namespace collections
{
    class Program
    {
        static void Main(string[] args)
        {
            // Three Basic Arrays
            //int 0-9
            int[] numArray = new int[10] {0,1,2,3,4,5,6,7,8,9};
            //names
            string[] nameArray = new string[4] {"Tim", "Martin", "Nikki", "Sara"};
            //bool
            bool[] boolArray = new bool[10] {true, false, true, false, true, false, true, false, true, false};

            // Multiplication
            int[,] mult = new int[10,10];
            for(int x = 0; x < 10; x++){
                for(int y = 0; y < 10; y++){
                    mult[x,y] = (x+1) * (y+1);
                }
            }

            // Display Multiplcation
            for(int x=0; x<10; x++){
                string display ="[";
                for(int y=0; y<10; y++){
                    display += mult[x,y] + ",";
                    if(mult[x,y] < 10){
                        display += " ";
                    }
                }
                display += "]";
                Console.WriteLine(display);
            }
            // List of Flavors
            List<string> flavors = new List<string>();
            flavors.Add("chocolate");
            flavors.Add("vanilla");
            flavors.Add("strawberry");
            flavors.Add("blueberry");
            flavors.Add("coconut");
            Console.WriteLine(flavors.Count);
            Console.Write(flavors[3]);
            flavors.RemoveAt(3);
            Console.WriteLine(flavors.Count);

            // Dictionary
            //For each name in the array of names you made previously, add it as a new key in this dictionary with value null
            //For each name key, select a random flavor from the flavor list above and store it as the value
            //Loop through the Dictionary and print out each user's name and their associated ice cream flavor.
           
            Dictionary<string,string> dict = new Dictionary<string,string>();
            foreach (string name in nameArray){
                dict.Add(name,  null);
            }
            Random rand = new Random();
            foreach (string name in nameArray)
            {
                dict[name] = flavors[rand.Next(flavors.Count)];
            }
            Console.WriteLine("Users and their Ice Cream Flavors:");
            foreach (KeyValuePair<string, string> entry in dict)
            {
                Console.WriteLine(entry.Key + " - " + entry.Value);
            }
            

         //_________________________________________________________//    
        }
    }
}
