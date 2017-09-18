/**  版本信息模板在安装目录下，可自行修改。
* T_Base_ChatContacks.cs
*
* 功 能： N/A
* 类 名： T_Base_ChatContacks
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
	/// T_Base_ChatContacks:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class T_Base_ChatContacks
	{
		public T_Base_ChatContacks()
		{}
		#region Model
		private string _conackname;
		private string _ownername;
		private int _id;
		/// <summary>
		/// 
		/// </summary>
		public string ConackName
		{
			set{ _conackname=value;}
			get{return _conackname;}
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
		public int ID
		{
			set{ _id=value;}
			get{return _id;}
		}
		#endregion Model

	}
}

