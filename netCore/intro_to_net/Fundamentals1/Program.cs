using System;

namespace Fundamentals1
{
    class Program
    {
        static void Main(string[] args)
        {
            // // print 1 to 255
            // for(int i =1; i < 256; i++)
            // {
            //     Console.WriteLine(i);
            // }

            //print values divisable by 3 or 5 between 1 and 100
            // How do you not print something -  !i ????
            for(int i = 1; i < 100; i++)
            {
                if(i % 3 == 0 || i % 5 == 0)
                {
                    Console.WriteLine(i);
                }
                if( i % 3 == 0 && i % 5 == 0)
                {
                    Console.WriteLine(!i);
                }
            }

            // //fizzbuzz
            // for(int i = 1; i < 100; i++)
            // {
            //     if(i % 15 == 0)
            //     {
            //         Console.WriteLine("fizzbuzz");
            //     }
            //     else if(i % 3 == 0)
            //     {
            //         Console.WriteLine("fizz");
            //     }
            //     else if(i % 5 == 0)
            //     {
            //         Console.WriteLine("buzz");
            //     }
            //     else 
            //     {
            //         Console.WriteLine(i);
            //     }
            // }
        }
    }
}
