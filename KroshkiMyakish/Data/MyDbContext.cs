using KroshkiMyakish.Models;
using Microsoft.EntityFrameworkCore;

namespace KroshkiMyakish.Data
{
    public class MyDbContext: DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Role> Roles { get; set; } = null!;


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasOne(i => i.Role)
                .WithMany()
                .HasForeignKey(i => i.RoleId);
        }
    }
}
