using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using demo.Models;

namespace demo.Controllers
{
    public class HomeController : Controller
    {

        private ReviewContext _context;
    
        public HomeController(ReviewContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [RouteReview(leavereview)]
        public IActionResult leavereview(ReviewViewModel model)
        {
            if(ModelState.IsValid){
                Review NewReview = new Review{
                name = model.name,
                restaurant = model.restaurant,
                stars = model.stars,
                review = model.review,
                date = model.date
                };
            _context.Add()NewReview                
            }else{

            }

        

        }

        //////////////////////////////////////////////////////////
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
