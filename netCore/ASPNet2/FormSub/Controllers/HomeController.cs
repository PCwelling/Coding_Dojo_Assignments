using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FormSub.Models;
using DbConnection;

namespace FormSub.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register(string FirstName, string LastName, int Age, string email, string password)
        {
            User NewUser = new User
            {
                FirstName = FirstName,
                LastName = LastName,
                Age = Age,
                email = email,
                password = password,
            };
            TryValidateModel(NewUser);
            ViewBag.errors = ModelState.Values;
            return RedirectToAction("Registered");
        }

        [HttpGet]
        [Route("registered")]
        public IActionResult Reqistered()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
