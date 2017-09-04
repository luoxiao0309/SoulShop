using Newtonsoft.Json;
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
        public ActionResult ProductList(int sortTypes = 1/*排序类型*/, int city = 0/*城市ID 默认值为0 全部地区*/, int productType = 0/*商品类型 默认为全部类型*/)
        {
            //获取全部分类
            DAL.T_Base_ProductCategory dalProductCategory = new DAL.T_Base_ProductCategory();
            List<Model.T_Base_ProductCategory> listProductCategory = dalProductCategory.GetModelList("1=1");

            /*商品类别列表*/
            ViewBag.listProductCategory = listProductCategory;       

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