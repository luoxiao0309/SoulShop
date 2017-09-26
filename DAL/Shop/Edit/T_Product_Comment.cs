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

        //分页获取评论列表
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
                strSql.Append("order by T.Id desc");
            }
            strSql.Append(")AS Row, T.*  from V_ProductComment_Buyer T ");
            if (!string.IsNullOrEmpty(strWhere.Trim()))
            {
                strSql.Append(" WHERE " + strWhere);
            }
            strSql.Append(" ) TT");
            strSql.AppendFormat(" WHERE TT.Row between {0} and {1}", startIndex, endIndex);
            return DbHelperSQL.Query(strSql.ToString());
        }

        public List<Model.T_Product_Comment> GetModelListByPageByView(string strWhere, string orderby, int startIndex, int endIndex)
        {
            DAL.T_Product_Comment dalProductComment = new DAL.T_Product_Comment();
            DataSet ds = dalProductComment.GetListByPageByView(strWhere, orderby, startIndex, endIndex);

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
