using System;

namespace demo.Models
{
    public class Review: BaseEntity
    {
        public string id {get; set;}
        public string name {get; set;}
        public string restaurant {get; set;}
        public int stars {get; set;}
        public string review {get; set;}
        public DateTime date {get; set;}
        public DateTime created_at {get; set;}
        public DateTime updated_at {get; set;}
    }
}