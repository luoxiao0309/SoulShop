/**  版本信息模板在安装目录下，可自行修改。
* V_SaleShopProduct_ShopProduct_Product.cs
*
* 功 能： N/A
* 类 名： V_SaleShopProduct_ShopProduct_Product
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/14 17:29:41   N/A    初版
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
	/// 数据访问类:V_SaleShopProduct_ShopProduct_Product
	/// </summary>
	public partial class V_SaleShopProduct_ShopProduct_Product
	{
		public V_SaleShopProduct_ShopProduct_Product()
		{}
		#region  BasicMethod



		/// <summary>
		/// 增加一条数据
		/// </summary>
		public bool Add(SoulShop.Model.V_SaleShopProduct_ShopProduct_Product model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("insert into V_SaleShopProduct_ShopProduct_Product(");
			strSql.Append("StartTime,EndTime,Discount,ID,Size,Color,Stock,Pirce,MonthlySale,ShopID,ProductID,Name,Description,AreaID,ProductCategoryID)");
			strSql.Append(" values (");
			strSql.Append("@StartTime,@EndTime,@Discount,@ID,@Size,@Color,@Stock,@Pirce,@MonthlySale,@ShopID,@ProductID,@Name,@Description,@AreaID,@ProductCategoryID)");
			SqlParameter[] parameters = {
					new SqlParameter("@StartTime", SqlDbType.DateTime),
					new SqlParameter("@EndTime", SqlDbType.DateTime),
					new SqlParameter("@Discount", SqlDbType.Decimal,9),
					new SqlParameter("@ID", SqlDbType.Int,4),
					new SqlParameter("@Size", SqlDbType.NVarChar,50),
					new SqlParameter("@Color", SqlDbType.NVarChar,50),
					new SqlParameter("@Stock", SqlDbType.Int,4),
					new SqlParameter("@Pirce", SqlDbType.Decimal,9),
					new SqlParameter("@MonthlySale", SqlDbType.Int,4),
					new SqlParameter("@ShopID", SqlDbType.NVarChar,20),
					new SqlParameter("@ProductID", SqlDbType.Int,4),
					new SqlParameter("@Name", SqlDbType.NVarChar,50),
					new SqlParameter("@Description", SqlDbType.NVarChar,200),
					new SqlParameter("@AreaID", SqlDbType.Int,4),
					new SqlParameter("@ProductCategoryID", SqlDbType.Int,4)};
			parameters[0].Value = model.StartTime;
			parameters[1].Value = model.EndTime;
			parameters[2].Value = model.Discount;
			parameters[3].Value = model.ID;
			parameters[4].Value = model.Size;
			parameters[5].Value = model.Color;
			parameters[6].Value = model.Stock;
			parameters[7].Value = model.Pirce;
			parameters[8].Value = model.MonthlySale;
			parameters[9].Value = model.ShopID;
			parameters[10].Value = model.ProductID;
			parameters[11].Value = model.Name;
			parameters[12].Value = model.Description;
			parameters[13].Value = model.AreaID;
			parameters[14].Value = model.ProductCategoryID;

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
		public bool Update(SoulShop.Model.V_SaleShopProduct_ShopProduct_Product model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("update V_SaleShopProduct_ShopProduct_Product set ");
			strSql.Append("StartTime=@StartTime,");
			strSql.Append("EndTime=@EndTime,");
			strSql.Append("Discount=@Discount,");
			strSql.Append("ID=@ID,");
			strSql.Append("Size=@Size,");
			strSql.Append("Color=@Color,");
			strSql.Append("Stock=@Stock,");
			strSql.Append("Pirce=@Pirce,");
			strSql.Append("MonthlySale=@MonthlySale,");
			strSql.Append("ShopID=@ShopID,");
			strSql.Append("ProductID=@ProductID,");
			strSql.Append("Name=@Name,");
			strSql.Append("Description=@Description,");
			strSql.Append("AreaID=@AreaID,");
			strSql.Append("ProductCategoryID=@ProductCategoryID");
			strSql.Append(" where ");
			SqlParameter[] parameters = {
					new SqlParameter("@StartTime", SqlDbType.DateTime),
					new SqlParameter("@EndTime", SqlDbType.DateTime),
					new SqlParameter("@Discount", SqlDbType.Decimal,9),
					new SqlParameter("@ID", SqlDbType.Int,4),
					new SqlParameter("@Size", SqlDbType.NVarChar,50),
					new SqlParameter("@Color", SqlDbType.NVarChar,50),
					new SqlParameter("@Stock", SqlDbType.Int,4),
					new SqlParameter("@Pirce", SqlDbType.Decimal,9),
					new SqlParameter("@MonthlySale", SqlDbType.Int,4),
					new SqlParameter("@ShopID", SqlDbType.NVarChar,20),
					new SqlParameter("@ProductID", SqlDbType.Int,4),
					new SqlParameter("@Name", SqlDbType.NVarChar,50),
					new SqlParameter("@Description", SqlDbType.NVarChar,200),
					new SqlParameter("@AreaID", SqlDbType.Int,4),
					new SqlParameter("@ProductCategoryID", SqlDbType.Int,4)};
			parameters[0].Value = model.StartTime;
			parameters[1].Value = model.EndTime;
			parameters[2].Value = model.Discount;
			parameters[3].Value = model.ID;
			parameters[4].Value = model.Size;
			parameters[5].Value = model.Color;
			parameters[6].Value = model.Stock;
			parameters[7].Value = model.Pirce;
			parameters[8].Value = model.MonthlySale;
			parameters[9].Value = model.ShopID;
			parameters[10].Value = model.ProductID;
			parameters[11].Value = model.Name;
			parameters[12].Value = model.Description;
			parameters[13].Value = model.AreaID;
			parameters[14].Value = model.ProductCategoryID;

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
			strSql.Append("delete from V_SaleShopProduct_ShopProduct_Product ");
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
		public SoulShop.Model.V_SaleShopProduct_ShopProduct_Product GetModel()
		{
			//该表无主键信息，请自定义主键/条件字段
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select  top 1 StartTime,EndTime,Discount,ID,Size,Color,Stock,Pirce,MonthlySale,ShopID,ProductID,Name,Description,AreaID,ProductCategoryID from V_SaleShopProduct_ShopProduct_Product ");
			strSql.Append(" where ");
			SqlParameter[] parameters = {
			};

			SoulShop.Model.V_SaleShopProduct_ShopProduct_Product model=new SoulShop.Model.V_SaleShopProduct_ShopProduct_Product();
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
		public SoulShop.Model.V_SaleShopProduct_ShopProduct_Product DataRowToModel(DataRow row)
		{
			SoulShop.Model.V_SaleShopProduct_ShopProduct_Product model=new SoulShop.Model.V_SaleShopProduct_ShopProduct_Product();
			if (row != null)
			{
				if(row["StartTime"]!=null && row["StartTime"].ToString()!="")
				{
					model.StartTime=DateTime.Parse(row["StartTime"].ToString());
				}
				if(row["EndTime"]!=null && row["EndTime"].ToString()!="")
				{
					model.EndTime=DateTime.Parse(row["EndTime"].ToString());
				}
				if(row["Discount"]!=null && row["Discount"].ToString()!="")
				{
					model.Discount=decimal.Parse(row["Discount"].ToString());
				}
				if(row["ID"]!=null && row["ID"].ToString()!="")
				{
					model.ID=int.Parse(row["ID"].ToString());
				}
				if(row["Size"]!=null)
				{
					model.Size=row["Size"].ToString();
				}
				if(row["Color"]!=null)
				{
					model.Color=row["Color"].ToString();
				}
				if(row["Stock"]!=null && row["Stock"].ToString()!="")
				{
					model.Stock=int.Parse(row["Stock"].ToString());
				}
				if(row["Pirce"]!=null && row["Pirce"].ToString()!="")
				{
					model.Pirce=decimal.Parse(row["Pirce"].ToString());
				}
				if(row["MonthlySale"]!=null && row["MonthlySale"].ToString()!="")
				{
					model.MonthlySale=int.Parse(row["MonthlySale"].ToString());
				}
				if(row["ShopID"]!=null)
				{
					model.ShopID=row["ShopID"].ToString();
				}
				if(row["ProductID"]!=null && row["ProductID"].ToString()!="")
				{
					model.ProductID=int.Parse(row["ProductID"].ToString());
				}
				if(row["Name"]!=null)
				{
					model.Name=row["Name"].ToString();
				}
				if(row["Description"]!=null)
				{
					model.Description=row["Description"].ToString();
				}
				if(row["AreaID"]!=null && row["AreaID"].ToString()!="")
				{
					model.AreaID=int.Parse(row["AreaID"].ToString());
				}
				if(row["ProductCategoryID"]!=null && row["ProductCategoryID"].ToString()!="")
				{
					model.ProductCategoryID=int.Parse(row["ProductCategoryID"].ToString());
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
			strSql.Append("select StartTime,EndTime,Discount,ID,Size,Color,Stock,Pirce,MonthlySale,ShopID,ProductID,Name,Description,AreaID,ProductCategoryID ");
			strSql.Append(" FROM V_SaleShopProduct_ShopProduct_Product ");
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
			strSql.Append(" StartTime,EndTime,Discount,ID,Size,Color,Stock,Pirce,MonthlySale,ShopID,ProductID,Name,Description,AreaID,ProductCategoryID ");
			strSql.Append(" FROM V_SaleShopProduct_ShopProduct_Product ");
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
			strSql.Append("select count(1) FROM V_SaleShopProduct_ShopProduct_Product ");
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
				strSql.Append("order by T.BuyerID desc");
			}
			strSql.Append(")AS Row, T.*  from V_SaleShopProduct_ShopProduct_Product T ");
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
			parameters[0].Value = "V_SaleShopProduct_ShopProduct_Product";
			parameters[1].Value = "BuyerID";
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

