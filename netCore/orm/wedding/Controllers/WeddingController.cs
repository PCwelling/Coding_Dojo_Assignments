using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using wedding.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

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

        
        [HttpGet]
        [Route("dashboard")]
        public IActionResult Index()
        {
            if(ActiveUser == null)
                return RedirectToAction("Index", "Home");

            User thisUser = _context.User.Where(u => u.UserId == HttpContext.Session.GetInt32("UserId")).FirstOrDefault();
            ViewBag.UserInfo = thisUser;

            List<Wedding> allweddings = _context.Wedding.Include(w => w.UserWedding).ToList();
            return View(allweddings);
        }

        [HttpGet]
        [Route("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
        
        // [HttpGet]
        // [Route("dashboard")]
        // public IActionResult Dashboard()
        // {
        //     User thisUser = _context.User.Where(u => u.UserId == HttpContext.Session.GetInt32("UserId")).FirstOrDefault();
        //     ViewBag.UserInfo = thisUser;

        //     List<Wedding> allweddings = _context.Wedding.Include(w => w.UserWedding).ToList();
               

        //     return View("Index", allweddings);
        // }

        [HttpGet]
        [Route("newwedding")]
        public IActionResult Newwedding()
        {
            if(ActiveUser == null)
                return RedirectToAction("Index", "Home");

            ViewBag.UserInfo = ActiveUser;
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
                Wedding wedding = _context.Wedding.Where(w => w.wedder_1 == model.wedder_1 && w.wedder_2 == model.wedder_2).SingleOrDefault();              
                return RedirectToAction("Showwedding", new {WeddingId = wedding.WeddingId});    
            } else {
                return View("Newwedding");
            }
        }

        [HttpGet]
        [Route("showwedding/{WeddingId}")]
        public IActionResult Showwedding(int WeddingId)
        {
            if(ActiveUser == null)
                return RedirectToAction("Index", "Home");

            ViewBag.wedding = _context.Wedding.Where(w => w.WeddingId == WeddingId)
                .Include(w => w.UserWedding)
                .ThenInclude(u => u.User)
                .SingleOrDefault();

            return View("Showwedding");
        }

        [HttpPost]
        [Route("delete")]
        public IActionResult Delete(int WeddingId)
        {
            Wedding toDelete = _context.Wedding.SingleOrDefault(d => d.WeddingId == WeddingId);
            _context.Wedding.Remove(toDelete);
            _context.SaveChanges();
            return RedirectToAction("Index");
        } 

        [HttpPost]
        [Route("rsvp")]
        public IActionResult Rsvp(int WeddingId)
        {
            if (ActiveUser == null)
                return RedirectToAction("Index", "Home");

            UserWedding newRsvp = new UserWedding
            {
                UserId = ActiveUser.UserId,
                WeddingId = WeddingId
            };
            _context.UserWedding.Add(newRsvp);
            _context.SaveChanges();

            ViewBag.UserInfo = ActiveUser;
            List<Wedding> Wedding = _context.Wedding.ToList();
            return RedirectToAction("Index", Wedding);
        }

        [HttpPost]
        [Route("unrsvp")]
        public IActionResult UnRsvp(int WeddingId)
        {
            if (ActiveUser == null)
                return RedirectToAction("Index", "Home");

            UserWedding toDelete = _context.UserWedding.SingleOrDefault(r => r.WeddingId == WeddingId && r.UserId == ActiveUser.UserId);
            _context.UserWedding.Remove(toDelete);
            _context.SaveChanges();

            ViewBag.UserInfo = ActiveUser;
            List<Wedding> Wedding = _context.Wedding.ToList();
            return RedirectToAction("Index", Wedding);
        } 

    }
}