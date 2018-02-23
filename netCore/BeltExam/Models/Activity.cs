using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BeltExam.Models
{
    public class Activity: BaseEntity
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ActivityId {get; set;}

        public string title {get; set;}

        public DateTime date {get; set;}

        public DateTime time {get; set;}
     
        public int duration {get; set;}

        public int coordinator {get; set;}

        public string durationlength {get; set;}

        public string desc {get; set;}

        public List<UserActivity> UserActivity {get; set;}

        public Activity()
        {
            UserActivity = new List<UserActivity>();
        }
       
    }
}