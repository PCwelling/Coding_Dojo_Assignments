using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //There is only one artist in this collection from Mount Vernon, what is their name and age?
            Artist fmv = Artists.Where(ht => ht.Hometown == "Mount Vernon").Single();
            System.Console.WriteLine("{0} lives in Mount Vernon, and is {1} years old", fmv.RealName, fmv.Age);

            //Who is the youngest artist in our collection of artists?
            Artist youngest = Artists.OrderBy(ag => ag.Age).First();
            System.Console.WriteLine("{0} is the youngest artist", youngest.RealName);

            //Display all artists with 'William' somewhere in their real name
            List<Artist> bill = Artists.Where(cmb => cmb.RealName.Contains("William")).ToList();
            foreach (Artist billy in bill)
            {
               System.Console.WriteLine("{0} has a William in their name", billy.RealName); 
            }

            //Display the 3 oldest artist from Atlanta
            List<Artist> hotlanta = Artists.Where(ht => ht.Hometown == "Atlanta").OrderByDescending(old => old.Age).Take(3).ToList();
            foreach (Artist coke in hotlanta )
            {
                System.Console.WriteLine("{0} is {1} years old and is from Atlanta", coke.RealName, coke.Age);
            }

            //(Optional) Display the Group Name of all groups that have members that are not from New York City
            List<string> noNY = Artists.Join(Groups,
                                            artist => artist.GroupId,
                                            group => group.Id,
                                            (artist, group) =>
                                            {
                                                artist.Group = group; return artist;
                                            })
                                            .Where(artist => (artist.Hometown != "New York City" && artist.Group != null))
                                            .Select(artist => artist.Group.GroupName)
                                            .Distinct()
                                            .ToList();
                                            Console.WriteLine("All groups with members not from New York City:");
                                            foreach(var group in noNY){
                                                Console.WriteLine(group);
                                            }

            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'
            int wtcid = Groups.Where(gn => gn.GroupName == "Wu-Tang Clan").Single().Id;
            List<Artist> wtcm = Artists.Where(gid => gid.GroupId == wtcid).ToList();
            foreach(Artist tanger in wtcm)
            {
                System.Console.WriteLine("{0} is a member of Wu-Tang Clan", tanger.ArtistName);
            }

        }
    }
}