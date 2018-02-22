using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using wedding.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace wedding.Controllers
{
    public class WeddingController : Controller
    {

        private Context _context;
 
        public WeddingController(Context context)
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

            List<Wedding> allweddings = _context.Wedding.ToList();
            ViewBag.allweddings = allweddings;

            return View();
        }

        [HttpGet]
        [Route("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
        
        [HttpGet]
        [Route("dashboard")]
        public IActionResult Dashboard()
        {
            User thisUser = _context.User.Where(u => u.UserId == HttpContext.Session.GetInt32("UserId")).FirstOrDefault();
            ViewBag.UserInfo = thisUser;

            return View("Index");
        }

        [HttpGet]
        [Route("newwedding")]
        public IActionResult Newwedding()
        {
            if(ActiveUser == null)
            return RedirectToAction("Index", "Home");

            return View();
        }

        [HttpPost]
        [Route("createwedding")]
        public IActionResult Createwedding(WeddingViewModel model)
        {
            if(ModelState.IsValid){
                Wedding NewWedding = new Wedding{
                    wedder_1 = model.wedder_1,
                    wedder_2 = model.wedder_2,
                    date = model.date,
                    address = model.address,
                    created_by = ActiveUser.UserId
                };
                _context.Add(NewWedding);
                _context.SaveChanges();
                return RedirectToAction("Showwedding");    
            } else {
                return View("Newwedding");
            }
        }

        [HttpGet]
        [Route("showwedding")]
        public IActionResult Showwedding()
        {
            if(ActiveUser == null)
                return RedirectToAction("Index", "Home");

            return View();
        }






    }
}