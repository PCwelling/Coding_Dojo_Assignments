using System;
using System.Collections.Generic;

namespace puzzles
{
    class Program
    {
        //// Random Array ////
        public static void RandomArray(){
            int [] numArray = new int[10];
            Random rand = new Random();
            int max = numArray[0];
            int min = numArray[0];
            int sum = 0;

            for(int i = 0; i < numArray.Length; i++){
                numArray[i] = rand.Next(5,25);
                if(numArray[i] < min){
                    min = numArray[i];
                }
                if(numArray[i] > max){
                    max = numArray[i];
                }
                sum = sum + numArray[i];              
            }
            Console.WriteLine("min is: {0}, max is: {1}, sum is: {2}", min, max, sum);
        }

        //// Coin Flip ////

        //// Names ////

        ////---------------------------------------------------------------------------////
        static void Main(string[] args)
        {
            RandomArray();

            ////-----------------------------------------------------------------------////
        }
    }
}
