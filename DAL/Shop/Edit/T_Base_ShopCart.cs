using Maticsoft.DBUtility;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.DAL
{
    public partial class T_Base_ShopCart
    {
        public List<Model.T_Base_ShopCart> GetModelList(string strWhere)
        {
            DAL.T_Base_ShopCart dalShopCart = new DAL.T_Base_ShopCart();
            DataSet ds = dalShopCart.GetList(strWhere);

            List<Model.T_Base_ShopCart> listShopCart = new List<Model.T_Base_ShopCart>();

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                listShopCart.Add(dalShopCart.DataRowToModel(dr));
            }

            return listShopCart;
        }

        //批量删除
        public bool DeleteList(string BuyerID, string ShopProductIDs)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("delete from T_Base_ShopCart ");
            strSql.Append(" where BuyerID=@BuyerID and ShopProductID in (" + ShopProductIDs + ") ");
            SqlParameter[] parameters = {
                    new SqlParameter("@BuyerID", SqlDbType.NVarChar,20)     };
            parameters[0].Value = BuyerID;

            int rows = DbHelperSQL.ExecuteSql(strSql.ToString(), parameters);
            if (rows > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
