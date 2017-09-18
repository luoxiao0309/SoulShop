/**  版本信息模板在安装目录下，可自行修改。
* T_Base_ChatOnline.cs
*
* 功 能： N/A
* 类 名： T_Base_ChatOnline
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/14 17:29:20   N/A    初版
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
	/// T_Base_ChatOnline:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class T_Base_ChatOnline
	{
		public T_Base_ChatOnline()
		{}
		#region Model
		private string _sendername;
		private string _receivername;
		private string _contents;
		private DateTime? _createtime;
		private int _id;
		private int? _ischecked;
		/// <summary>
		/// 
		/// </summary>
		public string SenderName
		{
			set{ _sendername=value;}
			get{return _sendername;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string ReceiverName
		{
			set{ _receivername=value;}
			get{return _receivername;}
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

