/**  版本信息模板在安装目录下，可自行修改。
* T_Base_Advertisement.cs
*
* 功 能： N/A
* 类 名： T_Base_Advertisement
*
* Ver    变更日期             负责人  变更内容
* ───────────────────────────────────
* V0.01  2017/9/14 17:29:17   N/A    初版
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
	/// T_Base_Advertisement:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class T_Base_Advertisement
	{
		public T_Base_Advertisement()
		{}
		#region Model
		private int _id;
		private string _adlink;
		private string _picpath;
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
		public string AdLink
		{
			set{ _adlink=value;}
			get{return _adlink;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string PicPath
		{
			set{ _picpath=value;}
			get{return _picpath;}
		}
		#endregion Model

	}
}

