using System;
using System.Collections.Generic;
using System.Linq;
using DbConnection; 

namespace crud
{
    class Program
    {
            // string InputLine = Console.ReadLine();

            //Placed inside the code block where you want to query the database
            // DbConnector.Query("Some query string expecting data returned");

            //or
            // DbConnector.Execute("Some query with no expected return");


           // DbConnector.Query("select * from User")


        public List<string> Display()
        {
            DbConnector.Query("SELECT * FROM User")

        }

        public void Insert()
        {
            string InputLine = Console.ReadLine();
            DbConnector.Execute("INSERT INTO User(FirstName, LastName, FavoriteNumber) VALUES("John", "Smith", "45")");
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Insert();



        }
    }
}
