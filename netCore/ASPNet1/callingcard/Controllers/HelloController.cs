using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace YourNamespace.Controllers
{
    public class HelloController : Controller
    {

        [HttpGet]
        [Route("index")]
        public string Index()
        {
            return "Hello World! Try adding your firstname/last name/age/favorite color to the url.";
        }

        [HttpGet]
        [Route("index/{FirstName}/{LastName}/{Age}/{FavoriteColor}")]
        public IActionResult Method(string FirstName, string LastName, int Age, string FavoriteColor)
        {
            var AnonObject = new {
                FirstName = FirstName,
                LastName = LastName,
                Age = Age,
                FavoriteColor = FavoriteColor
            };
            return Json(AnonObject);            
        }
    }
}
