using System;
using System.ComponentModel.DataAnnotations;

namespace demo.Models
{
    public class ReviewViewModel: BaseEntity
    {   
        [Required]
        [MinLength(2)]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Name can only contain letters")]
        public string name {get; set;}

        [Required]
        [MinLength(2)]
        public string restaurant {get; set;}

        [Required]
        public int stars {get; set;}

        [Required]
        [MinLength(10)]
        public string review {get; set;}

        [Required]
        [DataType(DataType.Date)]
        public DateTime date {get; set;}
    }
}