using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bank.Models
{
    public class BaseEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime created_at {get; set;}

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime updated_at {get; set;}        
    }
}