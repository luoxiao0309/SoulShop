/**  版本信息模板在安装目录下，可自行修改。
* T_Product_Comment.cs
*
* 功 能： N/A
* 类 名： T_Product_Comment
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/14 17:29:34   N/A    初版
*
* Copyright (c) 2012 Maticsoft Corporation. All rights reserved.
*┌──────────────────────────────────┐
*│　此技术信息为本公司机密信息，未经本公司书面同意禁止向第三方披露．　│
*│　版权所有：动软卓越（北京）科技有限公司　　　　　　　　　　　　　　│
*└──────────────────────────────────┘
*/
using System;
using System.Data;
using System.Text;
using System.Data.SqlClient;
using Maticsoft.DBUtility;//Please add references
namespace SoulShop.DAL
{
	/// <summary>
	/// 数据访问类:T_Product_Comment
	/// </summary>
	public partial class T_Product_Comment
	{
		public T_Product_Comment()
		{}
		#region  BasicMethod

		/// <summary>
		/// 得到最大ID
		/// </summary>
		public int GetMaxId()
		{
		return DbHelperSQL.GetMaxID("OrderHeadID", "T_Product_Comment"); 
		}

		/// <summary>
		/// 是否存在该记录
		/// </summary>
		public bool Exists(string BuyerID,int OrderHeadID,int ShopProductID)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select count(1) from T_Product_Comment");
			strSql.Append(" where BuyerID=@BuyerID and OrderHeadID=@OrderHeadID and ShopProductID=@ShopProductID ");
			SqlParameter[] parameters = {
					new SqlParameter("@BuyerID", SqlDbType.NVarChar,20),
					new SqlParameter("@OrderHeadID", SqlDbType.Int,4),
					new SqlParameter("@ShopProductID", SqlDbType.Int,4)			};
			parameters[0].Value = BuyerID;
			parameters[1].Value = OrderHeadID;
			parameters[2].Value = ShopProductID;

			return DbHelperSQL.Exists(strSql.ToString(),parameters);
		}


		/// <summary>
		/// 增加一条数据
		/// </summary>
		public bool Add(SoulShop.Model.T_Product_Comment model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("insert into T_Product_Comment(");
			strSql.Append("BuyerID,OrderHeadID,ShopProductID,Contents,CreateTime,StarLevel)");
			strSql.Append(" values (");
			strSql.Append("@BuyerID,@OrderHeadID,@ShopProductID,@Contents,@CreateTime,@StarLevel)");
			SqlParameter[] parameters = {
					new SqlParameter("@BuyerID", SqlDbType.NVarChar,20),
					new SqlParameter("@OrderHeadID", SqlDbType.Int,4),
					new SqlParameter("@ShopProductID", SqlDbType.Int,4),
					new SqlParameter("@Contents", SqlDbType.NVarChar,200),
					new SqlParameter("@CreateTime", SqlDbType.DateTime),
					new SqlParameter("@StarLevel", SqlDbType.Int,4)};
			parameters[0].Value = model.BuyerID;
			parameters[1].Value = model.OrderHeadID;
			parameters[2].Value = model.ShopProductID;
			parameters[3].Value = model.Contents;
			parameters[4].Value = model.CreateTime;
			parameters[5].Value = model.StarLevel;

			int rows=DbHelperSQL.ExecuteSql(strSql.ToString(),parameters);
			if (rows > 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		/// <summary>
		/// 更新一条数据
		/// </summary>
		public bool Update(SoulShop.Model.T_Product_Comment model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("update T_Product_Comment set ");
			strSql.Append("Contents=@Contents,");
			strSql.Append("CreateTime=@CreateTime,");
			strSql.Append("StarLevel=@StarLevel");
			strSql.Append(" where BuyerID=@BuyerID and OrderHeadID=@OrderHeadID and ShopProductID=@ShopProductID ");
			SqlParameter[] parameters = {
					new SqlParameter("@Contents", SqlDbType.NVarChar,200),
					new SqlParameter("@CreateTime", SqlDbType.DateTime),
					new SqlParameter("@StarLevel", SqlDbType.Int,4),
					new SqlParameter("@BuyerID", SqlDbType.NVarChar,20),
					new SqlParameter("@OrderHeadID", SqlDbType.Int,4),
					new SqlParameter("@ShopProductID", SqlDbType.Int,4)};
			parameters[0].Value = model.Contents;
			parameters[1].Value = model.CreateTime;
			parameters[2].Value = model.StarLevel;
			parameters[3].Value = model.BuyerID;
			parameters[4].Value = model.OrderHeadID;
			parameters[5].Value = model.ShopProductID;

			int rows=DbHelperSQL.ExecuteSql(strSql.ToString(),parameters);
			if (rows > 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		/// <summary>
		/// 删除一条数据
		/// </summary>
		public bool Delete(string BuyerID,int OrderHeadID,int ShopProductID)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("delete from T_Product_Comment ");
			strSql.Append(" where BuyerID=@BuyerID and OrderHeadID=@OrderHeadID and ShopProductID=@ShopProductID ");
			SqlParameter[] parameters = {
					new SqlParameter("@BuyerID", SqlDbType.NVarChar,20),
					new SqlParameter("@OrderHeadID", SqlDbType.Int,4),
					new SqlParameter("@ShopProductID", SqlDbType.Int,4)			};
			parameters[0].Value = BuyerID;
			parameters[1].Value = OrderHeadID;
			parameters[2].Value = ShopProductID;

			int rows=DbHelperSQL.ExecuteSql(strSql.ToString(),parameters);
			if (rows > 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}


		/// <summary>
		/// 得到一个对象实体
		/// </summary>
		public SoulShop.Model.T_Product_Comment GetModel(string BuyerID,int OrderHeadID,int ShopProductID)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select  top 1 BuyerID,OrderHeadID,ShopProductID,Contents,CreateTime,StarLevel from T_Product_Comment ");
			strSql.Append(" where BuyerID=@BuyerID and OrderHeadID=@OrderHeadID and ShopProductID=@ShopProductID ");
			SqlParameter[] parameters = {
					new SqlParameter("@BuyerID", SqlDbType.NVarChar,20),
					new SqlParameter("@OrderHeadID", SqlDbType.Int,4),
					new SqlParameter("@ShopProductID", SqlDbType.Int,4)			};
			parameters[0].Value = BuyerID;
			parameters[1].Value = OrderHeadID;
			parameters[2].Value = ShopProductID;

			SoulShop.Model.T_Product_Comment model=new SoulShop.Model.T_Product_Comment();
			DataSet ds=DbHelperSQL.Query(strSql.ToString(),parameters);
			if(ds.Tables[0].Rows.Count>0)
			{
				return DataRowToModel(ds.Tables[0].Rows[0]);
			}
			else
			{
				return null;
			}
		}


		/// <summary>
		/// 得到一个对象实体
		/// </summary>
		public SoulShop.Model.T_Product_Comment DataRowToModel(DataRow row)
		{
			SoulShop.Model.T_Product_Comment model=new SoulShop.Model.T_Product_Comment();
			if (row != null)
			{
				if(row["BuyerID"]!=null)
				{
					model.BuyerID=row["BuyerID"].ToString();
				}
				if(row["OrderHeadID"]!=null && row["OrderHeadID"].ToString()!="")
				{
					model.OrderHeadID=int.Parse(row["OrderHeadID"].ToString());
				}
				if(row["ShopProductID"]!=null && row["ShopProductID"].ToString()!="")
				{
					model.ShopProductID=int.Parse(row["ShopProductID"].ToString());
				}
				if(row["Contents"]!=null)
				{
					model.Contents=row["Contents"].ToString();
				}
				if(row["CreateTime"]!=null && row["CreateTime"].ToString()!="")
				{
					model.CreateTime=DateTime.Parse(row["CreateTime"].ToString());
				}
				if(row["StarLevel"]!=null && row["StarLevel"].ToString()!="")
				{
					model.StarLevel=int.Parse(row["StarLevel"].ToString());
				}
			}
			return model;
		}

		/// <summary>
		/// 获得数据列表
		/// </summary>
		public DataSet GetList(string strWhere)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select BuyerID,OrderHeadID,ShopProductID,Contents,CreateTime,StarLevel ");
			strSql.Append(" FROM T_Product_Comment ");
			if(strWhere.Trim()!="")
			{
				strSql.Append(" where "+strWhere);
			}
			return DbHelperSQL.Query(strSql.ToString());
		}

		/// <summary>
		/// 获得前几行数据
		/// </summary>
		public DataSet GetList(int Top,string strWhere,string filedOrder)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select ");
			if(Top>0)
			{
				strSql.Append(" top "+Top.ToString());
			}
			strSql.Append(" BuyerID,OrderHeadID,ShopProductID,Contents,CreateTime,StarLevel ");
			strSql.Append(" FROM T_Product_Comment ");
			if(strWhere.Trim()!="")
			{
				strSql.Append(" where "+strWhere);
			}
			strSql.Append(" order by " + filedOrder);
			return DbHelperSQL.Query(strSql.ToString());
		}

		/// <summary>
		/// 获取记录总数
		/// </summary>
		public int GetRecordCount(string strWhere)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select count(1) FROM T_Product_Comment ");
			if(strWhere.Trim()!="")
			{
				strSql.Append(" where "+strWhere);
			}
			object obj = DbHelperSQL.GetSingle(strSql.ToString());
			if (obj == null)
			{
				return 0;
			}
			else
			{
				return Convert.ToInt32(obj);
			}
		}
		/// <summary>
		/// 分页获取数据列表
		/// </summary>
		public DataSet GetListByPage(string strWhere, string orderby, int startIndex, int endIndex)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("SELECT * FROM ( ");
			strSql.Append(" SELECT ROW_NUMBER() OVER (");
			if (!string.IsNullOrEmpty(orderby.Trim()))
			{
				strSql.Append("order by T." + orderby );
			}
			else
			{
				strSql.Append("order by T.ShopProductID desc");
			}
			strSql.Append(")AS Row, T.*  from T_Product_Comment T ");
			if (!string.IsNullOrEmpty(strWhere.Trim()))
			{
				strSql.Append(" WHERE " + strWhere);
			}
			strSql.Append(" ) TT");
			strSql.AppendFormat(" WHERE TT.Row between {0} and {1}", startIndex, endIndex);
			return DbHelperSQL.Query(strSql.ToString());
		}

		/*
		/// <summary>
		/// 分页获取数据列表
		/// </summary>
		public DataSet GetList(int PageSize,int PageIndex,string strWhere)
		{
			SqlParameter[] parameters = {
					new SqlParameter("@tblName", SqlDbType.VarChar, 255),
					new SqlParameter("@fldName", SqlDbType.VarChar, 255),
					new SqlParameter("@PageSize", SqlDbType.Int),
					new SqlParameter("@PageIndex", SqlDbType.Int),
					new SqlParameter("@IsReCount", SqlDbType.Bit),
					new SqlParameter("@OrderType", SqlDbType.Bit),
					new SqlParameter("@strWhere", SqlDbType.VarChar,1000),
					};
			parameters[0].Value = "T_Product_Comment";
			parameters[1].Value = "ShopProductID";
			parameters[2].Value = PageSize;
			parameters[3].Value = PageIndex;
			parameters[4].Value = 0;
			parameters[5].Value = 0;
			parameters[6].Value = strWhere;	
			return DbHelperSQL.RunProcedure("UP_GetRecordByPage",parameters,"ds");
		}*/

		#endregion  BasicMethod
		#region  ExtensionMethod

		#endregion  ExtensionMethod
	}
}

