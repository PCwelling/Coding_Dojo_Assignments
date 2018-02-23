using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BeltExam.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace BeltExam.Controllers
{
    public class MainController : Controller
    {

        private Context _context;
 
        public MainController(Context context)
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
                return RedirectToAction("Index", "Login");

            User thisUser = _context.User.Where(u => u.UserId == HttpContext.Session.GetInt32("UserId")).FirstOrDefault();
            ViewBag.UserInfo = thisUser;

            return View();
        }

        [HttpGet]
        [Route("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
        ///-----------------------------------------------------------------------------------------------------------///
    }
}