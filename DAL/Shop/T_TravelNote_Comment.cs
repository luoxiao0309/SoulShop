/**  版本信息模板在安装目录下，可自行修改。
* T_TravelNote_Comment.cs
*
* 功 能： N/A
* 类 名： T_TravelNote_Comment
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/14 17:29:37   N/A    初版
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
	/// 数据访问类:T_TravelNote_Comment
	/// </summary>
	public partial class T_TravelNote_Comment
	{
		public T_TravelNote_Comment()
		{}
		#region  BasicMethod

		/// <summary>
		/// 得到最大ID
		/// </summary>
		public int GetMaxId()
		{
		return DbHelperSQL.GetMaxID("ID", "T_TravelNote_Comment"); 
		}

		/// <summary>
		/// 是否存在该记录
		/// </summary>
		public bool Exists(int ID)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select count(1) from T_TravelNote_Comment");
			strSql.Append(" where ID=@ID");
			SqlParameter[] parameters = {
					new SqlParameter("@ID", SqlDbType.Int,4)
			};
			parameters[0].Value = ID;

			return DbHelperSQL.Exists(strSql.ToString(),parameters);
		}


		/// <summary>
		/// 增加一条数据
		/// </summary>
		public int Add(SoulShop.Model.T_TravelNote_Comment model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("insert into T_TravelNote_Comment(");
			strSql.Append("TravelNoteID,BuyerID,Contents,CreateTime)");
			strSql.Append(" values (");
			strSql.Append("@TravelNoteID,@BuyerID,@Contents,@CreateTime)");
			strSql.Append(";select @@IDENTITY");
			SqlParameter[] parameters = {
					new SqlParameter("@TravelNoteID", SqlDbType.Int,4),
					new SqlParameter("@BuyerID", SqlDbType.NVarChar,20),
					new SqlParameter("@Contents", SqlDbType.NVarChar,200),
					new SqlParameter("@CreateTime", SqlDbType.DateTime)};
			parameters[0].Value = model.TravelNoteID;
			parameters[1].Value = model.BuyerID;
			parameters[2].Value = model.Contents;
			parameters[3].Value = model.CreateTime;

			object obj = DbHelperSQL.GetSingle(strSql.ToString(),parameters);
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
		/// 更新一条数据
		/// </summary>
		public bool Update(SoulShop.Model.T_TravelNote_Comment model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("update T_TravelNote_Comment set ");
			strSql.Append("TravelNoteID=@TravelNoteID,");
			strSql.Append("BuyerID=@BuyerID,");
			strSql.Append("Contents=@Contents,");
			strSql.Append("CreateTime=@CreateTime");
			strSql.Append(" where ID=@ID");
			SqlParameter[] parameters = {
					new SqlParameter("@TravelNoteID", SqlDbType.Int,4),
					new SqlParameter("@BuyerID", SqlDbType.NVarChar,20),
					new SqlParameter("@Contents", SqlDbType.NVarChar,200),
					new SqlParameter("@CreateTime", SqlDbType.DateTime),
					new SqlParameter("@ID", SqlDbType.Int,4)};
			parameters[0].Value = model.TravelNoteID;
			parameters[1].Value = model.BuyerID;
			parameters[2].Value = model.Contents;
			parameters[3].Value = model.CreateTime;
			parameters[4].Value = model.ID;

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
		public bool Delete(int ID)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("delete from T_TravelNote_Comment ");
			strSql.Append(" where ID=@ID");
			SqlParameter[] parameters = {
					new SqlParameter("@ID", SqlDbType.Int,4)
			};
			parameters[0].Value = ID;

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
		/// 批量删除数据
		/// </summary>
		public bool DeleteList(string IDlist )
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("delete from T_TravelNote_Comment ");
			strSql.Append(" where ID in ("+IDlist + ")  ");
			int rows=DbHelperSQL.ExecuteSql(strSql.ToString());
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
		public SoulShop.Model.T_TravelNote_Comment GetModel(int ID)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select  top 1 TravelNoteID,BuyerID,Contents,CreateTime,ID from T_TravelNote_Comment ");
			strSql.Append(" where ID=@ID");
			SqlParameter[] parameters = {
					new SqlParameter("@ID", SqlDbType.Int,4)
			};
			parameters[0].Value = ID;

			SoulShop.Model.T_TravelNote_Comment model=new SoulShop.Model.T_TravelNote_Comment();
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
		public SoulShop.Model.T_TravelNote_Comment DataRowToModel(DataRow row)
		{
			SoulShop.Model.T_TravelNote_Comment model=new SoulShop.Model.T_TravelNote_Comment();
			if (row != null)
			{
				if(row["TravelNoteID"]!=null && row["TravelNoteID"].ToString()!="")
				{
					model.TravelNoteID=int.Parse(row["TravelNoteID"].ToString());
				}
				if(row["BuyerID"]!=null)
				{
					model.BuyerID=row["BuyerID"].ToString();
				}
				if(row["Contents"]!=null)
				{
					model.Contents=row["Contents"].ToString();
				}
				if(row["CreateTime"]!=null && row["CreateTime"].ToString()!="")
				{
					model.CreateTime=DateTime.Parse(row["CreateTime"].ToString());
				}
				if(row["ID"]!=null && row["ID"].ToString()!="")
				{
					model.ID=int.Parse(row["ID"].ToString());
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
			strSql.Append("select TravelNoteID,BuyerID,Contents,CreateTime,ID ");
			strSql.Append(" FROM T_TravelNote_Comment ");
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
			strSql.Append(" TravelNoteID,BuyerID,Contents,CreateTime,ID ");
			strSql.Append(" FROM T_TravelNote_Comment ");
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
			strSql.Append("select count(1) FROM T_TravelNote_Comment ");
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
				strSql.Append("order by T.ID desc");
			}
			strSql.Append(")AS Row, T.*  from T_TravelNote_Comment T ");
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
			parameters[0].Value = "T_TravelNote_Comment";
			parameters[1].Value = "ID";
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

