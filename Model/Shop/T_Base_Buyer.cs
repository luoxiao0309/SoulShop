/**  版本信息模板在安装目录下，可自行修改。
* T_Base_Buyer.cs
*
* 功 能： N/A
* 类 名： T_Base_Buyer
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/14 17:29:18   N/A    初版
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
	/// T_Base_Buyer:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class T_Base_Buyer
	{
		public T_Base_Buyer()
		{}
		#region Model
		private string _id;
		private string _password;
		private string _nickname;
		private string _qq;
		private string _phone;
		private int? _freeze;
		private string _headicon;
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
		public string NickName
		{
			set{ _nickname=value;}
			get{return _nickname;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string QQ
		{
			set{ _qq=value;}
			get{return _qq;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string Phone
		{
			set{ _phone=value;}
			get{return _phone;}
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
		public string HeadIcon
		{
			set{ _headicon=value;}
			get{return _headicon;}
		}
		#endregion Model

	}
}

