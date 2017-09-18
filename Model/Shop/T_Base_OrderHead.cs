/**  版本信息模板在安装目录下，可自行修改。
* T_Base_OrderHead.cs
*
* 功 能： N/A
* 类 名： T_Base_OrderHead
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/14 17:29:21   N/A    初版
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
	/// T_Base_OrderHead:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class T_Base_OrderHead
	{
		public T_Base_OrderHead()
		{}
		#region Model
		private int _id;
		private decimal? _totalprice;
		private int? _status;
		private string _buyerid;
		private int? _addressid;
		private int? _deletebuyer;
		private int? _deleteshop;
		private int? _salesreturn;
		private string _trackingnumver;
		private DateTime? _createtime;
		private DateTime? _waitreceivetime;
		private DateTime? _freezetime;
		private DateTime? _waitcommenttime;
		private DateTime? _finishtime;
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
		public decimal? TotalPrice
		{
			set{ _totalprice=value;}
			get{return _totalprice;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? Status
		{
			set{ _status=value;}
			get{return _status;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string BuyerID
		{
			set{ _buyerid=value;}
			get{return _buyerid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? AddressID
		{
			set{ _addressid=value;}
			get{return _addressid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? DeleteBuyer
		{
			set{ _deletebuyer=value;}
			get{return _deletebuyer;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? DeleteShop
		{
			set{ _deleteshop=value;}
			get{return _deleteshop;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? SalesReturn
		{
			set{ _salesreturn=value;}
			get{return _salesreturn;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string TrackingNumver
		{
			set{ _trackingnumver=value;}
			get{return _trackingnumver;}
		}
		/// <summary>
		/// 
		/// </summary>
		public DateTime? CreateTime
		{
			set{ _createtime=value;}
			get{return _createtime;}
		}
		/// <summary>
		/// 
		/// </summary>
		public DateTime? WaitReceiveTime
		{
			set{ _waitreceivetime=value;}
			get{return _waitreceivetime;}
		}
		/// <summary>
		/// 
		/// </summary>
		public DateTime? FreezeTime
		{
			set{ _freezetime=value;}
			get{return _freezetime;}
		}
		/// <summary>
		/// 
		/// </summary>
		public DateTime? WaitCommentTime
		{
			set{ _waitcommenttime=value;}
			get{return _waitcommenttime;}
		}
		/// <summary>
		/// 
		/// </summary>
		public DateTime? FinishTime
		{
			set{ _finishtime=value;}
			get{return _finishtime;}
		}
		#endregion Model

	}
}

