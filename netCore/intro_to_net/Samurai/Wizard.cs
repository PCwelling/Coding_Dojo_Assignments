public class Wizard : Human
{
    public int health = 50;
    public int intelligence = 25;

    public void heal()
    {
        health = intelligence * 10
    }

    public void fireball(target)
    {
        Random rand = new Random()
        target.health -= rand.Next(20,50)
    }
}