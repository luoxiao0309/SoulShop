/**  版本信息模板在安装目录下，可自行修改。
* T_TravelNote_Pic.cs
*
* 功 能： N/A
* 类 名： T_TravelNote_Pic
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/8/1 11:48:07   N/A    初版
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
	/// T_TravelNote_Pic:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class T_TravelNote_Pic
	{
		public T_TravelNote_Pic()
		{}
		#region Model
		private int _id;
		private string _path;
		private int? _travelnoteid;
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
		public string Path
		{
			set{ _path=value;}
			get{return _path;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? TravelNoteID
		{
			set{ _travelnoteid=value;}
			get{return _travelnoteid;}
		}
		#endregion Model

	}
}

