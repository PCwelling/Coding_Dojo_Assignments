using System.ComponentModel.DataAnnotations;


namespace Bank.Models
{

    public class LogViewModel: BaseEntity
    {
        [Required]
        [EmailAddress]
        public string email { get; set; }

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string password { get; set; }
    }
}