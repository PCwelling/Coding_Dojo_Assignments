using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Superheroes.Models;

namespace Superheroes.Controllers
{
    public class TeamController : Controller
    {
        [HttpGet]
        [Route("teams")]
        //render a page that shows all the teams in the database
        //and allows the user to add a new team
        public IActionResult Index()
        {
            ViewBag.username = HttpContext.Session.GetString("username");
            ViewBag.allTeams = MyDbConnector.Query("SELECT * FROM teams;");
            return View();
        }

        [HttpPost]
        [Route("teams/add")]
        //add a new team to the database
        public IActionResult AddTeamToDB(string name)
        {
            MyDbConnector.Execute($"INSERT INTO teams (name) VALUES ('{name}');");
            return RedirectToAction("Index");
        }
    }
}
