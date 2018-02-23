using System;
using System.ComponentModel.DataAnnotations;

namespace BeltExam.Models
{
    public class ActivityViewModel: BaseEntity
    {
        [Required]
        [MinLength(2)]
        [Display(Name = "Title")]
        public string title { get; set; }

        [Required]
        [Display(Name = "Time")]
        public DateTime time {get; set;}

        [Required]
        [Display(Name = "Date")]
        [MyDate(ErrorMessage = "Activity date must be in the future")]
        public DateTime date {get; set;}

        public class MyDateAttribute : ValidationAttribute
        {
            public override bool IsValid(object value)
            {
                DateTime d = Convert.ToDateTime(value);
                return d >= DateTime.Now;
            }
        }

        [Required]
        [Display(Name = "Duration")]
        public int duration {get; set;}

        [Required]
        public string durationlength {get; set;}

        [Required]
        [Display(Name = "Description")]
        [MinLength(10)]
        public string desc {get; set;}
    }
}