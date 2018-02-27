using Microsoft.EntityFrameworkCore;
 
namespace Bank.Models
{
    public class BankContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public BankContext(DbContextOptions<BankContext> options) : base(options) { }

    public DbSet<User> User {get; set;}
    public DbSet<Account> Account {get; set;}
    }
}