using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace wedding.Models
{
    public class UserWedding
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int UserWeddingId {get; set;}

        public int UserId {get; set;}
        public User User {get; set;}

        public int WeddingId {get; set;}
        public Wedding Wedding {get; set;}
       
    }
}