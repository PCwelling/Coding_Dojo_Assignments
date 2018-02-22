using System;
using System.ComponentModel.DataAnnotations;

namespace wedding.Models
{
    public class RegisterViewModel: BaseEntity
    {
        [Required]
        [MinLength(2)]
        [Display(Name = "First Name")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = " First Name can only contain letters")]
        public string fname { get; set; }

        [Required]
        [MinLength(2)]
        [Display(Name = "Last Name")]        
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Last Name can only contain letters")]      
        public string lname {get; set;}

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string email { get; set; }

        [Required]
        [MinLength(8)]
        [Display(Name = "Password")]
        [DataType(DataType.Password)]
        public string password { get; set; }

        [Compare("password", ErrorMessage = "Password and Confrim Password must match.")]
        [Display(Name = "Confirm Password")]
        [DataType(DataType.Password)]
        public string pwconfirm { get; set; }
    }
}