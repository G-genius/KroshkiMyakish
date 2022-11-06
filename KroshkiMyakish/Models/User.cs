namespace KroshkiMyakish.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Country { get; set; }
        public string? City { get; set; }
        public string? Interests { get; set; }
        public string? About { get; set; }
        public string? FavouriteFood { get; set; }
        public string? Password { get; set; }
        public int RoleId { get; set; }
        public Role? Role { get; set; }
    }
}
