/**  版本信息模板在安装目录下，可自行修改。
* T_Base_OrderItem.cs
*
* 功 能： N/A
* 类 名： T_Base_OrderItem
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/14 17:29:22   N/A    初版
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
	/// T_Base_OrderItem:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class T_Base_OrderItem
	{
		public T_Base_OrderItem()
		{}
		#region Model
		private int _orderheadid;
		private int _shopproductid;
		private int? _amount;
		private decimal? _discount;
		/// <summary>
		/// 
		/// </summary>
		public int OrderHeadID
		{
			set{ _orderheadid=value;}
			get{return _orderheadid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int ShopProductID
		{
			set{ _shopproductid=value;}
			get{return _shopproductid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? Amount
		{
			set{ _amount=value;}
			get{return _amount;}
		}
		/// <summary>
		/// 
		/// </summary>
		public decimal? Discount
		{
			set{ _discount=value;}
			get{return _discount;}
		}
		#endregion Model

	}
}

