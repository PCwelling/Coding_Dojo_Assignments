using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BeltExam.Models
{
    public class User: BaseEntity
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int UserId {get; set;}

        public string fname {get; set;}

        public string lname {get; set;}

        public string email {get; set;}
     
        public string password {get; set;}
       
    }
}