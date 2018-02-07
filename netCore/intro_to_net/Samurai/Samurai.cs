public class Samurai : Human
{
    public int health = 200;

    public void death_blow(target)
    {
        if(target.health <= 50){
            target.health = 0;
        }
    }

    public void meditate()
    {
        health = 200
    }
}