using System.ComponentModel.DataAnnotations;


namespace LogReg.Models
{
    public abstract class BaseEntity
    {
        
    }

    public class User: BaseEntity
    {
        public string fname { get; set; }     
        public string lname {get; set;}
        public string email { get; set; }
        public string password { get; set; }
    }
}