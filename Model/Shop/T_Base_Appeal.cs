/**  版本信息模板在安装目录下，可自行修改。
* T_Base_Appeal.cs
*
* 功 能： N/A
* 类 名： T_Base_Appeal
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/8/1 11:47:37   N/A    初版
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
	/// T_Base_Appeal:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class T_Base_Appeal
	{
		public T_Base_Appeal()
		{}
		#region Model
		private int _id;
		private DateTime? _createtime;
		private string _appeal;
		private int? _orderheadid;
		private int? _hascheck;
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
		public DateTime? CreateTime
		{
			set{ _createtime=value;}
			get{return _createtime;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string appeal
		{
			set{ _appeal=value;}
			get{return _appeal;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? OrderHeadID
		{
			set{ _orderheadid=value;}
			get{return _orderheadid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? HasCheck
		{
			set{ _hascheck=value;}
			get{return _hascheck;}
		}
		#endregion Model

	}
}

