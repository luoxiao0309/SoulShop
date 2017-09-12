using Maticsoft.DBUtility;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.DAL
{
    public partial class T_Base_SaleProduct
    {
        //分页获取数据 根据视图
        public DataSet GetListByPageByView(string strWhere, string orderby, int startIndex, int endIndex)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("SELECT * FROM ( ");
            strSql.Append(" SELECT ROW_NUMBER() OVER (");
            if (!string.IsNullOrEmpty(orderby.Trim()))
            {
                strSql.Append("order by T." + orderby);
            }
            else
            {
                strSql.Append("order by T.ID desc");
            }
            strSql.Append(")AS Row, T.*  from V_SaleShopProduct_ShopProduct_Product T ");
            if (!string.IsNullOrEmpty(strWhere.Trim()))
            {
                strSql.Append(" WHERE " + strWhere);
            }
            strSql.Append(" ) TT");
            strSql.AppendFormat(" WHERE TT.Row between {0} and {1}", startIndex, endIndex);
            return DbHelperSQL.Query(strSql.ToString());
        }

        //分页获取SaleProductList Model
        public List<Model.T_Base_SaleProduct> GetModelListByPageByView(string strWhere, string orderby, int startIndex, int endIndex)
        {
            DAL.T_Base_SaleProduct dalSaleProduct = new DAL.T_Base_SaleProduct();
            DataSet ds = dalSaleProduct.GetListByPageByView(strWhere, orderby, startIndex, endIndex);

            List<Model.T_Base_SaleProduct> listSaleProduct = new List<Model.T_Base_SaleProduct>();

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                //活动商品数据
                Model.T_Base_SaleProduct saleProduct = new Model.T_Base_SaleProduct();
                saleProduct.StartTime = Convert.ToDateTime(dr["StartTime"]);
                saleProduct.EndTime = Convert.ToDateTime(dr["EndTime"]);
                saleProduct.Discount = Convert.ToDecimal(dr["Discount"]);

                //1.店铺商品数据
                Model.T_Base_ShopProduct shopProduct = new Model.T_Base_ShopProduct();
                shopProduct.ID = Convert.ToInt32(dr["ID"]);
                shopProduct.Size = Convert.ToString(dr["Size"]);
                shopProduct.Color = Convert.ToString(dr["Color"]);
                shopProduct.Stock = Convert.ToInt32(dr["Stock"]);
                shopProduct.Price = Convert.ToDecimal(dr["Pirce"]);
                shopProduct.MonthlySale = Convert.ToInt32(dr["MonthlySale"]);
                shopProduct.ShopID = Convert.ToString(dr["ShopID"]);
                shopProduct.ProductID = Convert.ToInt32(dr["ProductID"]);

                //2.源商品数据
                Model.T_Base_Product orProduct = new Model.T_Base_Product();
                orProduct.ID = (Int32)shopProduct.ProductID;
                orProduct.Name = Convert.ToString(dr["Name"]);
                orProduct.Description = Convert.ToString(dr["Description"]);
                orProduct.AreaID = Convert.ToInt32(dr["AreaID"]);
                orProduct.ProductCategoryID = Convert.ToInt32(dr["ProductCategoryID"]);
                shopProduct.OrProduct = orProduct;

                //3.图片数据
                DAL.T_ShopProduct_Pic dalSProductPic = new DAL.T_ShopProduct_Pic(); //根据上架商品ID获得图片
                shopProduct.PicList = dalSProductPic.GetModelList("ShopProductID=" + shopProduct.ID); //保存图片列表数据

                //4.特价商品数据保存
                saleProduct.ShopProduct = shopProduct;

                listSaleProduct.Add(saleProduct);
            }

            return listSaleProduct;
        }
    }
}
