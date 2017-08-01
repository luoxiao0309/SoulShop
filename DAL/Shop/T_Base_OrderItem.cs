/**  版本信息模板在安装目录下，可自行修改。
* T_Base_OrderItem.cs
*
* 功 能： N/A
* 类 名： T_Base_OrderItem
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/8/1 11:47:44   N/A    初版
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
	/// 数据访问类:T_Base_OrderItem
	/// </summary>
	public partial class T_Base_OrderItem
	{
		public T_Base_OrderItem()
		{}
		#region  BasicMethod

		/// <summary>
		/// 得到最大ID
		/// </summary>
		public int GetMaxId()
		{
		return DbHelperSQL.GetMaxID("OrderHeadID", "T_Base_OrderItem"); 
		}

		/// <summary>
		/// 是否存在该记录
		/// </summary>
		public bool Exists(int OrderHeadID,int ShopProductID)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select count(1) from T_Base_OrderItem");
			strSql.Append(" where OrderHeadID=@OrderHeadID and ShopProductID=@ShopProductID ");
			SqlParameter[] parameters = {
					new SqlParameter("@OrderHeadID", SqlDbType.Int,4),
					new SqlParameter("@ShopProductID", SqlDbType.Int,4)			};
			parameters[0].Value = OrderHeadID;
			parameters[1].Value = ShopProductID;

			return DbHelperSQL.Exists(strSql.ToString(),parameters);
		}


		/// <summary>
		/// 增加一条数据
		/// </summary>
		public bool Add(SoulShop.Model.T_Base_OrderItem model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("insert into T_Base_OrderItem(");
			strSql.Append("OrderHeadID,ShopProductID,Amount,Discount)");
			strSql.Append(" values (");
			strSql.Append("@OrderHeadID,@ShopProductID,@Amount,@Discount)");
			SqlParameter[] parameters = {
					new SqlParameter("@OrderHeadID", SqlDbType.Int,4),
					new SqlParameter("@ShopProductID", SqlDbType.Int,4),
					new SqlParameter("@Amount", SqlDbType.Int,4),
					new SqlParameter("@Discount", SqlDbType.Decimal,9)};
			parameters[0].Value = model.OrderHeadID;
			parameters[1].Value = model.ShopProductID;
			parameters[2].Value = model.Amount;
			parameters[3].Value = model.Discount;

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
		public bool Update(SoulShop.Model.T_Base_OrderItem model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("update T_Base_OrderItem set ");
			strSql.Append("Amount=@Amount,");
			strSql.Append("Discount=@Discount");
			strSql.Append(" where OrderHeadID=@OrderHeadID and ShopProductID=@ShopProductID ");
			SqlParameter[] parameters = {
					new SqlParameter("@Amount", SqlDbType.Int,4),
					new SqlParameter("@Discount", SqlDbType.Decimal,9),
					new SqlParameter("@OrderHeadID", SqlDbType.Int,4),
					new SqlParameter("@ShopProductID", SqlDbType.Int,4)};
			parameters[0].Value = model.Amount;
			parameters[1].Value = model.Discount;
			parameters[2].Value = model.OrderHeadID;
			parameters[3].Value = model.ShopProductID;

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
		public bool Delete(int OrderHeadID,int ShopProductID)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("delete from T_Base_OrderItem ");
			strSql.Append(" where OrderHeadID=@OrderHeadID and ShopProductID=@ShopProductID ");
			SqlParameter[] parameters = {
					new SqlParameter("@OrderHeadID", SqlDbType.Int,4),
					new SqlParameter("@ShopProductID", SqlDbType.Int,4)			};
			parameters[0].Value = OrderHeadID;
			parameters[1].Value = ShopProductID;

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
		public SoulShop.Model.T_Base_OrderItem GetModel(int OrderHeadID,int ShopProductID)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select  top 1 OrderHeadID,ShopProductID,Amount,Discount from T_Base_OrderItem ");
			strSql.Append(" where OrderHeadID=@OrderHeadID and ShopProductID=@ShopProductID ");
			SqlParameter[] parameters = {
					new SqlParameter("@OrderHeadID", SqlDbType.Int,4),
					new SqlParameter("@ShopProductID", SqlDbType.Int,4)			};
			parameters[0].Value = OrderHeadID;
			parameters[1].Value = ShopProductID;

			SoulShop.Model.T_Base_OrderItem model=new SoulShop.Model.T_Base_OrderItem();
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
		public SoulShop.Model.T_Base_OrderItem DataRowToModel(DataRow row)
		{
			SoulShop.Model.T_Base_OrderItem model=new SoulShop.Model.T_Base_OrderItem();
			if (row != null)
			{
				if(row["OrderHeadID"]!=null && row["OrderHeadID"].ToString()!="")
				{
					model.OrderHeadID=int.Parse(row["OrderHeadID"].ToString());
				}
				if(row["ShopProductID"]!=null && row["ShopProductID"].ToString()!="")
				{
					model.ShopProductID=int.Parse(row["ShopProductID"].ToString());
				}
				if(row["Amount"]!=null && row["Amount"].ToString()!="")
				{
					model.Amount=int.Parse(row["Amount"].ToString());
				}
				if(row["Discount"]!=null && row["Discount"].ToString()!="")
				{
					model.Discount=decimal.Parse(row["Discount"].ToString());
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
			strSql.Append("select OrderHeadID,ShopProductID,Amount,Discount ");
			strSql.Append(" FROM T_Base_OrderItem ");
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
			strSql.Append(" OrderHeadID,ShopProductID,Amount,Discount ");
			strSql.Append(" FROM T_Base_OrderItem ");
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
			strSql.Append("select count(1) FROM T_Base_OrderItem ");
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
			strSql.Append(")AS Row, T.*  from T_Base_OrderItem T ");
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
			parameters[0].Value = "T_Base_OrderItem";
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

