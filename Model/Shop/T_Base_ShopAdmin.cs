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
namespace SoulShop.Model
{
	/// <summary>
	/// T_Base_ShopAdmin:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class T_Base_ShopAdmin
	{
		public T_Base_ShopAdmin()
		{}
		#region Model
		private string _shopid;
		private string _id;
		private string _password;
		private string _shopname;
		private string _ownerid;
		private string _ownername;
		private string _ownerphone;
		private string _ownerqq;
		private string _owneraddress;
		private int? _areaid;
		private int? _freeze;
		private int? _checking;
		private string _headicon;
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
		public string ID
		{
			set{ _id=value;}
			get{return _id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string Password
		{
			set{ _password=value;}
			get{return _password;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string ShopName
		{
			set{ _shopname=value;}
			get{return _shopname;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string OwnerID
		{
			set{ _ownerid=value;}
			get{return _ownerid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string OwnerName
		{
			set{ _ownername=value;}
			get{return _ownername;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string OwnerPhone
		{
			set{ _ownerphone=value;}
			get{return _ownerphone;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string OwnerQQ
		{
			set{ _ownerqq=value;}
			get{return _ownerqq;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string OwnerAddress
		{
			set{ _owneraddress=value;}
			get{return _owneraddress;}
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
		public int? Freeze
		{
			set{ _freeze=value;}
			get{return _freeze;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? Checking
		{
			set{ _checking=value;}
			get{return _checking;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string HeadIcon
		{
			set{ _headicon=value;}
			get{return _headicon;}
		}
		#endregion Model

	}
}

