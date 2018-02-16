using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace demo.Models
{
    public class Review: BaseEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ReviewId {get; set;}
        public string name {get; set;}
        public string restaurant {get; set;}
        public int stars {get; set;}
        public string review {get; set;}
        public DateTime date {get; set;}
    }
}