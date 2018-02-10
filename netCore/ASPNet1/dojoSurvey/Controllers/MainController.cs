using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace YourNamespace.Controllers
{
    public class MainController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
        // [HttpGet]
        // [Route("result")]
        // public IActionResult Result()
        // {
        //     return View();
        // }
        
        // [HttpGet]
        [HttpPost]
        [Route("process")]
        public IActionResult Process(string name, string location, string language, string comment)
        {
            System.Console.WriteLine("i'm here");
            ViewBag.Dojosurvey = new {name = name, location = location, language = language, comment = comment};
            return View("result");
        }

        
    }
}
