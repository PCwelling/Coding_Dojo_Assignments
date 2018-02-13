using System.ComponentModel.DataAnnotations;


namespace FormSub.Models
{
    public abstract class BaseEntity
    {
        
    }

    public class User: BaseEntity
    {
        [Required]
        [MinLength(4)]
        public string FirstName { get; set; }

        [Required]
        [MinLength(4)]       
        public string LastName {get; set;}

        [Required]
        [Range(1,125)]
        public int Age {get; set;}

        [Required]
        [EmailAddress]
        public string email { get; set; }

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string password { get; set; }
    }
}