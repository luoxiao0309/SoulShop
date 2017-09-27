/**  版本信息模板在安装目录下，可自行修改。
* T_Base_OrderHead.cs
*
* 功 能： N/A
* 类 名： T_Base_OrderHead
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/27 20:39:11   N/A    初版
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
	/// 数据访问类:T_Base_OrderHead
	/// </summary>
	public partial class T_Base_OrderHead
	{
		public T_Base_OrderHead()
		{}
		#region  BasicMethod

		/// <summary>
		/// 得到最大ID
		/// </summary>
		public int GetMaxId()
		{
		return DbHelperSQL.GetMaxID("ID", "T_Base_OrderHead"); 
		}

		/// <summary>
		/// 是否存在该记录
		/// </summary>
		public bool Exists(int ID)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select count(1) from T_Base_OrderHead");
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
		public int Add(SoulShop.Model.T_Base_OrderHead model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("insert into T_Base_OrderHead(");
			strSql.Append("TotalPrice,Status,BuyerID,AddressID,DeleteBuyer,DeleteShop,SalesReturn,TrackingNumver,CreateTime,WaitReceiveTime,FreezeTime,WaitCommentTime,FinishTime,ShopID)");
			strSql.Append(" values (");
			strSql.Append("@TotalPrice,@Status,@BuyerID,@AddressID,@DeleteBuyer,@DeleteShop,@SalesReturn,@TrackingNumver,@CreateTime,@WaitReceiveTime,@FreezeTime,@WaitCommentTime,@FinishTime,@ShopID)");
			strSql.Append(";select @@IDENTITY");
			SqlParameter[] parameters = {
					new SqlParameter("@TotalPrice", SqlDbType.Decimal,9),
					new SqlParameter("@Status", SqlDbType.Int,4),
					new SqlParameter("@BuyerID", SqlDbType.NVarChar,20),
					new SqlParameter("@AddressID", SqlDbType.Int,4),
					new SqlParameter("@DeleteBuyer", SqlDbType.Int,4),
					new SqlParameter("@DeleteShop", SqlDbType.Int,4),
					new SqlParameter("@SalesReturn", SqlDbType.Int,4),
					new SqlParameter("@TrackingNumver", SqlDbType.NVarChar,100),
					new SqlParameter("@CreateTime", SqlDbType.DateTime),
					new SqlParameter("@WaitReceiveTime", SqlDbType.DateTime),
					new SqlParameter("@FreezeTime", SqlDbType.DateTime),
					new SqlParameter("@WaitCommentTime", SqlDbType.DateTime),
					new SqlParameter("@FinishTime", SqlDbType.DateTime),
					new SqlParameter("@ShopID", SqlDbType.NVarChar,50)};
			parameters[0].Value = model.TotalPrice;
			parameters[1].Value = model.Status;
			parameters[2].Value = model.BuyerID;
			parameters[3].Value = model.AddressID;
			parameters[4].Value = model.DeleteBuyer;
			parameters[5].Value = model.DeleteShop;
			parameters[6].Value = model.SalesReturn;
			parameters[7].Value = model.TrackingNumver;
			parameters[8].Value = model.CreateTime;
			parameters[9].Value = model.WaitReceiveTime;
			parameters[10].Value = model.FreezeTime;
			parameters[11].Value = model.WaitCommentTime;
			parameters[12].Value = model.FinishTime;
			parameters[13].Value = model.ShopID;

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
		public bool Update(SoulShop.Model.T_Base_OrderHead model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("update T_Base_OrderHead set ");
			strSql.Append("TotalPrice=@TotalPrice,");
			strSql.Append("Status=@Status,");
			strSql.Append("BuyerID=@BuyerID,");
			strSql.Append("AddressID=@AddressID,");
			strSql.Append("DeleteBuyer=@DeleteBuyer,");
			strSql.Append("DeleteShop=@DeleteShop,");
			strSql.Append("SalesReturn=@SalesReturn,");
			strSql.Append("TrackingNumver=@TrackingNumver,");
			strSql.Append("CreateTime=@CreateTime,");
			strSql.Append("WaitReceiveTime=@WaitReceiveTime,");
			strSql.Append("FreezeTime=@FreezeTime,");
			strSql.Append("WaitCommentTime=@WaitCommentTime,");
			strSql.Append("FinishTime=@FinishTime,");
			strSql.Append("ShopID=@ShopID");
			strSql.Append(" where ID=@ID");
			SqlParameter[] parameters = {
					new SqlParameter("@TotalPrice", SqlDbType.Decimal,9),
					new SqlParameter("@Status", SqlDbType.Int,4),
					new SqlParameter("@BuyerID", SqlDbType.NVarChar,20),
					new SqlParameter("@AddressID", SqlDbType.Int,4),
					new SqlParameter("@DeleteBuyer", SqlDbType.Int,4),
					new SqlParameter("@DeleteShop", SqlDbType.Int,4),
					new SqlParameter("@SalesReturn", SqlDbType.Int,4),
					new SqlParameter("@TrackingNumver", SqlDbType.NVarChar,100),
					new SqlParameter("@CreateTime", SqlDbType.DateTime),
					new SqlParameter("@WaitReceiveTime", SqlDbType.DateTime),
					new SqlParameter("@FreezeTime", SqlDbType.DateTime),
					new SqlParameter("@WaitCommentTime", SqlDbType.DateTime),
					new SqlParameter("@FinishTime", SqlDbType.DateTime),
					new SqlParameter("@ShopID", SqlDbType.NVarChar,50),
					new SqlParameter("@ID", SqlDbType.Int,4)};
			parameters[0].Value = model.TotalPrice;
			parameters[1].Value = model.Status;
			parameters[2].Value = model.BuyerID;
			parameters[3].Value = model.AddressID;
			parameters[4].Value = model.DeleteBuyer;
			parameters[5].Value = model.DeleteShop;
			parameters[6].Value = model.SalesReturn;
			parameters[7].Value = model.TrackingNumver;
			parameters[8].Value = model.CreateTime;
			parameters[9].Value = model.WaitReceiveTime;
			parameters[10].Value = model.FreezeTime;
			parameters[11].Value = model.WaitCommentTime;
			parameters[12].Value = model.FinishTime;
			parameters[13].Value = model.ShopID;
			parameters[14].Value = model.ID;

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
			strSql.Append("delete from T_Base_OrderHead ");
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
			strSql.Append("delete from T_Base_OrderHead ");
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
		public SoulShop.Model.T_Base_OrderHead GetModel(int ID)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select  top 1 ID,TotalPrice,Status,BuyerID,AddressID,DeleteBuyer,DeleteShop,SalesReturn,TrackingNumver,CreateTime,WaitReceiveTime,FreezeTime,WaitCommentTime,FinishTime,ShopID from T_Base_OrderHead ");
			strSql.Append(" where ID=@ID");
			SqlParameter[] parameters = {
					new SqlParameter("@ID", SqlDbType.Int,4)
			};
			parameters[0].Value = ID;

			SoulShop.Model.T_Base_OrderHead model=new SoulShop.Model.T_Base_OrderHead();
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
		public SoulShop.Model.T_Base_OrderHead DataRowToModel(DataRow row)
		{
			SoulShop.Model.T_Base_OrderHead model=new SoulShop.Model.T_Base_OrderHead();
			if (row != null)
			{
				if(row["ID"]!=null && row["ID"].ToString()!="")
				{
					model.ID=int.Parse(row["ID"].ToString());
				}
				if(row["TotalPrice"]!=null && row["TotalPrice"].ToString()!="")
				{
					model.TotalPrice=decimal.Parse(row["TotalPrice"].ToString());
				}
				if(row["Status"]!=null && row["Status"].ToString()!="")
				{
					model.Status=int.Parse(row["Status"].ToString());
				}
				if(row["BuyerID"]!=null)
				{
					model.BuyerID=row["BuyerID"].ToString();
				}
				if(row["AddressID"]!=null && row["AddressID"].ToString()!="")
				{
					model.AddressID=int.Parse(row["AddressID"].ToString());
				}
				if(row["DeleteBuyer"]!=null && row["DeleteBuyer"].ToString()!="")
				{
					model.DeleteBuyer=int.Parse(row["DeleteBuyer"].ToString());
				}
				if(row["DeleteShop"]!=null && row["DeleteShop"].ToString()!="")
				{
					model.DeleteShop=int.Parse(row["DeleteShop"].ToString());
				}
				if(row["SalesReturn"]!=null && row["SalesReturn"].ToString()!="")
				{
					model.SalesReturn=int.Parse(row["SalesReturn"].ToString());
				}
				if(row["TrackingNumver"]!=null)
				{
					model.TrackingNumver=row["TrackingNumver"].ToString();
				}
				if(row["CreateTime"]!=null && row["CreateTime"].ToString()!="")
				{
					model.CreateTime=DateTime.Parse(row["CreateTime"].ToString());
				}
				if(row["WaitReceiveTime"]!=null && row["WaitReceiveTime"].ToString()!="")
				{
					model.WaitReceiveTime=DateTime.Parse(row["WaitReceiveTime"].ToString());
				}
				if(row["FreezeTime"]!=null && row["FreezeTime"].ToString()!="")
				{
					model.FreezeTime=DateTime.Parse(row["FreezeTime"].ToString());
				}
				if(row["WaitCommentTime"]!=null && row["WaitCommentTime"].ToString()!="")
				{
					model.WaitCommentTime=DateTime.Parse(row["WaitCommentTime"].ToString());
				}
				if(row["FinishTime"]!=null && row["FinishTime"].ToString()!="")
				{
					model.FinishTime=DateTime.Parse(row["FinishTime"].ToString());
				}
				if(row["ShopID"]!=null)
				{
					model.ShopID=row["ShopID"].ToString();
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
			strSql.Append("select ID,TotalPrice,Status,BuyerID,AddressID,DeleteBuyer,DeleteShop,SalesReturn,TrackingNumver,CreateTime,WaitReceiveTime,FreezeTime,WaitCommentTime,FinishTime,ShopID ");
			strSql.Append(" FROM T_Base_OrderHead ");
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
			strSql.Append(" ID,TotalPrice,Status,BuyerID,AddressID,DeleteBuyer,DeleteShop,SalesReturn,TrackingNumver,CreateTime,WaitReceiveTime,FreezeTime,WaitCommentTime,FinishTime,ShopID ");
			strSql.Append(" FROM T_Base_OrderHead ");
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
			strSql.Append("select count(1) FROM T_Base_OrderHead ");
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
			strSql.Append(")AS Row, T.*  from T_Base_OrderHead T ");
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
			parameters[0].Value = "T_Base_OrderHead";
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

