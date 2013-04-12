using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using windows.Models;
using System.IO;

namespace windows.Controllers
{
    public class AllowCrossSiteJsonAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            filterContext.RequestContext.HttpContext.Response.AddHeader("Access-Control-Allow-Origin", "*");
            base.OnActionExecuting(filterContext);
        }
    }

    [AllowCrossSiteJson]
    public class ApiController : Controller
    {
        //
        // GET: /Home/

        public JsonResult GetDektop(string path ="")
        {
            if(path=="")
            path = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);
            DirectoryInfo dir = new DirectoryInfo(path);
            var ob = new Obj();

           // ob.Path = dir.FullName;
            // str += "Attributes are" + dir1.Attributes.ToString();
            ob.icons = new List<windows.Models.File>();

            foreach(var f in dir.GetFiles())
            {
                ob.icons.Add(new windows.Models.File() { name = f.Name, type = Sys.TypeOfIcon(f.Name.Split('.').Last()) });
            }


            //if (dir.Parent!=null) ob.Parent = dir.Parent.FullName;
            //ob.Dirs = Directory.GetDirectories(path);

            return Json(ob, JsonRequestBehavior.AllowGet);
        }

        //
        // GET: /Home/Details/5

        public ActionResult Details()
        {               
            return View();
        }

        //
        // GET: /Home/Create

        public ActionResult Create()
        {
            return View();
        } 

        //
        // POST: /Home/Create

        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
        
        //
        // GET: /Home/Edit/5
 
        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /Home/Edit/5

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here
 
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Home/Delete/5
 
        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Home/Delete/5

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here
 
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
