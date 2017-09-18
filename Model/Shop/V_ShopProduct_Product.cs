/**  版本信息模板在安装目录下，可自行修改。
* V_ShopProduct_Product.cs
*
* 功 能： N/A
* 类 名： V_ShopProduct_Product
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/14 17:29:42   N/A    初版
*
* Copyright (c) 2012 Maticsoft Corporation. All rights reserved.
*┌──────────────────────────────────┐
*│　此技术信息为本公司机密信息，未经本公司书面同意禁止向第三方披露．　│
*│　版权所有：动软卓越（北京）科技有限公司　　　　　　　　　　　　　　│
*└──────────────────────────────────┘
*/
using System;
namespace SoulShop.Model
{
	/// <summary>
	/// V_ShopProduct_Product:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class V_ShopProduct_Product
	{
		public V_ShopProduct_Product()
		{}
		#region Model
		private int _id;
		private string _size;
		private string _color;
		private int? _stock;
		private decimal? _pirce;
		private int? _monthlysale;
		private string _shopid;
		private int? _productid;
		private string _name;
		private string _description;
		private int? _areaid;
		private int? _productcategoryid;
		/// <summary>
		/// 
		/// </summary>
		public int ID
		{
			set{ _id=value;}
			get{return _id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string Size
		{
			set{ _size=value;}
			get{return _size;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string Color
		{
			set{ _color=value;}
			get{return _color;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? Stock
		{
			set{ _stock=value;}
			get{return _stock;}
		}
		/// <summary>
		/// 
		/// </summary>
		public decimal? Pirce
		{
			set{ _pirce=value;}
			get{return _pirce;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? MonthlySale
		{
			set{ _monthlysale=value;}
			get{return _monthlysale;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string ShopID
		{
			set{ _shopid=value;}
			get{return _shopid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? ProductID
		{
			set{ _productid=value;}
			get{return _productid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string Name
		{
			set{ _name=value;}
			get{return _name;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string Description
		{
			set{ _description=value;}
			get{return _description;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? AreaID
		{
			set{ _areaid=value;}
			get{return _areaid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? ProductCategoryID
		{
			set{ _productcategoryid=value;}
			get{return _productcategoryid;}
		}
		#endregion Model

	}
}

