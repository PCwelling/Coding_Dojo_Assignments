using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Bank.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace Bank.Controllers
{
    public class HomeController : Controller
    {
        private BankContext _context;
 
        public HomeController(BankContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register(RegisterViewModel model)
        {
            if( _context.User.Where(u => u.email == model.email).SingleOrDefault()!= null){
                ModelState.AddModelError("email", "Email already in use");
            }

            if(ModelState.IsValid){
                User NewUser = new User{
                    fname = model.fname,
                    lname = model.lname,
                    email = model.email,
                    password = model.password
                };
                _context.Add(NewUser);
                _context.SaveChanges();
                HttpContext.Session.SetInt32("UserId", NewUser.UserId);
                return RedirectToAction("Index","Account");
            } else {
                return View("Index"); 
            }
        }

        [HttpGet]
        [Route("tologin")]
        public IActionResult Tologin()
        {
            return View();
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login(string email, string password)
        {
            User user = _context.User.SingleOrDefault(User => User.email == email);
            if(user == null){
                ViewBag.usererror = "email not found";
            }else{
                if(user.password != password){
                    ViewBag.pwerror = "incorrect password";     
            }else{
                if(user.password == password){
                    HttpContext.Session.SetInt32("UserId", user.UserId);
                    return RedirectToAction("Index","Account");
                }
                }
            }
            return View("Tologin");
        }

        public IActionResult About(){
            ViewData["Message"] = "Your application description page.";
            return View();
        }

        public IActionResult Contact(){
            ViewData["Message"] = "Your contact page.";
            return View();
        }

        public IActionResult Error(){
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}