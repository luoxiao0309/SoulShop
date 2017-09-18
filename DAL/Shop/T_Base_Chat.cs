/**  版本信息模板在安装目录下，可自行修改。
* T_Base_Chat.cs
*
* 功 能： N/A
* 类 名： T_Base_Chat
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/14 17:29:19   N/A    初版
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
	/// 数据访问类:T_Base_Chat
	/// </summary>
	public partial class T_Base_Chat
	{
		public T_Base_Chat()
		{}
		#region  BasicMethod

		/// <summary>
		/// 得到最大ID
		/// </summary>
		public int GetMaxId()
		{
		return DbHelperSQL.GetMaxID("ID", "T_Base_Chat"); 
		}

		/// <summary>
		/// 是否存在该记录
		/// </summary>
		public bool Exists(int ID)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select count(1) from T_Base_Chat");
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
		public int Add(SoulShop.Model.T_Base_Chat model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("insert into T_Base_Chat(");
			strSql.Append("BuyerID,ShopAdminID,Contents,CreateTime,Sender,IsChecked)");
			strSql.Append(" values (");
			strSql.Append("@BuyerID,@ShopAdminID,@Contents,@CreateTime,@Sender,@IsChecked)");
			strSql.Append(";select @@IDENTITY");
			SqlParameter[] parameters = {
					new SqlParameter("@BuyerID", SqlDbType.NVarChar,20),
					new SqlParameter("@ShopAdminID", SqlDbType.NVarChar,20),
					new SqlParameter("@Contents", SqlDbType.Text),
					new SqlParameter("@CreateTime", SqlDbType.DateTime),
					new SqlParameter("@Sender", SqlDbType.NChar,10),
					new SqlParameter("@IsChecked", SqlDbType.Int,4)};
			parameters[0].Value = model.BuyerID;
			parameters[1].Value = model.ShopAdminID;
			parameters[2].Value = model.Contents;
			parameters[3].Value = model.CreateTime;
			parameters[4].Value = model.Sender;
			parameters[5].Value = model.IsChecked;

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
		public bool Update(SoulShop.Model.T_Base_Chat model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("update T_Base_Chat set ");
			strSql.Append("BuyerID=@BuyerID,");
			strSql.Append("ShopAdminID=@ShopAdminID,");
			strSql.Append("Contents=@Contents,");
			strSql.Append("CreateTime=@CreateTime,");
			strSql.Append("Sender=@Sender,");
			strSql.Append("IsChecked=@IsChecked");
			strSql.Append(" where ID=@ID");
			SqlParameter[] parameters = {
					new SqlParameter("@BuyerID", SqlDbType.NVarChar,20),
					new SqlParameter("@ShopAdminID", SqlDbType.NVarChar,20),
					new SqlParameter("@Contents", SqlDbType.Text),
					new SqlParameter("@CreateTime", SqlDbType.DateTime),
					new SqlParameter("@Sender", SqlDbType.NChar,10),
					new SqlParameter("@IsChecked", SqlDbType.Int,4),
					new SqlParameter("@ID", SqlDbType.Int,4)};
			parameters[0].Value = model.BuyerID;
			parameters[1].Value = model.ShopAdminID;
			parameters[2].Value = model.Contents;
			parameters[3].Value = model.CreateTime;
			parameters[4].Value = model.Sender;
			parameters[5].Value = model.IsChecked;
			parameters[6].Value = model.ID;

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
			strSql.Append("delete from T_Base_Chat ");
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
			strSql.Append("delete from T_Base_Chat ");
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
		public SoulShop.Model.T_Base_Chat GetModel(int ID)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select  top 1 BuyerID,ShopAdminID,Contents,CreateTime,Sender,ID,IsChecked from T_Base_Chat ");
			strSql.Append(" where ID=@ID");
			SqlParameter[] parameters = {
					new SqlParameter("@ID", SqlDbType.Int,4)
			};
			parameters[0].Value = ID;

			SoulShop.Model.T_Base_Chat model=new SoulShop.Model.T_Base_Chat();
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
		public SoulShop.Model.T_Base_Chat DataRowToModel(DataRow row)
		{
			SoulShop.Model.T_Base_Chat model=new SoulShop.Model.T_Base_Chat();
			if (row != null)
			{
				if(row["BuyerID"]!=null)
				{
					model.BuyerID=row["BuyerID"].ToString();
				}
				if(row["ShopAdminID"]!=null)
				{
					model.ShopAdminID=row["ShopAdminID"].ToString();
				}
				if(row["Contents"]!=null)
				{
					model.Contents=row["Contents"].ToString();
				}
				if(row["CreateTime"]!=null && row["CreateTime"].ToString()!="")
				{
					model.CreateTime=DateTime.Parse(row["CreateTime"].ToString());
				}
				if(row["Sender"]!=null)
				{
					model.Sender=row["Sender"].ToString();
				}
				if(row["ID"]!=null && row["ID"].ToString()!="")
				{
					model.ID=int.Parse(row["ID"].ToString());
				}
				if(row["IsChecked"]!=null && row["IsChecked"].ToString()!="")
				{
					model.IsChecked=int.Parse(row["IsChecked"].ToString());
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
			strSql.Append("select BuyerID,ShopAdminID,Contents,CreateTime,Sender,ID,IsChecked ");
			strSql.Append(" FROM T_Base_Chat ");
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
			strSql.Append(" BuyerID,ShopAdminID,Contents,CreateTime,Sender,ID,IsChecked ");
			strSql.Append(" FROM T_Base_Chat ");
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
			strSql.Append("select count(1) FROM T_Base_Chat ");
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
			strSql.Append(")AS Row, T.*  from T_Base_Chat T ");
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
			parameters[0].Value = "T_Base_Chat";
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

