using System;
using System.ComponentModel.DataAnnotations;

namespace wedding.Models
{
    public class WeddingViewModel: BaseEntity
    {
        [Required]
        [MinLength(2)]
        [Display(Name = "Wedder One")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = " Wedder 1 can only contain letters")]
        public string wedder_1 { get; set; }

        [Required]
        [MinLength(2)]
        [Display(Name = "Wedder Two")]        
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Wedder 2 can only contain letters")]      
        public string wedder_2 {get; set;}

        [Required]
        [Display(Name = "Wedding Date")]
        [MyDate(ErrorMessage = "Wedding date must be in the future")]
        public DateTime date {get; set;}

        [Required]
        [Display(Name = "Wedding Address")]
        public string address { get; set; }

        public class MyDateAttribute : ValidationAttribute
        {
            public override bool IsValid(object value)
            {
                DateTime d = Convert.ToDateTime(value);
                return d >= DateTime.Now;
            }
        }
    }
}