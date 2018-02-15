using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LogReg.Models;
using DbConnection;

namespace LogReg.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.errors = new List<string>();
            return View();
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register(UserViewModel model)
        {

            if(ModelState.IsValid){
                User NewUser = new User{
                    fname = model.fname,
                    lname = model.lname,
                    email = model.email,
                    password = model.password
                };
                string querry = $"INSERT INTO User (fname, lname, email, password, created_at, updated_at) VALUES ('{model.fname}', '{model.lname}', '{model.email}', '{model.password}', NOW(), NOW())";
                DbConnector.Execute(querry);
                return RedirectToAction("Success");
            } else {
                ViewBag.errors = ModelState.Values;
                return View("Index");
            }
            
        }

        [HttpGet]
        [Route("success")]
        public IActionResult Success()
        {
            return View();
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login(string email, string password)
        {
            List<Dictionary<string,object>> user = DbConnector.Query($"SELECT id, password FROM User WHERE email = '{email}'");
            if(user.Count == 0){
                ViewBag.usererror = "email not found";
            }else{
                if(user[0]["password"].ToString() != password){
                    ViewBag.pwerror = "incorrect password";     
            }else{
                if(user[0]["password"].ToString()==password){
                    return RedirectToAction("Success");
                }
                }
            }
            return View("Index");
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
