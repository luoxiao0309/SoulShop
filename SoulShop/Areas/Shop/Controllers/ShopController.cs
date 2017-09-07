﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

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
            //获取热销商品
            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();

            Int32 length = dalShopProduct.GetRecordCount("1=1");
            if (length > 4) {
                length = 4;
            }

            List<Model.T_Base_ShopProduct> listShopProduct = null;

            if (length < 1)
            {
                //不获取数据
            }
            else
            {
                listShopProduct = dalShopProduct.GetModelListByPageByView("", "MonthlySale desc", 1, length);
            }

            ViewBag.listShopProduct = listShopProduct;

            //获取全部分类
            DAL.T_Base_ProductCategory dalProductCategory = new DAL.T_Base_ProductCategory();
            List<Model.T_Base_ProductCategory> listProductCategory = dalProductCategory.GetModelList("1=1");

            /*商品类别列表*/
            ViewBag.listProductCategory = listProductCategory;

            return View();
        }

        //ProductList 商品分类页
        public ActionResult ProductList(int sortTypes = 1/*排序类型*/, int city = 0/*城市ID 默认值为0 全部地区*/, int productType = 0/*商品类型 默认为全部类型*/)
        {
            //获取全部分类
            DAL.T_Base_ProductCategory dalProductCategory = new DAL.T_Base_ProductCategory();
            List<Model.T_Base_ProductCategory> listProductCategory = dalProductCategory.GetModelList("1=1");

            /*商品类别列表*/
            ViewBag.listProductCategory = listProductCategory;         

            /*商品类别*/
            ViewBag.productCategory = productType;

            return View();
        }

        //ajax获取店铺商品数据
        public JsonResult GetShopProductsMore(string getNumberStr = "100"/*所需获取数量*/,
            string hasNumberStr = "0"/*已有店铺商品数量*/,
            string sortTypesStr = "1"/*排序类型*/,
            string cityStr = "0"/*城市ID 默认值为0 全部地区*/,
            string productTypeStr = "0"/*商品类型 默认为全部类型*/)
        {
            Int32 getNumber = Convert.ToInt32(getNumberStr);
            Int32 hasNumber = Convert.ToInt32(hasNumberStr);
            int sortTypes = Convert.ToInt32(sortTypesStr);
            int city = Convert.ToInt32(cityStr);
            int productType = Convert.ToInt32(productTypeStr);

            //根据当前商品类型和城市定位获取商品列表
            //编辑SQL语句
            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();
            string sql = "";
            if (city != 0) { sql = sql + "AreaID=" + city; }
            if (productType != 0)
            {
                if (sql.Equals(""))
                {
                    sql = "ProductCategoryID=" + productType;
                }
                else
                {          
                    sql = sql + " and " + "ProductCategoryID=" + productType;
                }
            }
            //编辑排序类型 //0表示按价格排序 1表示按月销量排序
            string sortString = "";
            if (sortTypes == 0) { sortString = "Pirce"; }
            else if (sortTypes == 1) { sortString = "MonthlySale desc"; }
            else { sortString = "ID"; }

            //计算列表长度
            Int32 length = dalShopProduct.GetRecordCountbyVSPFS(sql);
            if (getNumber + hasNumber > length)
            {//如果所需的商品数量超限 获取的商品数量为可取的最大值
                getNumber = length - hasNumber;
            }

            //根据指定数量获取数据列表
            List<Model.T_Base_ShopProduct> listShopProduct = dalShopProduct.GetModelListByPageByView(sql, sortString, hasNumber + 1, hasNumber + getNumber);

            //json格式的店铺商品列表数据
            string result = JsonConvert.SerializeObject(listShopProduct);

            return Json(new { result = result, hasNumber = hasNumber + getNumber });
        }

        //Detail 商品详情页
        public ActionResult Detail(string size, string color, string shopId="14211160225", Int32 productId=1)
        {
            /*Color And Size*/
            ViewBag.size = size;
            ViewBag.color = color;

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

        //购物篮页
        public ActionResult ShopCar()
        {
            //伪造买家数据
            Model.T_Base_Buyer buyer = new Model.T_Base_Buyer();
            buyer.ID = "756384199@qq.com";
            buyer.Password = "123456";
            buyer.NickName = "soul101";
            buyer.QQ = "756384199";
            buyer.Phone = "18857731599";
            buyer.Freeze = 0;
            buyer.HeadIcon = "/Icon/Buyer/headicon.jpg";

            //根据买家ID获取购物车条目 并获取商品信息
            DAL.T_Base_ShopCart dalShopCar = new DAL.T_Base_ShopCart();
            List<Model.T_Base_ShopCart> listShopCart = dalShopCar.GetModelList("BuyerID='" + buyer.ID + "' order by createTime desc");

            /*购物篮商品列表*/
            ViewBag.listShopCart = listShopCart;
        
            //根据购物篮信息获取店铺商品信息
            string sqlShopProduct = "ID in ("; 
            for (int i = 0; i < listShopCart.Count; i++)
            {
                sqlShopProduct += listShopCart[i].ShopProductID;
                if(i < (listShopCart.Count -1))
                    sqlShopProduct += ",";
            }
            sqlShopProduct += ")";

            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();
            Int32 lengthShopProduct = dalShopProduct.GetRecordCount(sqlShopProduct);
            List<Model.T_Base_ShopProduct> listShopProduct = dalShopProduct.GetModelListByPageByView(sqlShopProduct, "ID", 1, lengthShopProduct);

            //根据购物篮条目创建时间为店铺商品条目添加该属性
            for (int i = 0; i < listShopCart.Count; i++)
            {
                for (int j = 0; j < listShopProduct.Count; j++)
                {
                    if (listShopCart[i].ShopProductID.Equals(listShopProduct[j].ID))
                    {//如果找到和商品信息匹配的购物车条目 
                        listShopCart[i].ShopProduct = listShopProduct[j];
                        break;
                    }
                }
            }

            ViewBag.listShopCart = listShopCart;

            return View();
        }

        //向购物篮加入信息
        public JsonResult AddInfoToShopCar(Int32 shopProductID, Int32 amount)
        {
            Model.T_Base_ShopCart shopCartItem = new Model.T_Base_ShopCart();
            shopCartItem.ShopProductID = shopProductID;
            shopCartItem.Amount = amount;
            shopCartItem.CreateTime = DateTime.Now;
            shopCartItem.BuyerID = "756384199@qq.com";

            DAL.T_Base_ShopCart dalShopCar = new DAL.T_Base_ShopCart();
            dalShopCar.Add(shopCartItem);

            return Json(new { code = 1 });
        }

        //修改购物篮条目的数据
        public JsonResult UpdateShopCarItemAmount(Int32 shopProductID, Int32 amount)
        {
            //根据买家ID、店铺商品ID和数量进行更新
            string buyerID = "756384199@qq.com";

            DAL.T_Base_ShopCart dalShopCart = new DAL.T_Base_ShopCart();
            //获取
            Model.T_Base_ShopCart shopCartItem = dalShopCart.GetModel(buyerID, shopProductID);
            //更新
            shopCartItem.Amount = amount;
            dalShopCart.Update(shopCartItem);

            return Json(new { code = 1 });
        }

        //登录验证
        public JsonResult CheackLogin(string id, string password)
        {
            DAL.T_Base_Buyer dalBuyer = new DAL.T_Base_Buyer();
            //判断账号是否存在(买家)
            if (dalBuyer.GetRecordCount("ID='" + id + "'") > 0)
            {
                //若账号存在 判断账号和密码是否相符
                Model.T_Base_Buyer buyer = dalBuyer.GetModel(id);
                if (buyer.Password.Equals(password))
                {
                    Session["buyer"] = buyer;
                    return Json(new { code = 1 });
                }
            }
            DAL.T_Base_ShopAdmin dalShopAdmin = new DAL.T_Base_ShopAdmin();
            //判断账号是否存在(管理员)
            if (dalShopAdmin.GetRecordCount("ID='" + id + "'") > 0)
            {
                //若账号存在 判断账号和密码是否相符
                Model.T_Base_ShopAdmin shopAdmin = dalShopAdmin.GetModelByID(id);
                if (shopAdmin.Password.Equals(password))
                {
                    Session["shopAdmin"] = shopAdmin;
                    return Json(new { code = 2 });
                }
            }

            return Json(new { code = 0 });
        }

        //聊天服务 跨域ajax获取用户信息
        public void GetUserInfo()
        {
            string callback = Request.QueryString["callback"];
            
            string result;

            if (Session["buyer"] != null) {
                Model.T_Base_Buyer buyer = (Model.T_Base_Buyer)Session["buyer"];
                var msg = new { code = 1, nickName = buyer.NickName, icon = buyer.HeadIcon };
                result = new JavaScriptSerializer().Serialize(msg);
                Response.Write(callback + "(" + result + ")");

                return;
            }

            //没有登录的买家用户
            var msg2 = new { code = 0 };
            result = new JavaScriptSerializer().Serialize(msg2);
            Response.Write(callback + "(" + result + ")");
        }
    }
}