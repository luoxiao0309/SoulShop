using Newtonsoft.Json;
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
        /*0.工具函数*/
        private Model.T_Base_Buyer GetBuyerInfo()
        {
            Model.T_Base_Buyer buyer = (Model.T_Base_Buyer)Session["buyer"];

            return buyer;
        }

        /*1.首页*/
        // GET: Shop/Shop
        //Cover 首页
        public ActionResult Index()
        {

            return View();
        }

        /*2.主页*/
        //Main 主页
        public ActionResult Main()
        {
            //获取热销商品
            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();

            Int32 lengthHot = dalShopProduct.GetRecordCount("1=1");
            if (lengthHot > 4) {
                lengthHot = 4;
            }

            List<Model.T_Base_ShopProduct> listShopProduct = null;

            if (lengthHot < 1)
            {
                //不获取数据
            }
            else
            {
                listShopProduct = dalShopProduct.GetModelListByPageByView("", "MonthlySale desc", 1, lengthHot);
            }

            ViewBag.listShopProduct = listShopProduct;

            //获取活动商品
            DateTime nowTime = DateTime.Now;
            string sqlWhereTimeOK = "CONVERT(datetime, '" + nowTime + "', 102) between StartTime and EndTime";
            string sqlWhereTimePre = "StartTime>CONVERT(datetime, '" + nowTime + "', 102)";
            //1.正在活动的商品
            DAL.T_Base_SaleProduct dalSaleProduct = new DAL.T_Base_SaleProduct();

            Int32 lengthSale = dalSaleProduct.GetRecordCount(sqlWhereTimeOK);
            if (lengthSale > 4)
            {
                lengthSale = 4;
            }

            List<Model.T_Base_SaleProduct> listSaleProduct = null;

            if (lengthSale < 1)
            {
                //不获取数据
            }
            else
            {
                listSaleProduct = dalSaleProduct.GetModelListByPageByView(sqlWhereTimeOK, "MonthlySale desc", 1, lengthSale);
            }

            ViewBag.listSaleProduct = listSaleProduct;

            //2.正在活动的商品
            lengthSale = dalSaleProduct.GetRecordCount(sqlWhereTimePre);
            if (lengthSale > 4)
            {
                lengthSale = 4;
            }

            List<Model.T_Base_SaleProduct> listSaleProductPre = null;

            if (lengthSale < 1)
            {
                //不获取数据
            }
            else
            {
                listSaleProductPre = dalSaleProduct.GetModelListByPageByView(sqlWhereTimePre, "MonthlySale desc", 1, lengthSale);
            }

            ViewBag.listSaleProductPre = listSaleProductPre;

            //获取全部分类
            DAL.T_Base_ProductCategory dalProductCategory = new DAL.T_Base_ProductCategory();
            List<Model.T_Base_ProductCategory> listProductCategory = dalProductCategory.GetModelList("1=1");

            /*商品类别列表*/
            ViewBag.listProductCategory = listProductCategory;

            return View();
        }

        /*3.商品浏览页*/
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

            return Json(new { result = result, SQLServerMaxImg = length });
        }

        //SaleProductList 抢购（活动商品浏览页）
        public ActionResult SaleProductList(int sortTypes = 1/*排序类型*/, int city = 0/*城市ID 默认值为0 全部地区*/,
            int productType = 0/*商品类型 默认为全部类型*/, int saleType = 0/*0为未开始活动 1为已开始活动*/)
        {
            /*0为未开始活动 1为已开始活动*/
            ViewBag.saleType = saleType;

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
        public JsonResult GetSaleProductsMore(string getNumberStr = "100"/*所需获取数量*/,
            string hasNumberStr = "0"/*已有店铺商品数量*/,
            string sortTypesStr = "1"/*排序类型*/,
            string cityStr = "0"/*城市ID 默认值为0 全部地区*/,
            string productTypeStr = "0"/*商品类型 默认为全部类型*/,
            string saleTypeStr = "0"/*0为未开始活动 1为已开始活动*/)
        {
            Int32 getNumber = Convert.ToInt32(getNumberStr);
            Int32 hasNumber = Convert.ToInt32(hasNumberStr);
            int sortTypes = Convert.ToInt32(sortTypesStr);
            int city = Convert.ToInt32(cityStr);
            int productType = Convert.ToInt32(productTypeStr);
            int saleType = Convert.ToInt32(saleTypeStr);

            DateTime nowTime = DateTime.Now;
            string sqlWhereTime = null;
            //构造关于活动是否开始的sql条件语句
            if (saleType == 0)/*活动未开始*/
            {
                sqlWhereTime = "StartTime>CONVERT(datetime, '" + nowTime + "', 102)";
            }
            else if (saleType == 1)/*活动已开始*/
            {
                sqlWhereTime = "CONVERT(datetime, '" + nowTime + "', 102) between StartTime and EndTime";
            }

            //根据当前商品类型和城市定位获取商品列表
            //编辑SQL语句
            DAL.T_Base_SaleProduct dalSaleProduct = new DAL.T_Base_SaleProduct();
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

            //sql总和
            sql = sql + " and " + sqlWhereTime;

            //编辑排序类型 //0表示按价格排序 1表示按月销量排序
            string sortString = "";
            if (sortTypes == 0) { sortString = "Pirce"; }
            else if (sortTypes == 1) { sortString = "MonthlySale desc"; }
            else { sortString = "ID"; }

            //计算列表长度
            Int32 length = dalSaleProduct.GetRecordCountbyVSSPFS(sql);
            if (getNumber + hasNumber > length)
            {//如果所需的商品数量超限 获取的商品数量为可取的最大值
                getNumber = length - hasNumber;
            }

            //根据指定数量获取数据列表
            List<Model.T_Base_SaleProduct> listSaleProduct = dalSaleProduct.GetModelListByPageByView(sql, sortString, hasNumber + 1, hasNumber + getNumber);

            //json格式的店铺商品列表数据
            string result = JsonConvert.SerializeObject(listSaleProduct);

            return Json(new { result = result, SQLServerMaxImg = length });
        }

        /*4.商品详情页*/
        //Detail 商品详情页
        public ActionResult Detail(string size, string color, string shopId, Int32 productId)
        {
            //店铺ID
            ViewBag.shopID = shopId;

            /*Color And Size*/
            ViewBag.size = size;
            ViewBag.color = color;

            //根据商品ID获取商品信息
            DAL.T_Base_Product dalProduct = new DAL.T_Base_Product();
            Model.T_Base_Product product = dalProduct.GetModel(productId);

            ViewBag.product = product;

            //根据商品ID和店铺ID获取店铺商品信息
            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();
            List<Model.T_Base_ShopProduct> listShopProduct = dalShopProduct.GetModelList("ShopID='" + shopId + "' and productID=" + productId);

            ViewBag.listShopProduct = listShopProduct;

            //根据商品列表中的Size和Color 筛选不重复的这两个数组
            List<string> listSize = new List<string>();
            List<string> listColor = new List<string>();
            foreach (Model.T_Base_ShopProduct item in listShopProduct)
            {
                if (listSize.IndexOf(item.Size) < 0)
                {
                    listSize.Add(item.Size);
                }
                if (listColor.IndexOf(item.Color) < 0)
                {
                    listColor.Add(item.Color);
                }
            }

            ViewBag.listSize = listSize;
            ViewBag.listColor = listColor;

            return View();
        }

        //根据商品信息获取评论信息
        public JsonResult GetCommentByProductInfo(string shopID, Int32 productID,
             string size, string color)
        {
            //根据商品信息获取店铺商品ID
            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();
            Model.T_Base_ShopProduct shopProduct = dalShopProduct.GetModelByInfo(shopID, productID, size, color);

            DAL.T_Product_Comment dalProductComment = new DAL.T_Product_Comment();
            List<Model.T_Product_Comment> listProductComment;
            //根据店铺商品的ID获取商品评论
            if (shopProduct != null)
            {
                listProductComment = dalProductComment.GetModelListByView("ShopProductID=" + shopProduct.ID);

            }
            else
            {
                listProductComment = new List<Model.T_Product_Comment>();
            }

            string result = JsonConvert.SerializeObject(listProductComment);

            return Json(new { result = result });
        }

        //评论页
        public ActionResult ShopProductComment(string shopID, Int32 productID,
             string size, string color)
        {
            //根据商品信息获取店铺商品ID
            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();
            Model.T_Base_ShopProduct shopProduct = dalShopProduct.GetModelByInfo(shopID, productID, size, color);

            DAL.T_Product_Comment dalProductComment = new DAL.T_Product_Comment();
            List<Model.T_Product_Comment> listProductComment;
            //根据店铺商品的ID获取商品评论
            if (shopProduct != null)
            {
                listProductComment = dalProductComment.GetModelListByView("ShopProductID=" + shopProduct.ID);

            }
            else
            {
                listProductComment = new List<Model.T_Product_Comment>();
            }

            ViewBag.listProductComment = listProductComment;
            ViewBag.shopProductID = shopProduct.ID;

            return View();
        }

        //分页获取评论
        public JsonResult GetShopProductCommentByPage(Int32 shopProductID/*店铺商品ID*/, Int32 thePageNumber/*页码*/)
        {
            //每页的所包含的容量
            Int32 perPageCount = 2;

            //根据商品信息获取店铺商品ID
            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();
            Model.T_Base_ShopProduct shopProduct = dalShopProduct.GetModel(shopProductID);

            DAL.T_Product_Comment dalProductComment = new DAL.T_Product_Comment();
            List<Model.T_Product_Comment> listProductComment;
            //根据店铺商品的ID获取商品评论
            if (shopProduct != null)
            {
                listProductComment = dalProductComment.GetModelListByPageByView("ShopProductID=" + shopProduct.ID, "CreateTime", (thePageNumber - 1) * perPageCount + 1, thePageNumber * perPageCount);
            }
            else
            {
                listProductComment = new List<Model.T_Product_Comment>();
            }

            string result = JsonConvert.SerializeObject(listProductComment);

            return Json(new { result = result });
        }

        /*5.购物篮页*/
        //购物篮页
        public ActionResult ShopCar()
        {
            //买家数据
            Model.T_Base_Buyer buyer = (Model.T_Base_Buyer)Session["buyer"];

            //根据买家ID获取购物车条目 并获取商品信息
            DAL.T_Base_ShopCart dalShopCar = new DAL.T_Base_ShopCart();
            List<Model.T_Base_ShopCart> listShopCart = dalShopCar.GetModelList("BuyerID='" + buyer.ID + "' order by createTime desc");

            Int32 listShopCartCount = listShopCart.Count;
            if (listShopCartCount <= 0)
            {
                //如果该用户没有加入购物篮中的商品
                /*购物篮商品列表*/
                ViewBag.listShopCart = listShopCart;

                return View();
            }

            //根据购物篮信息获取店铺商品信息
            string sqlShopProduct = "ID in (";
            for (int i = 0; i < listShopCartCount; i++)
            {
                sqlShopProduct += listShopCart[i].ShopProductID;
                if (i < (listShopCart.Count - 1))
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

            /*购物篮商品列表*/
            ViewBag.listShopCart = listShopCart;

            return View();
        }

        //向购物篮加入信息
        public JsonResult AddInfoToShopCar(Int32 shopProductID, Int32 amount)
        {
            //完整的权限设置
            Model.T_Base_Buyer buyer = (Model.T_Base_Buyer)Session["buyer"];
            if (buyer == null)//如果buyer为null 说明没有用户登录
            {
                return Json(new { code = 0 });//0为无用户登录
            }

            DAL.T_Base_ShopCart dalShopCar = new DAL.T_Base_ShopCart();

            //监测该条目数据是否已存在
            if (dalShopCar.Exists(buyer.ID, shopProductID)) {
                return Json(new { code = 2 });//数据已存在
            }

            //添加数据
            Model.T_Base_ShopCart shopCartItem = new Model.T_Base_ShopCart();
            shopCartItem.ShopProductID = shopProductID;
            shopCartItem.Amount = amount;
            shopCartItem.CreateTime = DateTime.Now;
            shopCartItem.BuyerID = buyer.ID;

            dalShopCar.Add(shopCartItem);

            return Json(new { code = 1 });//操作完成
        }

        public JsonResult AddInfoToShopCarByMore(Int32 amount, string shopID, Int32 productID, string size, string color)
        {
            //完整的权限设置
            Model.T_Base_Buyer buyer = (Model.T_Base_Buyer)Session["buyer"];
            if (buyer == null)//如果buyer为null 说明没有用户登录
            {
                return Json(new { code = 0 });//0为无用户登录
            }

            //根据productID shopProductID size color获取shopProductID
            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();
            Model.T_Base_ShopProduct shopProduct = dalShopProduct.GetModelByInfo(shopID, productID, size, color);
            Int32 shopProductID = shopProduct.ID;

            DAL.T_Base_ShopCart dalShopCar = new DAL.T_Base_ShopCart();

            //监测该条目数据是否已存在
            if (dalShopCar.Exists(buyer.ID, shopProductID))
            {
                return Json(new { code = 2 });//数据已存在
            }

            //添加数据
            Model.T_Base_ShopCart shopCartItem = new Model.T_Base_ShopCart();
            shopCartItem.ShopProductID = shopProductID;
            shopCartItem.Amount = amount;
            shopCartItem.CreateTime = DateTime.Now;
            shopCartItem.BuyerID = buyer.ID;

            dalShopCar.Add(shopCartItem);

            return Json(new { code = 1 });//操作完成
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

        //删除购物篮条目
        public JsonResult DeleteShopCarItem(Int32 shopProductID)
        {
            //获取买家信息
            Model.T_Base_Buyer buyer = GetBuyerInfo();

            //根据买家信息和店铺商品信息删除数据
            DAL.T_Base_ShopCart dalShopCart = new DAL.T_Base_ShopCart();
            dalShopCart.Delete(buyer.ID, shopProductID);

            return Json(new { code = 1, shopProductID = shopProductID });
        }

        //收藏商品
        public JsonResult CollectShopProduct(string shopID, Int32 productID, string size, string color, string productLink)
        {
            //完整的权限设置
            Model.T_Base_Buyer buyer = (Model.T_Base_Buyer)Session["buyer"];
            if (buyer == null)//如果buyer为null 说明没有用户登录
            {
                return Json(new { code = 0 });//0为无用户登录
            }

            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();
            Model.T_Base_ShopProduct shopProduct = dalShopProduct.GetModelByInfo(shopID, productID, size, color);
            Int32 shopProductID = shopProduct.ID;
   
            DAL.T_Base_Collection dalCollection = new DAL.T_Base_Collection();

            if (dalCollection.Exists(buyer.ID, shopProductID)) {
                return Json(new { code = 2 });
            }

            Model.T_Base_Collection collection = new Model.T_Base_Collection();
            collection.BuyerID = buyer.ID;
            collection.ShopProductID = shopProductID;
            collection.ProductLink = productLink;

            dalCollection.Add(collection);

            return Json(new { code = 1 });
        }

        /*6.订单生成*/
        //购物篮结算订单生成
        public void CreateOrderByShopCart(string shopProductIDs, string amounts, Int32 addressID)
        {
            //获取买家信息
            Model.T_Base_Buyer buyer = GetBuyerInfo();

            DAL.T_Base_OrderHead dalOrderHead = new DAL.T_Base_OrderHead();
            //新建订单头
            Model.T_Base_OrderHead orderHead = new Model.T_Base_OrderHead();
            orderHead.TotalPrice = 0;
            orderHead.Status = 0;//待发货
            orderHead.BuyerID = buyer.ID;
            orderHead.AddressID = addressID;
            orderHead.DeleteBuyer = 0;
            orderHead.DeleteShop = 0;
            orderHead.SalesReturn = 0;
            orderHead.TrackingNumver = "";//暂时为空
            orderHead.CreateTime = DateTime.Now;
      
            //保存订单头 1
            Int32 orderHeadID = dalOrderHead.Add(orderHead);

            //订单体
            DAL.T_Base_OrderItem dalOrderItem = new DAL.T_Base_OrderItem();
            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();

            string[] listShopProductID = shopProductIDs.Split(';');
            string[] listAmount = amounts.Split(';');

            //总价
            decimal sumPrice = 0;

            Int32 length = listShopProductID.Length;
            for (int i = 0; i < length; i++)
            {
                //根据数据创建订单项
                Int32 shopProductID = Convert.ToInt32(listShopProductID[i]);
                Model.T_Base_OrderItem orderItem = new Model.T_Base_OrderItem();
                orderItem.OrderHeadID = orderHeadID;//订单头
                orderItem.ShopProductID = shopProductID;//店铺商品ID
                orderItem.Amount = Convert.ToInt32(listAmount[i]);//商品数量
                orderItem.Discount = 1;//折扣
                //保存订单体 2
                dalOrderItem.Add(orderItem);
                //获取商品价格并添加至总价 3
                Model.T_Base_ShopProduct shopProduct = dalShopProduct.GetModel(shopProductID);
                sumPrice += (decimal)shopProduct.Price;
            }

            //更新总价 4
            Model.T_Base_OrderHead orOrderHead = dalOrderHead.GetModel(orderHeadID);
            orOrderHead.TotalPrice = sumPrice;
            dalOrderHead.Update(orOrderHead);

            //删除购物车条目
            shopProductIDs = shopProductIDs.Replace(";", ",");
            DAL.T_Base_ShopCart dalShopCart = new DAL.T_Base_ShopCart();
            dalShopCart.DeleteList(buyer.ID, shopProductIDs);
        }

        //根据打折商品SaleID 生成订单
        public JsonResult CreateOrderRightNow(Int32 saleProductID, Int32 addressID)
        {
            DAL.T_Base_SaleProduct dalSaleProduct = new DAL.T_Base_SaleProduct();
            Model.T_Base_SaleProduct saleProduct = dalSaleProduct.GetModelByView(saleProductID);

            //获取买家信息
            Model.T_Base_Buyer buyer = GetBuyerInfo();

            //根据saleProduct的信息 判断该买家是否买过该商品
            DAL.T_Base_OrderHead dalOrderHead = new DAL.T_Base_OrderHead();
            DAL.T_Base_OrderItem dalOrderItem = new DAL.T_Base_OrderItem();
            List< Model.T_Base_OrderHead> listOrder = dalOrderHead.GetModelList("BuyerID='" + buyer.ID + "'");
            string sqlOrderID = "(";
            foreach (Model.T_Base_OrderHead head in listOrder)
            {
                sqlOrderID += head.ID;
                sqlOrderID += ",";
            }
            sqlOrderID = sqlOrderID.Substring(0, sqlOrderID.Length - 1);
            sqlOrderID += ")";
            //根据条件获取订单体
            List<Model.T_Base_OrderItem> listOrderItem = dalOrderItem.GetModelList("OrderHeadID in " + sqlOrderID);
            foreach (Model.T_Base_OrderItem item in listOrderItem)
            {//遍历订单条目
                if (item.ShopProductID == saleProduct.ShopProduct.ID)
                {//如果有该店铺商品
                    if (item.Discount == saleProduct.Discount)
                    {//如果折扣一致
                        return Json(new { code = 0 });
                    }
                }
            }

            //如果未买过该折扣商品
            //新建订单头
            Model.T_Base_OrderHead orderHead = new Model.T_Base_OrderHead();
            orderHead.TotalPrice = saleProduct.ShopProduct.Price * saleProduct.Discount;
            orderHead.Status = 0;//待发货
            orderHead.BuyerID = buyer.ID;
            orderHead.AddressID = addressID;
            orderHead.DeleteBuyer = 0;
            orderHead.DeleteShop = 0;
            orderHead.SalesReturn = 0;
            orderHead.TrackingNumver = "";//暂时为空
            orderHead.CreateTime = DateTime.Now;

            //保存订单头 1
            Int32 orderHeadID = dalOrderHead.Add(orderHead);

            //订单体
            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();

            //根据数据创建订单项    
            Model.T_Base_OrderItem orderItem = new Model.T_Base_OrderItem();
            orderItem.OrderHeadID = orderHeadID;//订单头
            orderItem.ShopProductID = saleProduct.ShopProduct.ID;//店铺商品ID
            orderItem.Amount = 1;//商品数量
            orderItem.Discount = saleProduct.Discount;//折扣
            //保存订单体 2
            dalOrderItem.Add(orderItem);

            return Json(new { code = 1 });
        }

        //打折商品信息获取
        public JsonResult GetSaleProductByID(Int32 saleProductID)
        {
            Model.T_Base_Buyer buyer = GetBuyerInfo();
            if (buyer == null)//如果buyer为null 说明没有用户登录
            {
                return Json(new { code = 0 });//0为无用户登录
            }

            DAL.T_Base_SaleProduct dalSaleProduct = new DAL.T_Base_SaleProduct();
            Model.T_Base_SaleProduct saleProduct = dalSaleProduct.GetModelByView(saleProductID);

            string result = JsonConvert.SerializeObject(saleProduct);

            return Json(new { code = 1 ,result = result });
        }

        //获取地址信息
        public JsonResult GetBuyerAddress()
        {
            //获取Buyer
            Model.T_Base_Buyer buyer = GetBuyerInfo();
            if (buyer == null) {
                return Json(new { code = 0 });
            }

            //获取BuyerID
            string buyerID = ((Model.T_Base_Buyer)Session["buyer"]).ID;

            DAL.T_Base_Address dalAddress = new DAL.T_Base_Address();

            List<Model.T_Base_Address> listAddress = dalAddress.GetModelList("BuyerID='" + buyerID + "'");

            //如果没有地址 返回code = 0
            if (listAddress.Count == 0)
            {
                return Json(new { code = 0 });
            }

            //遍历地址列表 如果没有默认地址 将第一个地址设置为默认
            int isHas = 0;
            foreach (Model.T_Base_Address cAddress in listAddress)
            {
                if (cAddress.IsDefault == 1)
                {
                    isHas = 1;
                }
            }
            if (isHas == 0)
            {
                setDefaultAddress(listAddress[0]);
            }

            string result = JsonConvert.SerializeObject(listAddress);

            return Json(new { result = result, code = 1 });
        }

        //设置默认地址
        public void setDefaultAddress(Model.T_Base_Address address)
        {
            DAL.T_Base_Address dalAddress = new DAL.T_Base_Address();
            address.IsDefault = 1;
            dalAddress.Update(address);
        }

        //地址信息创建
        public JsonResult CreateNewAddress(string name, string phone, string address)
        {
            //获取买家信息
            Model.T_Base_Buyer buyer = (Model.T_Base_Buyer)Session["buyer"];

            Model.T_Base_Address addressModel = new Model.T_Base_Address();
            addressModel.Address = address;
            addressModel.Phone = phone;
            addressModel.Name = name;
            addressModel.BuyerID = buyer.ID;
            addressModel.IsDefault = 1;

            //将当前用户的原默认地址信息设置为非默认信息
            DAL.T_Base_Address dalAddress = new DAL.T_Base_Address();
            //取数据
            Model.T_Base_Address orAddress = null;
            orAddress = dalAddress.GetModelByIsDefault(buyer.ID);
            //更新数据
            if (orAddress != null)
            {
                orAddress.IsDefault = 0;
                dalAddress.Update(orAddress);
            }
            else
            {
                //如果没有默认信息 不执行任何操作
            }    

            //添加新增地址 该地址设置为默认地址
            dalAddress.Add(addressModel);

            return Json(new { code = 1 });
        }

        public JsonResult ChangeDefaultByID(Int32 id)
        {
            //获取买家信息
            Model.T_Base_Buyer buyer = (Model.T_Base_Buyer)Session["buyer"];

            //将当前用户的原默认地址信息设置为非默认信息
            DAL.T_Base_Address dalAddress = new DAL.T_Base_Address();
            //取数据
            Model.T_Base_Address orAddress = dalAddress.GetModelByIsDefault(buyer.ID);
            //更新数据
            orAddress.IsDefault = 0;
            dalAddress.Update(orAddress);

            //获取新的默认地址
            Model.T_Base_Address nowAddress = dalAddress.GetModel(id);
            //设置新地址为默认地址
            nowAddress.IsDefault = 1;
            dalAddress.Update(nowAddress);

            return Json(new { code = 1 });
        }

        /*7.登陆与注册*/
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
                    Session["type"] = 0;
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
                    Session["type"] = 1;
                    return Json(new { code = 2 });
                }
            }
            DAL.T_Base_SysAdmin dalSysAdmin = new DAL.T_Base_SysAdmin();
            //判断账号是否存在（超级管理员）
            if (dalSysAdmin.GetRecordCount("ID='" + id + "'") > 0)
            {
                //若账号存在 判断账号和密码是否相符
                Model.T_Base_SysAdmin sysAdmin = dalSysAdmin.GetModel(id);
                if (sysAdmin.Password.Equals(password))
                {
                    Session["sysAdmin"] = sysAdmin;
                    Session["type"] = 2;
                    return Json(new { code = 3 });
                }
            }

            return Json(new { code = 0 });
        }

        //注销登录
        public JsonResult CancelLogin()
        {       
            Session.Abandon();//清除数据

            return Json(new { code = 1 });
        }

        //会员注册
        public JsonResult BuyerSignUp(string id, string password,
            string nickname, string qq, string phone)
        {
            Model.T_Base_Buyer buyer = new Model.T_Base_Buyer();
            buyer.ID = id;
            buyer.Password = password;
            buyer.NickName = nickname;
            buyer.QQ = qq;
            buyer.Phone = phone;
            buyer.Freeze = 0;
            buyer.HeadIcon = "/Icon/Default/我.png";

            DAL.T_Base_Buyer dalBuyer = new DAL.T_Base_Buyer();
            dalBuyer.Add(buyer);

            return Json(new { code = 1 });
        }

        //店铺管理员注册
        public JsonResult ShopAdminSignUp(string id, string password,
            string shopName, string ownerID, string ownerName, 
            string ownerQQ, string ownerPhone, string ownerAddress,
            int areaID)
        {
            Model.T_Base_ShopAdmin shopAdmin = new Model.T_Base_ShopAdmin();
            shopAdmin.ID = id;
            shopAdmin.Password = password;
            shopAdmin.ShopName = shopName;
            shopAdmin.OwnerID = ownerID;
            shopAdmin.OwnerName = ownerName;
            shopAdmin.OwnerQQ = ownerQQ;
            shopAdmin.OwnerPhone = ownerPhone;
            shopAdmin.OwnerAddress = ownerAddress;
            shopAdmin.Checking = 0;
            shopAdmin.Freeze = 0;
            shopAdmin.HeadIcon = "/Icon/Default/店铺.png";
            shopAdmin.AreaID = areaID;
            //店铺编号构造
            string shopIDTime = DateTime.Now.ToFileTime().ToString();
            shopAdmin.ShopID = shopName.Substring(0, 6) + shopIDTime;

            DAL.T_Base_ShopAdmin dalShopAdmin = new DAL.T_Base_ShopAdmin();
            dalShopAdmin.Add(shopAdmin);

            return Json(new { code = 1 });
        }

        /*8.在线聊天*/
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

        //聊天服务 跨域ajax保存聊天记录
        public void SaveMsgToServer()
        {
            string callback = Request.QueryString["callback"];
            string contackName = Request.QueryString["contackName"];
            string myName = Request.QueryString["myName"];
            string contents = Request.QueryString["contents"];

            //根据传参将数据保存
            Model.T_Base_ChatOnline chatOnlineItem = new Model.T_Base_ChatOnline();
            chatOnlineItem.Contents = contents;
            chatOnlineItem.ReceiverName = contackName;
            chatOnlineItem.SenderName = myName;
            chatOnlineItem.CreateTime = DateTime.Now;
            chatOnlineItem.IsChecked = 0;

            DAL.T_Base_ChatOnline dalChatOnline = new DAL.T_Base_ChatOnline();
            dalChatOnline.Add(chatOnlineItem);

            var msg = new { code = 1 };
            string result = new JavaScriptSerializer().Serialize(msg);
            Response.Write(callback + "(" + result + ")");
        }

        //聊天服务 跨域ajax获取联系人列表
        public void GetConackList()
        {
            string callback = Request.QueryString["callback"];
            string myName = Request.QueryString["myName"];

            //根据当前用户名 获取联系人列表
            DAL.T_Base_ChatContacks dalChatContacks = new DAL.T_Base_ChatContacks();
            List<Model.T_Base_ChatContacks> listChatContacks = dalChatContacks.GetModelListByOwnerName("OwnerName='" + myName + "'");

            //json格式的联系人列表数据
            string result = JsonConvert.SerializeObject(listChatContacks);

            Response.Write(callback + "(" + result + ")");
        }

        //根据聊天对象获取聊天记录
        public void GetChatItemsByContacks()
        {
            Model.T_Base_Buyer buyer = (Model.T_Base_Buyer)Session["buyer"];
            string nickName = buyer.NickName;

            string callback = Request.QueryString["callback"];
            string contacksName = Request.QueryString["contacksName"];

            DAL.T_Base_ChatOnline dalChatOnline = new DAL.T_Base_ChatOnline();
            string sql = "SenderName in (" + contacksName +
                ") and ReceiverName='" + nickName
                + "' or SenderName='" + nickName
                + "' and ReceiverName in (" + contacksName + ") order by CreateTime";
            List<Model.T_Base_ChatOnline> listSumChatOnline = dalChatOnline.GetModelList(sql);

            //联系人数组
            contacksName = contacksName.Replace("'", "");
            string[] contacksNameArray = contacksName.Split(',');
            //联系人数目
            int contacksLength = contacksNameArray.Length;
            //聊天记录数目
            int chatOnlineLength = listSumChatOnline.Count;

            //新建聊天记录数据保存列表
            List<Model.T_Base_ListContackChats> listChat = new List<Model.T_Base_ListContackChats>();

            //根据contackName将数据分组
            for (int i = 0; i < contacksLength; i++)
            {
                //获取联系人名 和 聊天记录列表
                string contackName = contacksNameArray[i];
                List<Model.T_Base_ChatOnline> newListChatOnline = new List<Model.T_Base_ChatOnline>();
                for (int j = 0; j < chatOnlineLength; j++)
                {
                    Model.T_Base_ChatOnline newChatOnline = listSumChatOnline[j];
                    if (newChatOnline.SenderName.Equals(contackName)
                        || newChatOnline.ReceiverName.Equals(contackName))
                    {
                        newListChatOnline.Add(newChatOnline);
                    }
                }
                //保存获取的数据
                Model.T_Base_ListContackChats listContackChats = new Model.T_Base_ListContackChats();
                listContackChats.ListChatOnline = newListChatOnline;
                listContackChats.ContackName = contackName;
                listChat.Add(listContackChats);
            }

            //json格式的联系人列表数据
            string result = JsonConvert.SerializeObject(listChat);

            Response.Write(callback + "(" + result + ")");
        }

        //改变是否阅读状态
        public void ChangeChatReadSign()
        {
            string callback = Request.QueryString["callback"];
            string contackName = Request.QueryString["contackName"];
            string myName = Request.QueryString["myName"];

            //发送方和接收方的名字 更改数据
            DAL.T_Base_ChatOnline dalChatOnline = new DAL.T_Base_ChatOnline();
            dalChatOnline.UpdateReadSign(contackName, myName);

            var msg = new { code = 1 };
            string result = new JavaScriptSerializer().Serialize(msg);
            Response.Write(callback + "(" + result + ")");
        }
    }
}