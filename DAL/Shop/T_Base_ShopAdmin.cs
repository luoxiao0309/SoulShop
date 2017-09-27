/**  版本信息模板在安装目录下，可自行修改。
* T_Base_ShopAdmin.cs
*
* 功 能： N/A
* 类 名： T_Base_ShopAdmin
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/27 20:02:49   N/A    初版
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
	/// 数据访问类:T_Base_ShopAdmin
	/// </summary>
	public partial class T_Base_ShopAdmin
	{
		public T_Base_ShopAdmin()
		{}
		#region  BasicMethod

		/// <summary>
		/// 是否存在该记录
		/// </summary>
		public bool Exists(string ShopID,string ID)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select count(1) from T_Base_ShopAdmin");
			strSql.Append(" where ShopID=@ShopID and ID=@ID ");
			SqlParameter[] parameters = {
					new SqlParameter("@ShopID", SqlDbType.NVarChar,50),
					new SqlParameter("@ID", SqlDbType.NVarChar,20)			};
			parameters[0].Value = ShopID;
			parameters[1].Value = ID;

			return DbHelperSQL.Exists(strSql.ToString(),parameters);
		}


		/// <summary>
		/// 增加一条数据
		/// </summary>
		public bool Add(SoulShop.Model.T_Base_ShopAdmin model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("insert into T_Base_ShopAdmin(");
			strSql.Append("ShopID,ID,Password,ShopName,OwnerID,OwnerName,OwnerPhone,OwnerQQ,OwnerAddress,AreaID,Freeze,Checking,HeadIcon)");
			strSql.Append(" values (");
			strSql.Append("@ShopID,@ID,@Password,@ShopName,@OwnerID,@OwnerName,@OwnerPhone,@OwnerQQ,@OwnerAddress,@AreaID,@Freeze,@Checking,@HeadIcon)");
			SqlParameter[] parameters = {
					new SqlParameter("@ShopID", SqlDbType.NVarChar,50),
					new SqlParameter("@ID", SqlDbType.NVarChar,20),
					new SqlParameter("@Password", SqlDbType.NVarChar,20),
					new SqlParameter("@ShopName", SqlDbType.NVarChar,50),
					new SqlParameter("@OwnerID", SqlDbType.NVarChar,20),
					new SqlParameter("@OwnerName", SqlDbType.NVarChar,20),
					new SqlParameter("@OwnerPhone", SqlDbType.NVarChar,20),
					new SqlParameter("@OwnerQQ", SqlDbType.NVarChar,20),
					new SqlParameter("@OwnerAddress", SqlDbType.NVarChar,200),
					new SqlParameter("@AreaID", SqlDbType.Int,4),
					new SqlParameter("@Freeze", SqlDbType.Int,4),
					new SqlParameter("@Checking", SqlDbType.Int,4),
					new SqlParameter("@HeadIcon", SqlDbType.NVarChar,300)};
			parameters[0].Value = model.ShopID;
			parameters[1].Value = model.ID;
			parameters[2].Value = model.Password;
			parameters[3].Value = model.ShopName;
			parameters[4].Value = model.OwnerID;
			parameters[5].Value = model.OwnerName;
			parameters[6].Value = model.OwnerPhone;
			parameters[7].Value = model.OwnerQQ;
			parameters[8].Value = model.OwnerAddress;
			parameters[9].Value = model.AreaID;
			parameters[10].Value = model.Freeze;
			parameters[11].Value = model.Checking;
			parameters[12].Value = model.HeadIcon;

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
		public bool Update(SoulShop.Model.T_Base_ShopAdmin model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("update T_Base_ShopAdmin set ");
			strSql.Append("Password=@Password,");
			strSql.Append("ShopName=@ShopName,");
			strSql.Append("OwnerID=@OwnerID,");
			strSql.Append("OwnerName=@OwnerName,");
			strSql.Append("OwnerPhone=@OwnerPhone,");
			strSql.Append("OwnerQQ=@OwnerQQ,");
			strSql.Append("OwnerAddress=@OwnerAddress,");
			strSql.Append("AreaID=@AreaID,");
			strSql.Append("Freeze=@Freeze,");
			strSql.Append("Checking=@Checking,");
			strSql.Append("HeadIcon=@HeadIcon");
			strSql.Append(" where ShopID=@ShopID and ID=@ID ");
			SqlParameter[] parameters = {
					new SqlParameter("@Password", SqlDbType.NVarChar,20),
					new SqlParameter("@ShopName", SqlDbType.NVarChar,50),
					new SqlParameter("@OwnerID", SqlDbType.NVarChar,20),
					new SqlParameter("@OwnerName", SqlDbType.NVarChar,20),
					new SqlParameter("@OwnerPhone", SqlDbType.NVarChar,20),
					new SqlParameter("@OwnerQQ", SqlDbType.NVarChar,20),
					new SqlParameter("@OwnerAddress", SqlDbType.NVarChar,200),
					new SqlParameter("@AreaID", SqlDbType.Int,4),
					new SqlParameter("@Freeze", SqlDbType.Int,4),
					new SqlParameter("@Checking", SqlDbType.Int,4),
					new SqlParameter("@HeadIcon", SqlDbType.NVarChar,300),
					new SqlParameter("@ShopID", SqlDbType.NVarChar,50),
					new SqlParameter("@ID", SqlDbType.NVarChar,20)};
			parameters[0].Value = model.Password;
			parameters[1].Value = model.ShopName;
			parameters[2].Value = model.OwnerID;
			parameters[3].Value = model.OwnerName;
			parameters[4].Value = model.OwnerPhone;
			parameters[5].Value = model.OwnerQQ;
			parameters[6].Value = model.OwnerAddress;
			parameters[7].Value = model.AreaID;
			parameters[8].Value = model.Freeze;
			parameters[9].Value = model.Checking;
			parameters[10].Value = model.HeadIcon;
			parameters[11].Value = model.ShopID;
			parameters[12].Value = model.ID;

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
		public bool Delete(string ShopID,string ID)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("delete from T_Base_ShopAdmin ");
			strSql.Append(" where ShopID=@ShopID and ID=@ID ");
			SqlParameter[] parameters = {
					new SqlParameter("@ShopID", SqlDbType.NVarChar,50),
					new SqlParameter("@ID", SqlDbType.NVarChar,20)			};
			parameters[0].Value = ShopID;
			parameters[1].Value = ID;

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
		public SoulShop.Model.T_Base_ShopAdmin GetModel(string ShopID,string ID)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select  top 1 ShopID,ID,Password,ShopName,OwnerID,OwnerName,OwnerPhone,OwnerQQ,OwnerAddress,AreaID,Freeze,Checking,HeadIcon from T_Base_ShopAdmin ");
			strSql.Append(" where ShopID=@ShopID and ID=@ID ");
			SqlParameter[] parameters = {
					new SqlParameter("@ShopID", SqlDbType.NVarChar,50),
					new SqlParameter("@ID", SqlDbType.NVarChar,20)			};
			parameters[0].Value = ShopID;
			parameters[1].Value = ID;

			SoulShop.Model.T_Base_ShopAdmin model=new SoulShop.Model.T_Base_ShopAdmin();
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
		public SoulShop.Model.T_Base_ShopAdmin DataRowToModel(DataRow row)
		{
			SoulShop.Model.T_Base_ShopAdmin model=new SoulShop.Model.T_Base_ShopAdmin();
			if (row != null)
			{
				if(row["ShopID"]!=null)
				{
					model.ShopID=row["ShopID"].ToString();
				}
				if(row["ID"]!=null)
				{
					model.ID=row["ID"].ToString();
				}
				if(row["Password"]!=null)
				{
					model.Password=row["Password"].ToString();
				}
				if(row["ShopName"]!=null)
				{
					model.ShopName=row["ShopName"].ToString();
				}
				if(row["OwnerID"]!=null)
				{
					model.OwnerID=row["OwnerID"].ToString();
				}
				if(row["OwnerName"]!=null)
				{
					model.OwnerName=row["OwnerName"].ToString();
				}
				if(row["OwnerPhone"]!=null)
				{
					model.OwnerPhone=row["OwnerPhone"].ToString();
				}
				if(row["OwnerQQ"]!=null)
				{
					model.OwnerQQ=row["OwnerQQ"].ToString();
				}
				if(row["OwnerAddress"]!=null)
				{
					model.OwnerAddress=row["OwnerAddress"].ToString();
				}
				if(row["AreaID"]!=null && row["AreaID"].ToString()!="")
				{
					model.AreaID=int.Parse(row["AreaID"].ToString());
				}
				if(row["Freeze"]!=null && row["Freeze"].ToString()!="")
				{
					model.Freeze=int.Parse(row["Freeze"].ToString());
				}
				if(row["Checking"]!=null && row["Checking"].ToString()!="")
				{
					model.Checking=int.Parse(row["Checking"].ToString());
				}
				if(row["HeadIcon"]!=null)
				{
					model.HeadIcon=row["HeadIcon"].ToString();
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
			strSql.Append("select ShopID,ID,Password,ShopName,OwnerID,OwnerName,OwnerPhone,OwnerQQ,OwnerAddress,AreaID,Freeze,Checking,HeadIcon ");
			strSql.Append(" FROM T_Base_ShopAdmin ");
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
			strSql.Append(" ShopID,ID,Password,ShopName,OwnerID,OwnerName,OwnerPhone,OwnerQQ,OwnerAddress,AreaID,Freeze,Checking,HeadIcon ");
			strSql.Append(" FROM T_Base_ShopAdmin ");
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
			strSql.Append("select count(1) FROM T_Base_ShopAdmin ");
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
			strSql.Append(")AS Row, T.*  from T_Base_ShopAdmin T ");
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
			parameters[0].Value = "T_Base_ShopAdmin";
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

