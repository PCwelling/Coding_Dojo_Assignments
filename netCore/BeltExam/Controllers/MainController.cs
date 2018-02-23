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

        [HttpGet]
        [Route("dashboard")]
        public IActionResult Index()
        {
            if(ActiveUser == null)
                return RedirectToAction("Index", "Login");

            User thisUser = _context.User.Where(u => u.UserId == HttpContext.Session.GetInt32("UserId")).FirstOrDefault();
            ViewBag.UserInfo = thisUser;

            List<BeltExam.Models.Activity> allactivities = _context.Activity.Include(a => a.UserActivity).ToList();

            return View(allactivities);
        }

        [HttpGet]
        [Route("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index", "Login");
        }

        [HttpGet]
        [Route("new")]
        public IActionResult New()
        {
            if(ActiveUser == null)
                return RedirectToAction("Index", "Login");
            
            ViewBag.UserInfo = ActiveUser;
            return View();
        }

        [HttpPost]
        [Route("create")]
        public IActionResult Create(ActivityViewModel model)
        {
            if(ModelState.IsValid)
            {
                BeltExam.Models.Activity newEvent = new BeltExam.Models.Activity
                {
                    title = model.title,
                    time = model.time,
                    date = model.date,
                    duration = model.duration,
                    durationlength = model.durationlength,
                    desc = model.desc,
                    coordinator = ActiveUser.UserId
                };
                _context.Add(newEvent);
                _context.SaveChanges();
                BeltExam.Models.Activity activity = _context.Activity.Where(b => b.title == model.title && b.coordinator == ActiveUser.UserId).SingleOrDefault();
                return RedirectToAction("Showactivity", new {ActivityId = activity.ActivityId});
            } else
            {
                return View("New");
            }
        }

        [HttpGet]
        [Route("showactivity/{ActivityId}")]
        public IActionResult Showactivity(int ActivityId)
        {
            if(ActiveUser == null)
                return RedirectToAction("Index", "Login");

            ViewBag.showevent = _context.Activity.Where(w => w.ActivityId == ActivityId).Include(w => w.UserActivity).ThenInclude(u => u.User).SingleOrDefault();

            return View("Activity");
        }

        [HttpPost]
        [Route("delete")]
        public IActionResult Delete(int ActivityId)
        {
            BeltExam.Models.Activity toDelete = _context.Activity.SingleOrDefault(d => d.ActivityId == ActivityId);
            _context.Activity.Remove(toDelete);
            _context.SaveChanges();
            return RedirectToAction("Index");
        } 

        [HttpPost]
        [Route("join")]
        public IActionResult Join(int ActivityId)
        {
            if (ActiveUser == null)
                return RedirectToAction("Index", "Login");

            UserActivity newJoin = new UserActivity
            {
                UserId = ActiveUser.UserId,
                ActivityId = ActivityId
            };
            _context.UserActivity.Add(newJoin);
            _context.SaveChanges();

            ViewBag.UserInfo = ActiveUser;
            List<BeltExam.Models.Activity> Activity = _context.Activity.ToList();
            return RedirectToAction("Index", Activity);
        }

        [HttpPost]
        [Route("leave")]
        public IActionResult Leave(int ActivityId)
        {
            if (ActiveUser == null)
                return RedirectToAction("Index", "Login");

            UserActivity toDelete = _context.UserActivity.SingleOrDefault(r => r.ActivityId == ActivityId && r.UserId == ActiveUser.UserId);
            _context.UserActivity.Remove(toDelete);
            _context.SaveChanges();

            ViewBag.UserInfo = ActiveUser;
            List<BeltExam.Models.Activity> Activity = _context.Activity.ToList();
            return RedirectToAction("Index", Activity);
        } 

        ///-----------------------------------------------------------------------------------------------------------///
    }
}