using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SoulShop.Areas.Shop.Controllers
{
    public class ShopController : Controller
    {
        // GET: Shop/Shop
        //Cover 首页
        public ActionResult Index()
        {

            return View();
        }

        //Main 主页
        public ActionResult Main()
        {

            return View();
        }

        //ProductList 商品分类页
        public ActionResult ProductList()
        {

            return View();
        }

        //Detail 商品详情页
        public ActionResult Detail()
        {

            return View();
        }
    }
}