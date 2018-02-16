using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Superheroes
{
    public class HomeController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Home()
        {
            return View("Index");
        }

        [HttpGet]
        [Route("signin")]
        public IActionResult SignIn(string username)
        {
            HttpContext.Session.SetString("username", username);
            return RedirectToAction("Index", "Team");
        }
    }
}