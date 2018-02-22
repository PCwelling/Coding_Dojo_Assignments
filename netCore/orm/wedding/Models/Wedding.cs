using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace wedding.Models
{
    public class Wedding: BaseEntity
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int WeddingId {get; set;}
        
        public string wedder_1 {get; set;}
        
        public string wedder_2 {get; set;}

        public DateTime date {get; set;}
        
        public string address {get; set;}
        
        public int created_by {get; set;}   
    }
}