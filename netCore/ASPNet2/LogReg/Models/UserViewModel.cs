using System.ComponentModel.DataAnnotations;


namespace LogReg.Models
{

    public class UserViewModel: BaseEntity
    {
        [Required]
        [MinLength(2)]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Name can only contain letters")]
        public string fname { get; set; }

        [Required]
        [MinLength(2)]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Name can only contain letters")]      
        public string lname {get; set;}

        [Required]
        [EmailAddress]
        public string email { get; set; }

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string password { get; set; }

        [Compare("password", ErrorMessage = "Password and confirmation must match.")]
        public string passwordconfirm { get; set; }

    }
}