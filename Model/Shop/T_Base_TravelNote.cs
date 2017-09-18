/**  版本信息模板在安装目录下，可自行修改。
* T_Base_TravelNote.cs
*
* 功 能： N/A
* 类 名： T_Base_TravelNote
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/14 17:29:33   N/A    初版
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
	/// T_Base_TravelNote:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class T_Base_TravelNote
	{
		public T_Base_TravelNote()
		{}
		#region Model
		private int _id;
		private string _title;
		private string _contents;
		private DateTime? _createtime;
		private int? _commentamount;
		private int? _praiseamount;
		private int? _visitamount;
		private string _buyerid;
		private int? _areaid;
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
		public string Title
		{
			set{ _title=value;}
			get{return _title;}
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
		public int? CommentAmount
		{
			set{ _commentamount=value;}
			get{return _commentamount;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? PraiseAmount
		{
			set{ _praiseamount=value;}
			get{return _praiseamount;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? VisitAmount
		{
			set{ _visitamount=value;}
			get{return _visitamount;}
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
		public int? AreaID
		{
			set{ _areaid=value;}
			get{return _areaid;}
		}
		#endregion Model

	}
}

