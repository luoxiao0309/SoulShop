using Maticsoft.DBUtility;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.DAL
{
    public partial class T_Product_Comment
    {
        //根据条件获取对象列表
        public List<Model.T_Product_Comment> GetModelList(string strWhere)
        {
            DAL.T_Product_Comment dalProductComment = new DAL.T_Product_Comment();
            DataSet ds = dalProductComment.GetList(strWhere);

            List<Model.T_Product_Comment> listProductComment = new List<Model.T_Product_Comment>();

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                listProductComment.Add(dalProductComment.DataRowToModel(dr));
            }

            return listProductComment;
        }

        public DataSet GetListByView(string strWhere)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select BuyerID,OrderHeadID,ShopProductID,Contents,CreateTime,StarLevel,NickName,HeadIcon ");
            strSql.Append(" FROM V_ProductComment_Buyer ");
            if (strWhere.Trim() != "")
            {
                strSql.Append(" where " + strWhere);
            }
            return DbHelperSQL.Query(strSql.ToString());
        }

        public List<Model.T_Product_Comment> GetModelListByView(string strWhere)
        {
            DAL.T_Product_Comment dalProductComment = new DAL.T_Product_Comment();
            DataSet ds = dalProductComment.GetListByView(strWhere);

            List<Model.T_Product_Comment> listProductComment = new List<Model.T_Product_Comment>();

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                Model.T_Product_Comment productComment = new Model.T_Product_Comment();
                productComment.BuyerID = Convert.ToString(dr["BuyerID"]);
                productComment.OrderHeadID = Convert.ToInt32(dr["OrderHeadID"]);
                productComment.ShopProductID = Convert.ToInt32(dr["ShopProductID"]);
                productComment.Contents = Convert.ToString(dr["Contents"]);
                productComment.CreateTime = Convert.ToDateTime(dr["CreateTime"]);
                productComment.StarLevel = Convert.ToInt16(dr["StarLevel"]);
                productComment.NickName = Convert.ToString(dr["NickName"]);
                productComment.HeadIcon = Convert.ToString(dr["HeadIcon"]);

                listProductComment.Add(productComment);
            }

            return listProductComment;
        }
    }
}
