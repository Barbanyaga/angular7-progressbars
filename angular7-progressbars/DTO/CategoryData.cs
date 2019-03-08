/*==============================================================
 * Copyright (c) 2019,Peter Barbanyaga Date: 03.2019
 * Version IDE: MS VS 2017
 * Designed by: Peter Barbanyaga / barbanyaga@gmail.com [03.2019]
 *=============================================================*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace angular7_progressbars.DTO
{
	public class CategoryData
	{
		/// <summary>
		/// Name of category
		/// </summary>
		public string Title { get; set; }

		/// <summary>
		/// Current value
		/// </summary>
		public int Value { get; set; }

		/// <summary>
		/// Maximum value
		/// </summary>
		public int MaxValue { get; set; }

		public CategoryData(string title, int value, int maxValue)
		{
			this.Title = title;
			this.Value = value;
			this.MaxValue = maxValue;
		}
	}
}
