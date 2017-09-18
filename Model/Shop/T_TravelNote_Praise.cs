/**  版本信息模板在安装目录下，可自行修改。
* T_TravelNote_Praise.cs
*
* 功 能： N/A
* 类 名： T_TravelNote_Praise
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/14 17:29:39   N/A    初版
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
	/// T_TravelNote_Praise:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class T_TravelNote_Praise
	{
		public T_TravelNote_Praise()
		{}
		#region Model
		private int _travelnoteid;
		private string _buyerid;
		private DateTime? _createtime;
		/// <summary>
		/// 
		/// </summary>
		public int TravelNoteID
		{
			set{ _travelnoteid=value;}
			get{return _travelnoteid;}
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
		public DateTime? CreateTime
		{
			set{ _createtime=value;}
			get{return _createtime;}
		}
		#endregion Model

	}
}

