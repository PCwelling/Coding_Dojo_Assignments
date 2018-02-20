using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bank.Models
{
    public class User: BaseEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId {get; set;}

        public string fname {get; set;}

        public string lname {get; set;}

        public string email {get; set;}
     
        public string password {get; set;}

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public int balance {get; set;}

        
    }
}