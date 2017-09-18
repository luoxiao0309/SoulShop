/**  版本信息模板在安装目录下，可自行修改。
* T_Base_SysData.cs
*
* 功 能： N/A
* 类 名： T_Base_SysData
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/14 17:29:32   N/A    初版
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
	/// 数据访问类:T_Base_SysData
	/// </summary>
	public partial class T_Base_SysData
	{
		public T_Base_SysData()
		{}
		#region  BasicMethod



		/// <summary>
		/// 增加一条数据
		/// </summary>
		public bool Add(SoulShop.Model.T_Base_SysData model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("insert into T_Base_SysData(");
			strSql.Append("SaleProductSum,FreezeAdminOrderNumber,SumSaleProductSum)");
			strSql.Append(" values (");
			strSql.Append("@SaleProductSum,@FreezeAdminOrderNumber,@SumSaleProductSum)");
			SqlParameter[] parameters = {
					new SqlParameter("@SaleProductSum", SqlDbType.Int,4),
					new SqlParameter("@FreezeAdminOrderNumber", SqlDbType.Int,4),
					new SqlParameter("@SumSaleProductSum", SqlDbType.Int,4)};
			parameters[0].Value = model.SaleProductSum;
			parameters[1].Value = model.FreezeAdminOrderNumber;
			parameters[2].Value = model.SumSaleProductSum;

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
		public bool Update(SoulShop.Model.T_Base_SysData model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("update T_Base_SysData set ");
			strSql.Append("SaleProductSum=@SaleProductSum,");
			strSql.Append("FreezeAdminOrderNumber=@FreezeAdminOrderNumber,");
			strSql.Append("SumSaleProductSum=@SumSaleProductSum");
			strSql.Append(" where ");
			SqlParameter[] parameters = {
					new SqlParameter("@SaleProductSum", SqlDbType.Int,4),
					new SqlParameter("@FreezeAdminOrderNumber", SqlDbType.Int,4),
					new SqlParameter("@SumSaleProductSum", SqlDbType.Int,4)};
			parameters[0].Value = model.SaleProductSum;
			parameters[1].Value = model.FreezeAdminOrderNumber;
			parameters[2].Value = model.SumSaleProductSum;

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
		public bool Delete()
		{
			//该表无主键信息，请自定义主键/条件字段
			StringBuilder strSql=new StringBuilder();
			strSql.Append("delete from T_Base_SysData ");
			strSql.Append(" where ");
			SqlParameter[] parameters = {
			};

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
		public SoulShop.Model.T_Base_SysData GetModel()
		{
			//该表无主键信息，请自定义主键/条件字段
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select  top 1 SaleProductSum,FreezeAdminOrderNumber,SumSaleProductSum from T_Base_SysData ");
			strSql.Append(" where ");
			SqlParameter[] parameters = {
			};

			SoulShop.Model.T_Base_SysData model=new SoulShop.Model.T_Base_SysData();
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
		public SoulShop.Model.T_Base_SysData DataRowToModel(DataRow row)
		{
			SoulShop.Model.T_Base_SysData model=new SoulShop.Model.T_Base_SysData();
			if (row != null)
			{
				if(row["SaleProductSum"]!=null && row["SaleProductSum"].ToString()!="")
				{
					model.SaleProductSum=int.Parse(row["SaleProductSum"].ToString());
				}
				if(row["FreezeAdminOrderNumber"]!=null && row["FreezeAdminOrderNumber"].ToString()!="")
				{
					model.FreezeAdminOrderNumber=int.Parse(row["FreezeAdminOrderNumber"].ToString());
				}
				if(row["SumSaleProductSum"]!=null && row["SumSaleProductSum"].ToString()!="")
				{
					model.SumSaleProductSum=int.Parse(row["SumSaleProductSum"].ToString());
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
			strSql.Append("select SaleProductSum,FreezeAdminOrderNumber,SumSaleProductSum ");
			strSql.Append(" FROM T_Base_SysData ");
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
			strSql.Append(" SaleProductSum,FreezeAdminOrderNumber,SumSaleProductSum ");
			strSql.Append(" FROM T_Base_SysData ");
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
			strSql.Append("select count(1) FROM T_Base_SysData ");
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
			strSql.Append(")AS Row, T.*  from T_Base_SysData T ");
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
			parameters[0].Value = "T_Base_SysData";
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

