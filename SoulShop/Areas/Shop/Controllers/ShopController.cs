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

            return Json(new { result = result, hasNumber = hasNumber + getNumber });
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
            else if(saleType == 1)/*活动已开始*/
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

            return Json(new { result = result, hasNumber = hasNumber + getNumber });
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

            //根据店铺商品的ID获取商品评论
            DAL.T_Product_Comment dalProductComment = new DAL.T_Product_Comment();
            List<Model.T_Product_Comment> listProductComment;
            listProductComment = dalProductComment.GetModelListByView("ShopProductID=" + shopProduct.ID);

            string result = JsonConvert.SerializeObject(listProductComment);

            return Json(new { result = result });
        }

        /*5.购物篮页*/
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
            //完整的权限设置
            Model.T_Base_Buyer buyer = (Model.T_Base_Buyer)Session["buyer"];
            if (buyer == null)//如果buyer为null 说明没有用户登录
            {
                return Json(new { code = 0 });//0为无用户登录
            }

            Model.T_Base_ShopCart shopCartItem = new Model.T_Base_ShopCart();
            shopCartItem.ShopProductID = shopProductID;
            shopCartItem.Amount = amount;
            shopCartItem.CreateTime = DateTime.Now;
            shopCartItem.BuyerID = buyer.ID;

            DAL.T_Base_ShopCart dalShopCar = new DAL.T_Base_ShopCart();
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

        /*6.订单生成页*/
        public ActionResult Order()
        {
            return View();
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