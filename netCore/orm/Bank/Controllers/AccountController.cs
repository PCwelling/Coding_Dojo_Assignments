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
            List<Account>transactions = _context.Account.Where(a => a.UserId == HttpContext.Session.GetInt32("UserId")).ToList();
            ViewBag.results = transactions;
            if(TempData["error"] != null){
                ViewBag.error = TempData["error"];
            }

            return View();
        }

        [HttpPost]
        [Route("transaction")]
        public IActionResult Transaction(Account account)
        {
            int? id = HttpContext.Session.GetInt32("UserId");
            int uid = (int)id;
            Account newTransaction = new Account()
            {
                UserId = uid,
                amount = account.amount
            };
            User thisUser = _context.User.Where(u => u.UserId == HttpContext.Session.GetInt32("UserId")).FirstOrDefault();
            thisUser.balance += account.amount;
            if(account.amount * -1 > thisUser.balance)
            {
                List<Account> transactions = _context.Account.Where(a => a.UserId == HttpContext.Session.GetInt32("UserId")).ToList();
                ViewBag.results = transactions;
                TempData["error"] = "Withdraw exceeds balance!";
            } else {
            _context.Account.Add(newTransaction);
            _context.SaveChanges();
            }

            return RedirectToAction("Index");
        }

        
    }
}