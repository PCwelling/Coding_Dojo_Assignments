using System;
using System.Collections.Generic;

namespace box_unbox
{
    class Program
    {
        static void Main(string[] args)
        {
            int sum = 0;

            List<object> newlist = new List<object>();
            newlist.Add(7);
            newlist.Add(28);
            newlist.Add(-1);
            newlist.Add(true);
            newlist.Add("chair");

            for(var idx = 0; idx < newlist.Count; idx++){
                Console.WriteLine(newlist[idx]);
                if(newlist[idx] is int){
                    sum = sum +  (int)newlist[idx];
                }
                Console.WriteLine(sum);
            }






        ////_________________________________________________________________________________////    
        }
    }
}
