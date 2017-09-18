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
namespace SoulShop.Model
{
	/// <summary>
	/// T_Base_Chat:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class T_Base_Chat
	{
		public T_Base_Chat()
		{}
		#region Model
		private string _buyerid;
		private string _shopadminid;
		private string _contents;
		private DateTime? _createtime;
		private string _sender;
		private int _id;
		private int? _ischecked;
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
		public string ShopAdminID
		{
			set{ _shopadminid=value;}
			get{return _shopadminid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string Contents
		{
			set{ _contents=value;}
			get{return _contents;}
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
		public string Sender
		{
			set{ _sender=value;}
			get{return _sender;}
		}
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
		public int? IsChecked
		{
			set{ _ischecked=value;}
			get{return _ischecked;}
		}
		#endregion Model

	}
}

