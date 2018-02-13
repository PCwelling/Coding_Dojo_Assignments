using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuotingDojo.Models;
using Microsoft.AspNetCore.Http;
using DbConnection;


namespace QuotingDojo.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }


        [HttpPost]
        [Route("quotes")]
        public IActionResult Addquote(string name, string quote)
        {
            string querry = $"INSERT INTO table1 (name, quote, createdAt) VALUES ('{name}', '{quote}', NOW())";
            DbConnector.Execute(querry);
            return RedirectToAction("Allquotes");
        }


        [HttpGet]
        [Route("quotes")]
        public IActionResult Allquotes()
        {
            string querry = "SELECT * FROM table1 ORDER BY createdAt desc";
            var quotes = DbConnector.Query(querry);
            ViewBag.allquotes = quotes;
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
