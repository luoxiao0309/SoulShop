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
        public ActionResult Detail(string shopId="14211160225", Int32 productId=1)
        {
            //根据商品ID获取商品信息
            DAL.T_Base_Product dalProduct = new DAL.T_Base_Product();
            Model.T_Base_Product product = dalProduct.GetModel(productId);

            ViewBag.product = product;

            //根据商品ID和店铺ID获取商品信息
            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();
            List<Model.T_Base_ShopProduct> listShopProduct = dalShopProduct.GetModelList("ShopID='" + shopId + "' and productID=" + productId);

            ViewBag.listShopProduct = listShopProduct;

            return View();
        }
    }
}