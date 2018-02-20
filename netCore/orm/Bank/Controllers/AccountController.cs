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
    public class AccountController : Controller
    {

        private BankContext _context;
 
        public AccountController(BankContext context)
        {
            _context = context;
        }

        private User ActiveUser // creates a new User instance using the id of the logged in user
        {
            get{ return _context.User.Where(u => u.UserId == HttpContext.Session.GetInt32("UserId")).FirstOrDefault();} // returns one user object where UserId matches session's
        }

        public IActionResult Index()
        {
            if(ActiveUser == null)
                return RedirectToAction("Index", "Home");

            User thisUser = _context.User.Where(u => u.UserId == HttpContext.Session.GetInt32("UserId")).FirstOrDefault();
            ViewBag.UserInfo = thisUser;

            return View();
        }

        [HttpPost]
        [Route("transaction")]
        public IActionResult Transaction(int amount)
        {
            return RedirectToAction("Index");
        }

    ///////////////////////////////////////////////////////////////////////////////////////////    
    }
}